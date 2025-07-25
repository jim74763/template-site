"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Link2, Share } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";

export function Navbar() {
  //taking the path name and converting it to a string and making the individual words look better
  const pathname = usePathname();
  const currentPath = pathname?.split("/").filter(Boolean) || [];
  const pathSegments =
    pathname
      ?.split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      ) || [];

  const [copy, setCopy] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center sm:justify-between justify-center">
        {/* Left side - Breadcrumbs */}
        <NavigationMenu className="sm:block hidden">
          <NavigationMenuList>
            <NavigationMenuItem className="flex">
              <NavigationMenuLink asChild className="mx-1 font-semibold">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jimvd.xyz"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <p className="py-1">/</p>
              <NavigationMenuLink
                asChild
                active={pathname === "/"}
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
                    active={
                      pathname === `/${currentPath.slice(0, id + 1).join("/")}`
                    }
                  >
                    <Link
                      href={`/${currentPath.slice(0, id + 1).join("/")}`}
                      className="mx-1 font-semibold text-nowrap"
                    >
                      {segment}
                    </Link>
                  </NavigationMenuLink>
                </React.Fragment>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - jimvd.com and share */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-3 py-2 flex items-center gap-1.5 text-sm font-medium bg-transparent hover:bg-accent">
                <Share size={14} /> share
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid">
                  <Button
                    variant="ghost"
                    onClick={async (e) => {
                      e.preventDefault();
                      await navigator.share({
                        title: document.title,
                        url: window.location.href,
                      });
                    }}
                  >
                    <Share size={14} />
                    <span>Share</span>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(window.location.href);
                      setCopy(true);
                      setTimeout(() => {
                        setCopy(false);
                      }, 2000);
                    }}
                  >
                    <Link2 size={14} />
                    <motion.span
                      key={copy ? "copied" : "copy"} // Key changes to trigger animation
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {copy ? "Copied" : "Copy URL"}
                    </motion.span>
                  </Button>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="https://jimvd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium mx-2"
                >
                  jimvd.com
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="https://jimvd.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium mx-2"
                >
                  jimvd.xyz
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="mr-3">
                <ModeToggle />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
