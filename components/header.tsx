"use client"

import { Bell, HelpCircle, Menu, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Conversations", href: "/conversations" },
    { name: "Agents", href: "/agents" },
    { name: "Integrations", href: "/integrations" },
    { name: "Analytics", href: "/analytics" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 border-b border-slate-200/80 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-brand-blue to-brand-teal text-white font-bold py-1 px-3 rounded-md mr-2"
            >
              Lithi.AI
            </Link>
          </div>
          <nav className="hidden lg:flex items-center ml-8 space-x-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "bg-blue-50 text-brand-blue" : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="hidden md:flex items-center mx-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue-600 hover:to-brand-teal-600 text-white button-glow"
          >
            <Plus className="mr-1 h-4 w-4" />
            Connect New System
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600 relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
              3
            </Badge>
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-600">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-medium text-sm">
                  SA
                </div>
                <span className="hidden md:inline text-sm font-medium">Sarah Anderson</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
