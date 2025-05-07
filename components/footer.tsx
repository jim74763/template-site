import Link from "next/link";
import { ExternalLink } from "lucide-react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "jimvd.com",
    href: "https:jimvd.com",
    isExternal: true,
  },
  {
    title: "Software",
    href: "/software",
  },
  {
    title: "GitHub",
    href: "https://github.com/jim74763/template-site",
    isExternal: true,
  }
];

export default function FooterSection() {
  return (
    <footer className="border-b bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            {new Date().getFullYear()} jim van duijsen
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span className="flex gap-1">
                  {link.title}
                  {link.isExternal && <ExternalLink size={14} />}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
