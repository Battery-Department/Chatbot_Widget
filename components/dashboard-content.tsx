"use client"

import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import WelcomeSection from "@/components/welcome-section"
import StatsSection from "@/components/stats-section"
import SystemsSection from "@/components/systems-section"
import AgentsSection from "@/components/agents-section"
import ActivityFeed from "@/components/activity-feed"
import QuickActions from "@/components/quick-actions"
import IndustrySelector from "@/components/industry-selector"

export default function DashboardContent() {
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const [selectedIndustry, setSelectedIndustry] = useState("Finance")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <WelcomeSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <StatsSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <IndustrySelector selectedIndustry={selectedIndustry} onSelectIndustry={setSelectedIndustry} />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <SystemsSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <AgentsSection />
        </div>
      </div>
      <div className="space-y-6">
        {!isMobile && (
          <div className="animate-fade-in-right" style={{ animationDelay: "150ms" }}>
            <QuickActions />
          </div>
        )}
        <div className="animate-fade-in-right" style={{ animationDelay: "250ms" }}>
          <ActivityFeed />
        </div>
        {isMobile && <QuickActions />}
      </div>
    </div>
  )
}
