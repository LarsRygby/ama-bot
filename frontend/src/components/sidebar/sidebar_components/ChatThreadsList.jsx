import { ChatThreadItem } from "./ChatThreadItem";

export function ChatThreadsList(props) {
  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <ul>
        <li className="chat-threads-title">Recent coffee chats</li>

        {props.threads.map((thread) => (
          <ChatThreadItem
            key={thread.id}
            href={thread.href}
            title={thread.title}
            isActive={thread.isActive}
          />
        ))}
      </ul>
    </nav>
  );
}
