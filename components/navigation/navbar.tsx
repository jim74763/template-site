"use client";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { ShareButton } from "./share-button";
import { Beardcrumbs } from "./beardcrumbs";
import { ExternalWebsiteButton } from "./external-website-button";

interface WebsiteLinks {
    href: string;
    title: string;
}

const websiteLinks: WebsiteLinks[] = [
    {
        title: "Jimvanduijsen.com",
        href: "https://jimvanduijsen.com?utm_source=template.jimvd.xyz&utm_medium=referral&utm_campaign=template_to_main",
    },
    {
        title: "Jimvd.com",
        href: "https://jimvd.xyz?utm_source=template_jimvd_xyz&utm_medium=referral&utm_campaign=template_to_main",
    },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <Beardcrumbs />
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-2">
                        <ShareButton />
                        {websiteLinks.map((website, idx) => (
                          <ExternalWebsiteButton key={idx} href={website.href} title={website.title}/>
                        ))}
                        <ModeToggle />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
