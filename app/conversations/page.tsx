import Dashboard from "@/components/dashboard"
import ConversationsContent from "@/components/conversations-content"

export default function ConversationsPage() {
  return (
    <Dashboard activeRoute="Conversations">
      <ConversationsContent />
    </Dashboard>
  )
}
