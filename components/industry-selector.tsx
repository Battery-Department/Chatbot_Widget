"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface IndustrySelectorProps {
  selectedIndustry: string
  onSelectIndustry: (industry: string) => void
}

export default function IndustrySelector({ selectedIndustry, onSelectIndustry }: IndustrySelectorProps) {
  const industries = [
    {
      name: "Construction",
      description: "Optimized for construction and real estate businesses",
      features: ["Project Management", "Contractor Communication", "Document Handling"],
    },
    {
      name: "Finance",
      description: "Tailored for financial services and banking",
      features: ["Compliance Handling", "Transaction Analysis", "Client Management"],
    },
    {
      name: "Healthcare",
      description: "Designed for healthcare providers and services",
      features: ["Patient Communication", "Appointment Scheduling", "HIPAA Compliance"],
    },
    {
      name: "Retail",
      description: "Perfect for retail and e-commerce businesses",
      features: ["Inventory Management", "Customer Support", "Order Processing"],
    },
  ]

  const selectedIndustryData = industries.find((i) => i.name === selectedIndustry) || industries[0]

  return (
    <Card className="border border-slate-200/80 shadow-card card-hover-effect overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-100 bg-gradient-to-r from-brand-blue-50 to-brand-teal-50">
        <CardTitle className="text-lg font-bold text-slate-900 flex items-center justify-between">
          <span>Industry Template</span>
          <Badge variant="outline" className="bg-white border-brand-blue-200 text-brand-blue flex items-center gap-1">
            <Check className="h-3 w-3" />
            Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Customize your experience with industry-specific templates and AI agents
            </p>
            <Select value={selectedIndustry} onValueChange={onSelectIndustry}>
              <SelectTrigger className="w-full md:w-[200px] bg-white border-slate-200">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry.name} value={industry.name}>
                    {industry.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 flex-1">
            <h4 className="text-sm font-medium text-slate-900 mb-1">{selectedIndustryData.name} Template</h4>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">{selectedIndustryData.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {selectedIndustryData.features.map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="bg-white text-slate-700 text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
