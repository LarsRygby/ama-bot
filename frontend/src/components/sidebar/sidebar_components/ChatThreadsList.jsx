import {ChatThreadItem} from "./ChatThreadItem";

const threads = [
  { id: 1, href: "/chat/how-to-learn-programming", title: "How to learn programming?" },
  { id: 2, href: "/chat/best-pizza-toppings", title: "What are the best pizza toppings?" },
  { id: 3, href: "/chat/explain-quantum-physics", title: "Can you explain quantum physics?" },
  { id: 4, href: "/chat/morning-routine-ideas", title: "Help me create a morning routine" },
  { id: 5, href: "/chat/weekend-activity-suggestions", title: "What should I do this weekend?" },
  { id: 6, href: "/chat/why-sky-blue", title: "Why is the sky blue?" },
  { id: 7, href: "/chat/learn-new-language", title: "How do I learn a new language?" },
  { id: 8, href: "/chat/meaning-of-life", title: "What's the meaning of life?" },
  { id: 9, href: "/chat/funny-joke-please", title: "Tell me a funny joke" },
  { id: 10, href: "/chat/healthy-dinner-ideas", title: "What's a healthy dinner idea?" },
  { id: 11, href: "/chat/good-book-recommendations", title: "Recommend me a good book" },
  { id: 12, href: "/chat/creative-writing-prompt", title: "Give me a creative writing prompt" },
  { id: 13, href: "/chat/fix-slow-computer", title: "My computer is slow, help?" },
  { id: 14, href: "/chat/interesting-history-fact", title: "Tell me an interesting history fact" },
  { id: 15, href: "/chat/history-of-coffee", title: "What's the history of coffee?" },
  { id: 16, href: "/chat/best-programming-language", title: "Which programming language should I learn next?" },
  { id: 17, href: "/chat/space-exploration", title: "How far have we explored space?" },
  { id: 18, href: "/chat/quick-breakfast-ideas", title: "Give me some quick breakfast ideas" },
  { id: 19, href: "/chat/understanding-black-holes", title: "How do black holes actually work?" },
  { id: 20, href: "/chat/indoor-plants", title: "What are some easy indoor plants to care for?" },
  { id: 21, href: "/chat/ancient-egypt", title: "Tell me about ancient Egyptian civilisation" },
  { id: 22, href: "/chat/improve-focus", title: "How can I improve my concentration?" },
  { id: 23, href: "/chat/ocean-depths", title: "What lives in the deepest parts of the ocean?" },
  { id: 24, href: "/chat/keyboard-shortcuts", title: "Useful VS Code keyboard shortcuts" },
  { id: 25, href: "/chat/medieval-castles", title: "How were medieval castles built?" },
  { id: 26, href: "/chat/meal-prep", title: "Help me plan meals for the week" },
  { id: 27, href: "/chat/artificial-intelligence", title: "How does artificial intelligence learn?" },
  { id: 28, href: "/chat/interesting-animal-facts", title: "Share some unusual animal facts" },
  { id: 29, href: "/chat/learn-git", title: "Explain Git branches and merging" }
];

export function ChatThreadsList() {
  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <ul>
        <li className="chat-threads-title">Recent coffee chats</li>

        {threads.map((thread) =>(
            <ChatThreadItem key={thread.id} href={thread.href} title={thread.title} />
        ))}
      </ul>
    </nav>
  );
}