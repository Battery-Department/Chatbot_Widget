import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsContent() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-heading tracking-tight">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="text-sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Total Conversations", value: "1,234", change: "+12%", icon: LineChart },
          { title: "Resolution Rate", value: "92%", change: "+5%", icon: PieChart },
          { title: "Avg. Response Time", value: "1m 45s", change: "-10%", icon: BarChart },
        ].map((stat, i) => (
          <Card key={i} className="shadow-card card-hover-effect">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm text-slate-500">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-brand-blue" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs font-medium text-green-600">{stat.change}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-card card-hover-effect md:col-span-2">
          <CardHeader>
            <CardTitle>Conversation Trends</CardTitle>
            <CardDescription>Number of conversations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md">
              <p className="text-slate-500">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card card-hover-effect">
          <CardHeader>
            <CardTitle>Resolution by Category</CardTitle>
            <CardDescription>Issue resolution by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center bg-slate-50 rounded-md">
              <p className="text-slate-500">Pie chart would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card card-hover-effect">
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
            <CardDescription>Performance metrics by agent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center bg-slate-50 rounded-md">
              <p className="text-slate-500">Bar chart would go here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
