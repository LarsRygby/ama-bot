import {Coffee, Plus} from "lucide-react";

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="coffee-icon-wrapper">
        <Coffee size={30} strokeWidth={2} />
      </div>
      <div className="sidebar-header-text-wrapper">
        <h2 className="chatbot-title">CoffeeGPT</h2>
        <p className="chatbot-subtitle">Your daily dose of answers</p>
      </div>
      <a href="/chat/new" className="new-chat-btn">
        <Plus size={20} strokeWidth={2} />
      </a>
    </div>
  );
}

export default SidebarHeader;
