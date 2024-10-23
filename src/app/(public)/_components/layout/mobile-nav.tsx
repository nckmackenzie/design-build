'use client';
import { RiMenu5Fill } from 'react-icons/ri';

import { Button } from '@/components/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/sheet';
import { NAV_LINKS } from '@/lib/constants';
import NavLink from './nav-link';
import { useCallback, useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="block md:hidden bg-transparent"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu5Fill className="text-secondary" size={32} />
      </Button>
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent side="right" className="w-full bg-slate-800">
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile Navigation</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <ul
            className="flex flex-col items-center space-y-8 mt-56"
            role="list"
          >
            <NavLink href="/" name="Home" handleClick={handleClose} />
            {NAV_LINKS.map(li => (
              <NavLink key={li.href} {...li} handleClick={handleClose} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
