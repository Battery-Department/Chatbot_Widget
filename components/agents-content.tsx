import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Filter, Bot, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AgentsContent() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-heading tracking-tight">AI Agents</h1>
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
            Create Agent
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Sales Assistant", type: "Sales", status: "Active" },
          { name: "Customer Support", type: "Support", status: "Active" },
          { name: "Lead Qualifier", type: "Sales", status: "Inactive" },
          { name: "Data Analyst", type: "Analytics", status: "Active" },
        ].map((agent, i) => (
          <Card key={i} className="shadow-card card-hover-effect">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{agent.name}</CardTitle>
                <Badge
                  className={`${
                    agent.status === "Active" ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {agent.status}
                </Badge>
              </div>
              <CardDescription>{agent.type} Agent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-600 mb-3">
                <Bot className="h-4 w-4 mr-2 text-brand-blue" />
                <span>AI-powered assistant</span>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                This agent helps with {agent.type.toLowerCase()} tasks and can be customized to your needs.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-brand-blue to-brand-teal text-white"
                >
                  Deploy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
