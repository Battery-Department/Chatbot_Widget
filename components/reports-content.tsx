import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, Plus, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ReportsContent() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-heading tracking-tight">Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-brand-blue to-brand-teal text-white button-glow"
          >
            <Plus className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>View and download your recent reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Monthly Performance Report", date: "June 1, 2023", type: "Performance" },
              { name: "Customer Satisfaction Survey", date: "May 15, 2023", type: "CSAT" },
              { name: "Agent Efficiency Analysis", date: "May 1, 2023", type: "Efficiency" },
              { name: "Quarterly Business Review", date: "April 1, 2023", type: "Business" },
            ].map((report, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-brand-blue-50 rounded-md mr-3">
                    <FileText className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">{report.name}</h3>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-3 w-3 text-slate-400 mr-1" />
                      <span className="text-xs text-slate-500">{report.date}</span>
                      <Badge className="ml-2 bg-slate-100 text-slate-700 text-xs">{report.type}</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-brand-blue">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-card card-hover-effect">
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>Reports that run automatically</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Weekly Performance Summary", schedule: "Every Monday", active: true },
                { name: "Monthly Analytics Report", schedule: "1st of month", active: true },
              ].map((report, i) => (
                <div key={i} className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">{report.name}</h3>
                    <p className="text-xs text-slate-500">{report.schedule}</p>
                  </div>
                  <Badge className={report.active ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-800"}>
                    {report.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card card-hover-effect">
          <CardHeader>
            <CardTitle>Report Templates</CardTitle>
            <CardDescription>Pre-configured report templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Agent Performance", description: "Analyze agent metrics" },
                { name: "Customer Satisfaction", description: "Track CSAT scores" },
                { name: "Conversation Analytics", description: "Analyze conversation data" },
              ].map((template, i) => (
                <div key={i} className="p-3 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">{template.name}</h3>
                    <p className="text-xs text-slate-500">{template.description}</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Use
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
