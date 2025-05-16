"use client"

import { Progress } from "@/components/ui/progress"
import { Sparkles } from "lucide-react"

export default function WelcomeSection() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-card card-hover-effect border border-slate-200/80">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold gradient-heading tracking-tight">Welcome back, Sarah</h1>
          <p className="text-slate-600 mt-1 leading-relaxed">Here's what's happening at Acme Corporation today</p>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-2 bg-gradient-to-r from-brand-blue-50 to-brand-teal-50 px-3 py-1.5 rounded-lg border border-brand-blue-100">
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-blue">Enterprise Plan</span>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium text-slate-900">Onboarding Progress</h3>
            <p className="text-xs text-slate-600 mt-1">Complete your setup to unlock all features</p>
          </div>
          <div className="flex-1 max-w-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-700">75% Complete</span>
              <span className="text-xs text-slate-600">3 of 4 steps</span>
            </div>
            <Progress
              value={75}
              className="h-2 bg-slate-200"
              indicatorClassName="bg-gradient-to-r from-brand-blue to-brand-teal"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
