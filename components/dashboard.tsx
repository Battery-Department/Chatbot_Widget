"use client"

import { useState, useEffect, type ReactNode } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"

interface DashboardProps {
  children?: ReactNode
  activeRoute?: string
}

export default function Dashboard({ children, activeRoute = "Dashboard" }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate loading state for animation purposes
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} activeRoute={activeRoute} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 pt-20">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
