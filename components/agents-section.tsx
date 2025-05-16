"use client"

import { MessageSquare, TrendingUp, DollarSign, Bot } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function AgentsSection() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)

  const agents = [
    {
      id: "sales",
      title: "Sales Engagement Agent",
      description:
        "Turn leads into meetings instantly. Our AI sales agents connect with prospects the moment they show interest.",
      icon: TrendingUp,
      color: "from-brand-blue to-brand-blue-700",
      lightColor: "from-brand-blue-100 to-brand-blue-50",
      metrics: {
        conversations: 156,
        resolutionRate: 78,
        avgResponseTime: "45s",
      },
      capabilities: ["Lead Qualification", "Meeting Scheduling", "Follow-ups"],
    },
    {
      id: "support",
      title: "Customer Service Agent",
      description:
        "Resolve customer issues instantly, 24/7. Our AI agents understand context, recognize sentiment, and solve problems.",
      icon: MessageSquare,
      color: "from-brand-teal to-brand-teal-600",
      lightColor: "from-brand-teal-100 to-brand-teal-50",
      metrics: {
        conversations: 243,
        resolutionRate: 92,
        avgResponseTime: "28s",
      },
      capabilities: ["Issue Resolution", "Sentiment Analysis", "Escalation Management"],
    },
    {
      id: "finance",
      title: "Financial Analytics",
      description: "Transform your business data into instant insights. Connect your financial systems with one click.",
      icon: DollarSign,
      color: "from-purple-700 to-purple-600",
      lightColor: "from-purple-100 to-purple-50",
      metrics: {
        conversations: 89,
        resolutionRate: 95,
        avgResponseTime: "32s",
      },
      capabilities: ["Financial Reporting", "Trend Analysis", "Forecasting"],
    },
    {
      id: "chatbot",
      title: "Smart Chatbot",
      description: "Elevate customer support in minutes. Deploy our AI chatbot with zero technical expertise required.",
      icon: Bot,
      color: "from-amber-600 to-amber-500",
      lightColor: "from-amber-100 to-amber-50",
      metrics: {
        conversations: 312,
        resolutionRate: 88,
        avgResponseTime: "15s",
      },
      capabilities: ["24/7 Support", "Multi-language", "Knowledge Base Integration"],
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold gradient-heading tracking-tight">Your AI Agents</h2>
        <Button variant="outline" size="sm" className="text-sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className={cn(
              "overflow-hidden border border-slate-200/80 shadow-card card-hover-effect",
              hoveredAgent === agent.id ? "shadow-card-hover -translate-y-0.5" : "",
            )}
            onMouseEnter={() => setHoveredAgent(agent.id)}
            onMouseLeave={() => setHoveredAgent(null)}
          >
            <CardHeader className="pb-2 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-10 -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--${agent.id}-gradient-start), var(--${agent.id}-gradient-end))`,
                }}
              ></div>
              <div className="flex items-center">
                <div className={`p-2 rounded-md bg-gradient-to-r ${agent.color} mr-3 shadow-md`}>
                  <agent.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-base font-bold">{agent.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-slate-600 mb-3 leading-relaxed">
                {agent.description}
              </CardDescription>

              <div className="mb-4 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {agent.capabilities.map((capability, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-xs"
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-md mb-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.conversations}</div>
                    <div className="text-xs text-slate-500">Conversations</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.resolutionRate}%</div>
                    <div className="text-xs text-slate-500">Resolution</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{agent.metrics.avgResponseTime}</div>
                    <div className="text-xs text-slate-500">Avg. Response</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  Configure
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 text-xs bg-gradient-to-r shadow-md button-glow"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--${agent.id}-gradient-start), var(--${agent.id}-gradient-end))`,
                  }}
                >
                  Deploy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
