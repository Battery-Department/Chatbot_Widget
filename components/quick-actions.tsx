"use client"

import { Zap, Users, MessageSquare, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function QuickActions() {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null)

  const actions = [
    {
      id: "connect",
      name: "Connect New System",
      description: "One-click integration with your business tools",
      icon: Zap,
      color: "from-brand-blue to-brand-teal",
      lightColor: "from-brand-blue-50 to-brand-teal-50",
    },
    {
      id: "agent",
      name: "Create AI Agent",
      description: "Deploy a new AI agent in minutes",
      icon: Users,
      color: "from-brand-blue to-brand-blue-700",
      lightColor: "from-brand-blue-50 to-brand-blue-100",
    },
    {
      id: "conversations",
      name: "View Conversations",
      description: "Monitor active customer interactions",
      icon: MessageSquare,
      color: "from-brand-teal to-brand-teal-600",
      lightColor: "from-brand-teal-50 to-brand-teal-100",
    },
    {
      id: "report",
      name: "Generate Report",
      description: "Create custom analytics reports",
      icon: FileText,
      color: "from-purple-700 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
    },
  ]

  return (
    <Card className="border border-slate-200/80 shadow-card card-hover-effect">
      <CardHeader className="pb-2 border-b border-slate-100">
        <CardTitle className="text-lg font-bold gradient-heading">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {actions.map((action) => (
            <div
              key={action.id}
              className={cn(
                "group rounded-lg border border-slate-200 overflow-hidden transition-all duration-300",
                hoveredAction === action.id ? "shadow-md" : "",
              )}
              onMouseEnter={() => setHoveredAction(action.id)}
              onMouseLeave={() => setHoveredAction(null)}
            >
              <div className="p-3 flex items-center">
                <div
                  className={cn(
                    "flex-shrink-0 h-10 w-10 rounded-md flex items-center justify-center bg-gradient-to-r shadow-sm transition-transform duration-300",
                    action.color,
                    hoveredAction === action.id ? "scale-110" : "",
                  )}
                >
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-medium text-slate-900">{action.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{action.description}</p>
                </div>
                <ArrowRight
                  className={cn(
                    "h-4 w-4 text-slate-400 transition-all duration-300",
                    hoveredAction === action.id
                      ? "transform translate-x-0 opacity-100 text-brand-blue"
                      : "transform -translate-x-2 opacity-0",
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
