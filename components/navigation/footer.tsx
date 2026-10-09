import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FooterLink, type FooterLinkProps } from "./footer-link";
import { CreditLine } from "./credit-line";



const links:FooterLinkProps[] = [
  {
    title: "Home",
    href: "https://jimvanduijsen.com?utm_source=template.jimvd.xyz&utm_medium=referral&utm_campaign=template_to_main",
    isExternal: true,
  },
  {
    title: "Templates",
    href: "/",
  },
  {
    title: "jimvanduijsen.com",
    href: "https://jimvanduijsen.com?utm_source=template.jimvd.xyz&utm_medium=referral&utm_campaign=template_to_main",
    isExternal: true,
  },
  {
    title: "jimvd.xyz",
    href: "https://jimvd.xyz?utm_source=template_jimvd_xyz&utm_medium=referral&utm_campaign=template_to_main",
    isExternal: true,
  },
  {
    title: "software",
    href: "https://jimvd.xyz/software?utm_source=template_jimvd_xyz&utm_medium=referral&utm_campaign=template_to_main",
    isExternal: true,
  },
  {
    title: "GitHub",
    href: "https://github.com/jim74763/template-site",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jim-van-duijsen-1124282a0/",
    isExternal: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-b bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <CreditLine/>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, idx) => (
              <FooterLink key={idx} link={link}/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
