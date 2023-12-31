"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname.endsWith(href);

  const linkClasses = classNames(
    { "text-[var(--burnt-sienna)]": isActive },
    { "text-[var(--clover)]": !isActive },
    "h-full",
    "flex",
    "items-center",
    "transition",
    "hover:text-[var(--burnt-sienna)]"
  );

  return (
    <Link href={href} className={linkClasses}>
      {label}
    </Link>
  );
}
