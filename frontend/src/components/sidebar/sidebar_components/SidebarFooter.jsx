import { User } from "lucide-react";

function SidebarFooter() {
  return (
    <div className="sidebar-footer">
      <a href="/profile" className="user-profile">
        <div className="user-avatar">
          <User size={20} strokeWidth={2} />
        </div>
        <span className="user-name">Barista</span>
      </a>
    </div>
  );
}

export default SidebarFooter;
