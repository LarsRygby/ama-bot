import { Bean } from "lucide-react";
import {ChatMessages} from "./chat_components/ChatMessages";
import {ChatInput} from "./chat_components/ChatInput";

function Chat({messages = []}) {
  return (
    <section className="chat-container">
      <Bean className="chat-watermark" />

      <ChatMessages messages={messages}/>
      <ChatInput />
    </section>
  );
}

export default Chat;
