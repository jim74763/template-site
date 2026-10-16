'use client'

import { useEffect, useRef } from 'react'

type LeafletMapProps = {
  address: string
  latitude: number
  longitude: number
  title: string
  zoom: number
  className?: string
}

export function LeafletMap({
  address,
  latitude,
  longitude,
  title,
  zoom,
  className,
}: LeafletMapProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let disposed = false
    let removeMap: (() => void) | undefined

    async function initializeMap() {
      const L = await import('leaflet')

      if (disposed || !elementRef.current) return

      const map = L.map(elementRef.current, {
        center: [latitude, longitude],
        scrollWheelZoom: false,
        zoom,
      })

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      const icon = L.divIcon({
        className: '',
        html: '<span class="leaflet-business-marker" aria-hidden="true"></span>',
        iconAnchor: [10, 10],
        iconSize: [20, 20],
      })
      const marker = L.marker([latitude, longitude], { icon }).addTo(map)
      const popup = document.createElement('div')
      const popupTitle = document.createElement('strong')
      const popupAddress = document.createElement('p')

      popupTitle.textContent = title
      popupAddress.textContent = address
      popup.append(popupTitle, popupAddress)
      marker.bindPopup(popup)

      removeMap = () => map.remove()
    }

    void initializeMap()

    return () => {
      disposed = true
      removeMap?.()
    }
  }, [address, latitude, longitude, title, zoom])

  return (
    <div
      ref={elementRef}
      aria-label={`${title}: ${address}`}
      className={className}
      role="region"
    />
  )
}
