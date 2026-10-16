import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export interface FooterLinkProps {
  title: string
  href: string
  isExternal?: boolean
}

export function FooterLink({ link }: { link: FooterLinkProps }) {
  return (
    <Link
      href={link.href}
      className="text-muted-foreground hover:text-primary block duration-150"
    >
      <span className="flex gap-1">
        {link.title}
        {link.isExternal && <ExternalLink size={14} />}
      </span>
    </Link>
  )
}
