import { Send } from "lucide-react";

export function ChatInput() {
  return (
    <form className="chat-composer">
      <div className="chat-input-wrapper">
        <textarea
          className="chat-input"
          placeholder="Why is coffee..."
          rows="1"
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />

        <button className="send-button" type="submit" aria-label="Send message">
          <Send size={20} strokeWidth={2} />
        </button>
      </div>
    </form>
  );
}