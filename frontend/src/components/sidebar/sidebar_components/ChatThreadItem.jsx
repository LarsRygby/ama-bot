import { BeanOff, X } from "lucide-react";

export function ChatThreadItem({
  isActive = false,
  href = "",
  title = "No title",
}) {
  function handleDeleteClick(event) {
    event.stopPropagation();

    console.log("Delete clicked:", {
      title,
      href,
    });
  }

  return (
    <li className={`chat-thread-item ${isActive ? "active" : ""}`}>
      <div className="chat-thread-item-content">
        <a href={href} className="chat-thread-link">
          {title}
        </a>
        <button
          className="chat-thread-delete-btn"
          type="button"
          aria-label="Delete chat"
          onClick={handleDeleteClick}
        >
          <X size={16} strokeWidth={3} />
        </button>
      </div>
    </li>
  );
}
