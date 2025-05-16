"use client"

import { Check, Clock, Plus, ExternalLink, Settings, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function SystemsSection() {
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null)

  const connectedSystems = [
    {
      name: "Salesforce",
      status: "active",
      lastSync: "5 minutes ago",
      logo: "/placeholder.svg?height=40&width=40",
      uptime: 99.8,
      dataPoints: 12453,
      activity: "high",
    },
    {
      name: "HubSpot",
      status: "active",
      lastSync: "10 minutes ago",
      logo: "/placeholder.svg?height=40&width=40",
      uptime: 100,
      dataPoints: 8721,
      activity: "medium",
    },
    {
      name: "Zendesk",
      status: "active",
      lastSync: "15 minutes ago",
      logo: "/placeholder.svg?height=40&width=40",
      uptime: 99.5,
      dataPoints: 5432,
      activity: "high",
    },
    {
      name: "Shopify",
      status: "active",
      lastSync: "30 minutes ago",
      logo: "/placeholder.svg?height=40&width=40",
      uptime: 98.9,
      dataPoints: 3211,
      activity: "low",
    },
  ]

  const getActivityIndicator = (activity: string) => {
    switch (activity) {
      case "high":
        return "animate-pulse bg-emerald-500"
      case "medium":
        return "animate-pulse [animation-duration:2s] bg-blue-500"
      case "low":
        return "animate-pulse [animation-duration:3s] bg-slate-400"
      default:
        return "bg-slate-300"
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold gradient-heading tracking-tight">Your Connected Systems</h2>
        <Button variant="outline" size="sm" className="text-sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connectedSystems.map((system) => (
          <Card
            key={system.name}
            className={cn(
              "overflow-hidden border border-slate-200/80 shadow-card card-hover-effect",
              hoveredSystem === system.name ? "shadow-card-hover -translate-y-0.5" : "",
            )}
            onMouseEnter={() => setHoveredSystem(system.name)}
            onMouseLeave={() => setHoveredSystem(null)}
          >
            <CardContent className="p-0">
              <div className="p-4 border-b border-slate-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-slate-100 flex items-center justify-center">
                    <img src={system.logo || "/placeholder.svg"} alt={`${system.name} logo`} className="h-6 w-6" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium text-slate-900">{system.name}</h3>
                      <div className="ml-2 flex items-center">
                        <span className={`h-2 w-2 rounded-full ${getActivityIndicator(system.activity)}`}></span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="flex items-center text-xs text-emerald-600 font-medium">
                        <Check className="h-3 w-3 mr-1" />
                        Active
                      </span>
                      <span className="flex items-center text-xs text-slate-500 ml-3">
                        <Clock className="h-3 w-3 mr-1" />
                        {system.lastSync}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-slate-700">Connection Health</span>
                  <Badge variant="outline" className="text-xs bg-white">
                    {system.uptime}% Uptime
                  </Badge>
                </div>
                <Progress value={system.uptime} className="h-1.5 mb-3" indicatorClassName="bg-emerald-500" />
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{system.dataPoints.toLocaleString()} Data Points</span>
                  <span className="flex items-center">
                    <Activity className="h-3 w-3 mr-1" />
                    Active
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "flex border-t border-slate-100 transition-all duration-300 opacity-0 max-h-0 overflow-hidden",
                  hoveredSystem === system.name && "opacity-100 max-h-12",
                )}
              >
                <Button variant="ghost" size="sm" className="flex-1 rounded-none text-xs py-3 text-slate-600">
                  <Settings className="h-3.5 w-3.5 mr-1.5" />
                  Manage
                </Button>
                <div className="w-px bg-slate-100" />
                <Button variant="ghost" size="sm" className="flex-1 rounded-none text-xs py-3 text-brand-blue">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Explore Data
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="overflow-hidden border border-dashed border-slate-300 shadow-card card-hover-effect group">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              className="w-full h-full py-12 flex flex-col items-center justify-center group-hover:bg-blue-50 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-brand-blue-100 to-brand-teal-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="h-6 w-6 text-brand-blue" />
              </div>
              <span className="text-sm font-medium text-brand-blue">Connect New System</span>
              <span className="text-xs text-slate-500 mt-1">One-click integration</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
