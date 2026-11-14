import { Message } from "./Message";

export function ChatMessages(props) {
  return (
    <div className="chat-messages">
      <div className="chat-messages-inner">
        {props.messages.map((message) => (
          <Message key={message.id} type={message.type} timestamp={message.timestamp}>
            {message.content}
          </Message>
        ))}
      </div>
    </div>
  );
}
