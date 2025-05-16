import Dashboard from "@/components/dashboard"
import DashboardContent from "@/components/dashboard-content"

export default function Home() {
  return (
    <Dashboard activeRoute="Dashboard">
      <DashboardContent />
    </Dashboard>
  )
}
