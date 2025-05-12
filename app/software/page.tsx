"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Package,
  Palette,
  Blocks,
  GitBranch,
  Hammer,
  Shield,
  Cpu,
  ExternalLink,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function TechnologiesPage() {
  const techSections = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Core Framework",
      content:
        "Next.js 15.3.1 with React 19 and TypeScript for modern, type-safe development",
      links: [
        { name: "Next.js", url: "https://nextjs.org/" },
        { name: "React", url: "https://react.dev/" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      ],
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "UI & Styling",
      links: [
        { name: "TailwindCSS", url: "https://tailwindcss.com/" },
        { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
        { name: "Lucide React", url: "https://lucide.dev/" },
      ],
      content:
        "TailwindCSS 4 with shadcn/ui components and Lucide React icons for a cohesive design system",
    },
    {
      icon: <Hammer className="w-6 h-6 text-primary" />,
      title: "Development Tools",
      links: [
        { name: "ESLint", url: "https://eslint.org/" },
        { name: "Turbopack", url: "https://turbo.build/pack" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      ],
      content:
        "ESLint 9 for code quality, Turbopack for fast builds, and TypeScript 5 for type safety",
    },
    {
      icon: <Blocks className="w-6 h-6 text-primary" />,
      title: "Animation & UI Libraries",
      links: [
        { name: "Motion.dev", url: "https://motion.dev/" },
        {
          name: "tailwindcss-animate",
          url: "https://github.com/jamiebuilds/tailwindcss-animate",
        },
      ],
      content:
        "Motion.dev for smooth animations, with additional UI enhancements from tailwindcss-animate",
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Package Management",
      links: [{ name: "PNPM", url: "https://pnpm.io/" }],
      content:
        "PNPM for efficient and fast package management with disk space optimization",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "UI Components",
      links: [
        { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      ],
      content:
        "shadcn/ui components for beautifully designed, accessible UI components with Tailwind CSS",
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Build Optimization",
      links: [
        { name: "Class Variance Authority", url: "https://cva.style/docs" },
        {
          name: "tailwind-merge",
          url: "https://github.com/dcastil/tailwind-merge",
        },
      ],
      content:
        "Class Variance Authority and clsx/tailwind-merge for optimal CSS generation and class name handling",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-primary" />,
      title: "Version Control",
      links: [{ name: "Git", url: "https://git-scm.com/" }],
      content:
        "Git for source control, with proper TypeScript and Next.js configuration for modern development",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Domain & Hosting",
      links: [{ name: "GoDaddy", url: "https://www.godaddy.com/" }],
      content:
        "Professional domain registration and management through GoDaddy, ensuring reliable and secure web hosting for your business",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      {techSections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {section.icon}
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <p className="mb-4 flex-grow">{section.content}</p>
              <div className="flex flex-wrap gap-2">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {link.name} <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
