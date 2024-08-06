"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"

const NavItem: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  let isActive = usePathname() === href
  return (
    <NextLink
      href={href}
      prefetch={false}
      className={`font-medium px-5 py-2.5 rounded-full relative transition-all ${
        isActive && "bg-[#1A1A1A] "
      }`}
    >
      {title}
      {isActive && (
        <span className="absolute bottom-0 h-px inset-x-3 bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0" />
      )}
    </NextLink>
  )
}

const Navigation: React.FC = () => {
  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center bottom-4 sm:bottom-12">
      <div className="flex justify-center w-full max-w-xl mx-auto sm:justify-start">
        <nav className="bg-[#0F0F0F] border border-[#1B1B1B] p-1 rounded-full flex text-sm">
          <NavItem href="/" title="Home" />
          <NavItem href="/projects" title="Projects" />
          <NavItem href="/writing" title="Writing" />
          <NavItem href="/tools" title="Tools" />
        </nav>
      </div>
    </div>
  )
}

export default Navigation
