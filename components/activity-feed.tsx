"use client"

import { MessageSquare, Calendar, Zap, FileText, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ActivityFeed() {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null)

  const activities = [
    {
      id: 1,
      type: "conversation",
      description: "New conversation started with Acme Corp",
      details: "Customer inquiry about enterprise plan pricing and features",
      time: "5 minutes ago",
      icon: MessageSquare,
      color: "bg-brand-blue-100 text-brand-blue",
      user: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: 2,
      type: "meeting",
      description: "Meeting booked with TechCorp",
      details: "Product demo scheduled for tomorrow at 2:00 PM",
      time: "30 minutes ago",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
    {
      id: 3,
      type: "connection",
      description: "Connected Zendesk system",
      details: "Successfully integrated with 5,432 customer support tickets",
      time: "2 hours ago",
      icon: Zap,
      color: "bg-purple-100 text-purple-600",
      user: {
        name: "System",
        avatar: null,
      },
    },
    {
      id: 4,
      type: "report",
      description: "Monthly analytics report generated",
      details: "Report shows 24% increase in customer satisfaction",
      time: "Yesterday",
      icon: FileText,
      color: "bg-amber-100 text-amber-600",
      user: {
        name: "System",
        avatar: null,
      },
    },
    {
      id: 5,
      type: "conversation",
      description: "Support ticket resolved for Jane Doe",
      details: "Issue with account access resolved in under 3 minutes",
      time: "Yesterday",
      icon: MessageSquare,
      color: "bg-brand-blue-100 text-brand-blue",
      user: {
        name: "AI Agent",
        avatar: "/placeholder.svg?height=32&width=32",
      },
    },
  ]

  return (
    <Card className="border border-slate-200/80 shadow-card card-hover-effect">
      <CardHeader className="pb-2 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold gradient-heading">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm" className="text-xs text-slate-600 hover:text-brand-blue">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 divide-y divide-slate-100">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={cn(
                "p-4 transition-all duration-200 hover:bg-slate-50 cursor-pointer",
                expandedActivity === activity.id ? "bg-slate-50" : "",
              )}
              onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
            >
              <div className="flex items-start">
                <div className={`p-2 rounded-md ${activity.color} mr-3 mt-0.5`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900">{activity.description}</p>
                    <p className="text-xs text-slate-500 ml-2 whitespace-nowrap">{activity.time}</p>
                  </div>

                  {activity.user && (
                    <div className="flex items-center mt-1.5 text-xs text-slate-500">
                      {activity.user.avatar ? (
                        <img
                          src={activity.user.avatar || "/placeholder.svg"}
                          alt={activity.user.name}
                          className="h-4 w-4 rounded-full mr-1.5"
                        />
                      ) : (
                        <User className="h-3 w-3 mr-1.5" />
                      )}
                      {activity.user.name}
                    </div>
                  )}

                  <div
                    className={cn(
                      "mt-2 text-xs text-slate-600 overflow-hidden transition-all duration-200",
                      expandedActivity === activity.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p>{activity.details}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 h-7 text-xs text-brand-blue p-0 hover:bg-transparent hover:underline"
                    >
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
