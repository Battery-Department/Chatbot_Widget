import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Plus, Filter, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function IntegrationsContent() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-heading tracking-tight">Integrations</h1>
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
            Add Integration
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Salesforce", category: "CRM", connected: true },
          { name: "HubSpot", category: "Marketing", connected: true },
          { name: "Zendesk", category: "Support", connected: true },
          { name: "Shopify", category: "E-commerce", connected: true },
          { name: "Slack", category: "Communication", connected: false },
          { name: "Google Workspace", category: "Productivity", connected: false },
        ].map((integration, i) => (
          <Card key={i} className="shadow-card card-hover-effect">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{integration.name}</CardTitle>
                <Badge
                  className={`${integration.connected ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-800"}`}
                >
                  {integration.connected ? "Connected" : "Not Connected"}
                </Badge>
              </div>
              <CardDescription>{integration.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-600 mb-3">
                <Zap className="h-4 w-4 mr-2 text-brand-blue" />
                <span>Integration</span>
              </div>
              <div className="flex mt-4">
                {integration.connected ? (
                  <Button variant="outline" size="sm" className="w-full">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    Manage Connection
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-teal text-white"
                  >
                    Connect
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
