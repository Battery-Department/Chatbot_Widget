"use client"

import { ArrowDownIcon, ArrowUpIcon, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LineChart, Line, ResponsiveContainer } from "recharts"

export default function StatsSection() {
  // Sample sparkline data
  const generateSparklineData = (trend: "up" | "down" | "stable") => {
    const baseValue = 50
    const variance = 10

    return Array.from({ length: 7 }, (_, i) => {
      if (trend === "up") {
        return { value: baseValue + i * 5 + Math.random() * variance }
      } else if (trend === "down") {
        return { value: baseValue + 30 - i * 5 + Math.random() * variance }
      } else {
        return { value: baseValue + Math.random() * variance }
      }
    })
  }

  const stats = [
    {
      title: "Active Conversations",
      value: "243",
      change: "+12%",
      trend: "up" as const,
      description: "Total number of ongoing customer conversations across all channels",
      sparklineData: generateSparklineData("up"),
    },
    {
      title: "Connected Systems",
      value: "8",
      change: "+2",
      trend: "up" as const,
      description: "Number of business systems successfully integrated with Lithi.AI",
      sparklineData: generateSparklineData("up"),
    },
    {
      title: "Resolution Rate",
      value: "92%",
      change: "+5%",
      trend: "up" as const,
      description: "Percentage of customer inquiries resolved without human intervention",
      sparklineData: generateSparklineData("up"),
    },
    {
      title: "CSAT Score",
      value: "4.8",
      change: "-0.1",
      trend: "down" as const,
      description: "Average customer satisfaction score (out of 5) over the last 7 days",
      sparklineData: generateSparklineData("down"),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="overflow-hidden border border-slate-200/80 shadow-card card-hover-effect frosted-card"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center">
                {stat.title}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3.5 w-3.5 ml-1 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-[200px]">{stat.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div
                className={`flex items-center text-xs font-medium ${
                  stat.trend === "up" ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="h-12 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stat.sparklineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={stat.trend === "up" ? "#059669" : "#DC2626"}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-slate-500 mt-1 text-center">Last 7 days</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
