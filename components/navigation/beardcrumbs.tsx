import Link from 'next/link'
import { NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import React from 'react'
import { usePathname } from 'next/navigation'

export function Beardcrumbs() {
  const pathname = usePathname()
  const currentPath = pathname?.split('/').filter(Boolean) || []
  const pathSegments =
    pathname
      ?.split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      ) || []

  return (
    <NavigationMenuItem className="flex">
      <NavigationMenuLink asChild className="mx-1 font-semibold">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://jimvanduijsen.com?utm_source=template.jimvd.xyz&utm_medium=referral&utm_campaign=template_to_main"
        >
          Home
        </Link>
      </NavigationMenuLink>
      <p className="py-1">/</p>
      <NavigationMenuLink
        asChild
        active={pathname === '/'}
        className="mx-1 font-semibold"
      >
        <Link href="/">Templates</Link>
      </NavigationMenuLink>
      {pathSegments.map((segment, id) => (
        <React.Fragment key={`segment-${id}`}>
          <p key={`separator-${id}`} className="py-1">
            /
          </p>
          <NavigationMenuLink
            key={`link-${id}`}
            asChild
            active={pathname === `/${currentPath.slice(0, id + 1).join('/')}`}
          >
            <Link
              href={`/${currentPath.slice(0, id + 1).join('/')}`}
              className="mx-1 font-semibold text-nowrap"
            >
              {segment}
            </Link>
          </NavigationMenuLink>
        </React.Fragment>
      ))}
    </NavigationMenuItem>
  )
}
