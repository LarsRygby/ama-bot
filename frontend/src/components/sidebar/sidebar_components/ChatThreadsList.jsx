
import ChatThreadItem from "./ChatThreadItem";

function ChatThreadsList() {
  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <ul>
        <li className="chat-threads-title">Recent coffee chats</li>

        <ChatThreadItem href="/chat/how-to-learn-programming" title="How to learn programming?" />
        <ChatThreadItem href="/chat/best-pizza-toppings" title="What are the best pizza toppings?" />
        <ChatThreadItem href="/chat/explain-quantum-physics" title="Can you explain quantum physics?" />
        <ChatThreadItem href="/chat/morning-routine-ideas" title="Help me create a morning routine" />
        <ChatThreadItem href="/chat/weekend-activity-suggestions" title="What should I do this weekend?" />
        <ChatThreadItem href="/chat/why-sky-blue" title="Why is the sky blue?" />
        <ChatThreadItem href="/chat/learn-new-language" title="How do I learn a new language?" />
        <ChatThreadItem href="/chat/meaning-of-life" title="What's the meaning of life?" />
        <ChatThreadItem href="/chat/funny-joke-please" title="Tell me a funny joke" />
        <ChatThreadItem href="/chat/healthy-dinner-ideas" title="What's a healthy dinner idea?" />
        <ChatThreadItem href="/chat/good-book-recommendations" title="Recommend me a good book" />
        <ChatThreadItem href="/chat/creative-writing-prompt" title="Give me a creative writing prompt" />
        <ChatThreadItem href="/chat/fix-slow-computer" title="My computer is slow, help?" />
        <ChatThreadItem href="/chat/interesting-history-fact" title="Tell me an interesting history fact" />
        <ChatThreadItem href="/chat/history-of-coffee" title="What's the history of coffee?" />
        <ChatThreadItem href="/chat/best-programming-language" title="Which programming language should I learn next?" />
        <ChatThreadItem href="/chat/space-exploration" title="How far have we explored space?" />
        <ChatThreadItem href="/chat/quick-breakfast-ideas" title="Give me some quick breakfast ideas" />
        <ChatThreadItem href="/chat/understanding-black-holes" title="How do black holes actually work?" />
        <ChatThreadItem href="/chat/indoor-plants" title="What are some easy indoor plants to care for?" />
        <ChatThreadItem href="/chat/ancient-egypt" title="Tell me about ancient Egyptian civilisation" />
        <ChatThreadItem href="/chat/improve-focus" title="How can I improve my concentration?" />
        <ChatThreadItem href="/chat/ocean-depths" title="What lives in the deepest parts of the ocean?" />
        <ChatThreadItem href="/chat/keyboard-shortcuts" title="Useful VS Code keyboard shortcuts" />
        <ChatThreadItem href="/chat/medieval-castles" title="How were medieval castles built?" />
        <ChatThreadItem href="/chat/meal-prep" title="Help me plan meals for the week" />
        <ChatThreadItem href="/chat/artificial-intelligence" title="How does artificial intelligence learn?" />
        <ChatThreadItem href="/chat/interesting-animal-facts" title="Share some unusual animal facts" />
        <ChatThreadItem href="/chat/learn-git" title="Explain Git branches and merging" />
      </ul>
    </nav>
  );
}

export default ChatThreadsList;
