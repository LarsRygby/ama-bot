export function ChatThreadItem({isActive = false, href = "", title = "No title"}) {
  return (
    <li className={`chat-thread-item ${isActive ? "active" : ""}`}>
      <a href={href} className="chat-thread-link">
        {title}
      </a>
    </li>
  );
}