import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavLink from './_components/layout/nav-link';

import { LEGAL_LINKS, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import MobileNav from './_components/layout/mobile-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 font-sans text-foreground">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="h-16 bg-gray-900 font-mono">
      <div className="container flex justify-between items-center h-full">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logos/main_logo.png"
            alt="Design Build Logo. Click to go to homepage."
            width={100}
            height={100}
            className="size-11"
          />
        </Link>
        <MobileNav />
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center space-x-8" role="list">
            {NAV_LINKS.map(li => (
              <NavLink key={li.href} {...li} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className=" bg-gray-900 font-sans text-white py-4 md:py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="space-y-1.5">
            <div className="flex items-center gap-x-6">
              <Image
                src="/logos/main_logo.png"
                alt="Design Build Logo. Click to go to homepage."
                width={100}
                height={100}
                className="size-11"
              />
              <div className="font-mono text-xl">
                DesignBuildSupplySolutions
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              From concept to completion, we&apos;re your trusted partner in
              delivering seamless, high-quality construction solutions.
              Let&apos;s build something exceptional together.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 ">
            <div className="space-y-2">
              <div className="text-gray-400">Navigation</div>
              <ul className="flex flex-col gap-3" role="list">
                {NAV_LINKS.map(li => (
                  <Link
                    key={li.href}
                    href={li.href}
                    className="capitalize text-sm transition-colors hover:text-secondary"
                  >
                    <li>{li.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-gray-400">Socials</div>
              <ul className="flex flex-col gap-3" role="list">
                {SOCIAL_LINKS.map(li => (
                  <Link
                    key={li.href}
                    href={li.href}
                    className="capitalize text-sm transition-colors hover:text-secondary"
                  >
                    <li>{li.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-gray-400">Legal</div>
              <ul className="flex flex-col gap-3" role="list">
                {LEGAL_LINKS.map(li => (
                  <Link
                    key={li.href}
                    href={li.href}
                    className="capitalize text-sm transition-colors hover:text-secondary"
                  >
                    <li>{li.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
