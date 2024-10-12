'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  name: string;
}
export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li
      className={cn(
        'text-base capitalize text-white font-medium transition-colors hover:text-secondary',
        pathname === href ? 'text-secondary' : ''
      )}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
}
