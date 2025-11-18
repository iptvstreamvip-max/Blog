import { ThemeToggleWrapper } from "@/lib/client-side-wrappers";
import Link from "next/link";
import { navItems } from "@/lib/utils";
import Image from "next/image";
import { Shield, Users, Zap } from "lucide-react";

const LinkSection = ({
  links,
}: {
  links: { name: string; link: never | string }[];
}) => (
  <div className="flex justify-center space-y-4 flex-col mt-4">
    {links.map((link) => (
      <Link
        key={link.name}
        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
        href={`${link.link}`}
      >
        <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-4"></span>
        {link.name}
      </Link>
    ))}
  </div>
);

const policyLinks = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-service" },
  { name: "Cookie Policy", link: "/cookie-policy" },
];

const socialmediaLinks = [
  { name: "Twitter", link: "https://twitter.com" },
  { name: "Facebook", link: "https://facebook.com" },
  { name: "LinkedIn", link: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12 text-sm text-muted-foreground">
          <div className="lg:col-span-3 md:col-span-2">
            <Link
              href={"/"}
              className="mr-4 md:flex items-center space-x-2 mb-4 relative"
            >
              <Image src={"/logo-dark.png"} alt="Logo" width={30} height={30} />
              <span className="font-medium text-foreground">Startup</span>
            </Link>
            <div className="max-w-xs">
              LaunchPad is a rapid content delivery platform that helps you
              deliver content to your users in a fast and efficient way.
            </div>
            <div className="mt-4">Copyright &copy; 2024 Strapi INC</div>
            <div className="mt-10">
              Designed and Developed by{" "}
              <Link
                className="text-primary hover:underline"
                href="https://aceternity.com"
              >
                Aceternity
              </Link>{" "}
              &{" "}
              <Link className="text-primary hover:underline" href="https://strapi.io">
                Strapi
              </Link>
            </div>
            <div className="mt-2">
              built with{" "}
              <Link className="text-primary hover:underline" href="https://strapi.io">
                Strapi
              </Link>
              ,{" "}
              <Link
                className="text-primary hover:underline"
                href="https://nextjs.org"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                className="text-primary hover:underline"
                href="https://tailwindcss.com"
              >
                Tailwind CSS
              </Link>
              ,{" "}
              <Link
                className="text-primary hover:underline"
                href="https://framer.com/motion"
              >
                Motion Animation Lib
              </Link>
              , and{" "}
              <Link
                className="text-primary hover:underline"
                href="https://ui.aceternity.com"
              >
                Aceternity UI
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <LinkSection links={navItems} />
            <LinkSection links={socialmediaLinks} />
            <ThemeToggleWrapper className="col-span-2 justify-self-center" />
          </div>
        </div>
        <div className="py-8 mt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} IPTV Stream. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Secure Payment
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                99.9% Uptime
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
