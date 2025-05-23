"use client"

import { BarChart, MessageSquare, Settings, Users, Zap, Home, X, HelpCircle, FileText, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  activeRoute?: string
}

export default function Sidebar({ open, setOpen, activeRoute = "Dashboard" }: SidebarProps) {
  const navItems = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Conversations", icon: MessageSquare, href: "/conversations" },
    { name: "Agents", icon: Users, href: "/agents" },
    { name: "Integrations", icon: Zap, href: "/integrations" },
    { name: "Analytics", icon: BarChart, href: "/analytics" },
    { name: "Reports", icon: FileText, href: "/reports" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ]

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200/80 pt-16 transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 shadow-card",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="absolute top-4 right-4 lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="px-4 py-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeRoute === item.name
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-brand-blue-50 to-brand-teal-50 text-brand-blue border-l-4 border-brand-blue"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-blue",
                  )}
                  onClick={() => {
                    if (open && window.innerWidth < 1024) {
                      setOpen(false)
                    }
                  }}
                >
                  <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-brand-blue" : "text-slate-400")} />
                  {item.name}
                </Link>
              )
            })}
          </div>

          <Separator className="my-6" />

          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-all duration-200"
            >
              <HelpCircle className="mr-3 h-5 w-5 text-slate-400" />
              Help & Support
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-all duration-200"
            >
              <LogOut className="mr-3 h-5 w-5 text-slate-400" />
              Log Out
            </a>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-brand-blue-50 to-brand-teal-50 rounded-lg border border-brand-blue-100">
            <h4 className="font-medium text-sm text-brand-blue mb-2">Need Help?</h4>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Our support team is ready to assist you with any questions.
            </p>
            <Button size="sm" variant="outline" className="w-full text-xs bg-white border-slate-200">
              Contact Support
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
