import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConversationsContent() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-heading tracking-tight">Conversations</h1>
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
            New Conversation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="shadow-card card-hover-effect">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">Conversation #{i}</CardTitle>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Active</span>
              </div>
              <CardDescription>Started 2 hours ago</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-600 mb-3">
                <MessageSquare className="h-4 w-4 mr-2 text-brand-blue" />
                <span>12 messages</span>
              </div>
              <p className="text-sm text-slate-700 line-clamp-2">
                This is a sample conversation with a customer about product features and pricing options.
              </p>
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" className="text-brand-blue">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
