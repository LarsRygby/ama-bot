import SidebarHeader from "./sidebar_components/SidebarHeader"
import SidebarFooter from "./sidebar_components/SidebarFooter"
import ChatThreadsList from "./sidebar_components/ChatThreadsList";

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      {/* Chat threads list */}
      <ChatThreadsList />
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;