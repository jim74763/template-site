'use client'

import { Link2, Share } from 'lucide-react'
import { Button } from '../ui/button'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { motion } from 'motion/react'
import { useState } from 'react'

export function ShareButton() {
  const [copy, setCopy] = useState(false)

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-9 px-3 py-2 flex items-center gap-1.5 text-sm font-medium bg-transparent hover:bg-accent">
        <Share size={14} /> share
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid">
          <Button
            variant="ghost"
            onClick={async (e) => {
              e.preventDefault()
              await navigator.share({
                title: document.title,
                url: window.location.href,
              })
            }}
          >
            <Share size={14} />
            <span>Share</span>
          </Button>
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault()
              navigator.clipboard.writeText(window.location.href)
              setCopy(true)
              setTimeout(() => {
                setCopy(false)
              }, 2000)
            }}
          >
            <Link2 size={14} />
            <motion.span
              key={copy ? 'copied' : 'copy'} // Key changes to trigger animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {copy ? 'Copied' : 'Copy URL'}
            </motion.span>
          </Button>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
