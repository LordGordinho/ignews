import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  asPath: string;
  href: string;
  displayName: string;
  activeClassName: string;
}

export function ActiveLink({asPath, activeClassName, href, displayName, ...rest}: ActiveLinkProps) {
  const className = asPath === href ? activeClassName: '';

  return (
    <Link href={href} {...rest}>
      <a className={className}>{displayName}</a>
    </Link>
  )
}