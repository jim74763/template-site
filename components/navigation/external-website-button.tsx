import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";

export function ExternalWebsiteButton({ href, title }: { href:string,title:string }) {
return(
    <NavigationMenuItem
      className="sm:block hidden"
  >
      <NavigationMenuLink asChild>
          <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium mx-2"
          >
              {title}{" "}
          </Link>
      </NavigationMenuLink>
  </NavigationMenuItem>
)}
