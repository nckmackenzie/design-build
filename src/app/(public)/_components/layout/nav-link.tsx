'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  name: string;
  handleClick?: () => void;
}
export default function NavLink({ href, name, handleClick }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li
      className={cn(
        'text-base capitalize text-white font-medium transition-colors hover:text-secondary',
        pathname === href ? 'text-secondary' : ''
      )}
      onClick={handleClick}
    >
      <Link href={href} aria-current={pathname === href ? 'page' : undefined}>
        {name}
      </Link>
    </li>
  );
}
