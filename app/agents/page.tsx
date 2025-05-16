import Dashboard from "@/components/dashboard"
import AgentsContent from "@/components/agents-content"

export default function AgentsPage() {
  return (
    <Dashboard activeRoute="Agents">
      <AgentsContent />
    </Dashboard>
  )
}
