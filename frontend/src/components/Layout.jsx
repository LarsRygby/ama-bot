import Sidebar from "./sidebar/Sidebar.jsx";
import Chat from "./chat/Chat.jsx";

const messages = [
  {
    id: 1,
    type: "user",
    content: "Hello! Can you help me understand React Router v7?",
    timestamp: new Date("2026-10-31T10:32:00"),
  },
  {
    id: 2,
    type: "bot",
    content:
      "Of course! React Router v7 is the latest version that introduces several improvements including better data loading, enhanced nested routing, and improved TypeScript support. What specific aspect would you like to learn about?",
    timestamp: new Date("2026-10-31T10:32:18"),
  },
  {
    id: 3,
    type: "user",
    content: "How do nested routes work in v7?",
    timestamp: new Date("2026-10-31T10:34:05"),
  },
  {
    id: 4,
    type: "bot",
    content:
      "Nested routes in React Router v7 allow you to create hierarchical UI structures. You define parent routes that contain child routes, and use the <Outlet /> component to render child components. The parent route acts as a layout component that wraps its children.",
    timestamp: new Date("2026-10-31T10:34:22"),
  },
  {
    id: 5,
    type: "user",
    content: "What's the difference between route() and layout() helpers?",
    timestamp: new Date("2026-10-31T10:37:10"),
  },
  {
    id: 6,
    type: "bot",
    content:
      "Great question! The `route()` helper creates routes that add URL segments, while `layout()` creates routes that only provide UI structure without affecting the URL. Layout routes are perfect for shared components like sidebars or headers that should appear across multiple pages.",
    timestamp: new Date("2026-10-31T10:37:35"),
  },
  {
    id: 7,
    type: "user",
    content: "Can you show me an example of a routes.js configuration?",
    timestamp: new Date("2026-10-31T10:40:02"),
  },
  {
    id: 8,
    type: "bot",
    content:
      "Sure! Here's a basic example: You can use route(), index(), and layout() helpers to create nested route structures. The layout() function creates wrapper components, while route() adds URL segments. This approach gives you clean, hierarchical routing that's easy to maintain.",
    timestamp: new Date("2026-10-31T10:40:19"),
  },
  {
    id: 9,
    type: "user",
    content: "How do I handle data loading in React Router v7?",
    timestamp: new Date("2026-11-14T10:43:45"),
  },
  {
    id: 10,
    type: "bot",
    content:
      "React Router v7 provides excellent data loading capabilities through loader functions. You can define a `loader` function in your route component that runs before the component renders, ensuring your data is available immediately. You can access the loaded data using the `useLoaderData()` hook within your component.",
    timestamp: new Date("2026-11-14T10:44:08"),
  },
];

const threads = [
  {
    id: 1,
    href: "/chat/how-to-learn-programming",
    title: "How to learn programming?",
    isActive: true,
  },
  {
    id: 2,
    href: "/chat/best-pizza-toppings",
    title: "What are the best pizza toppings?",
    isActive: false,
  },
  {
    id: 3,
    href: "/chat/explain-quantum-physics",
    title: "Can you explain quantum physics?",
    isActive: false,
  },
  {
    id: 4,
    href: "/chat/morning-routine-ideas",
    title: "Help me create a morning routine",
    isActive: false,
  },
  {
    id: 5,
    href: "/chat/weekend-activity-suggestions",
    title: "What should I do this weekend?",
    isActive: false,
  },
  {
    id: 6,
    href: "/chat/why-sky-blue",
    title: "Why is the sky blue?",
    isActive: false,
  },
  {
    id: 7,
    href: "/chat/learn-new-language",
    title: "How do I learn a new language?",
    isActive: false,
  },
  {
    id: 8,
    href: "/chat/meaning-of-life",
    title: "What's the meaning of life?",
    isActive: false,
  },
  {
    id: 9,
    href: "/chat/funny-joke-please",
    title: "Tell me a funny joke",
    isActive: false,
  },
  {
    id: 10,
    href: "/chat/healthy-dinner-ideas",
    title: "What's a healthy dinner idea?",
    isActive: false,
  },
  {
    id: 11,
    href: "/chat/good-book-recommendations",
    title: "Recommend me a good book",
    isActive: false,
  },
  {
    id: 12,
    href: "/chat/creative-writing-prompt",
    title: "Give me a creative writing prompt",
    isActive: false,
  },
  {
    id: 13,
    href: "/chat/fix-slow-computer",
    title: "My computer is slow, help?",
    isActive: false,
  },
  {
    id: 14,
    href: "/chat/interesting-history-fact",
    title: "Tell me an interesting history fact",
    isActive: false,
  },
  {
    id: 15,
    href: "/chat/history-of-coffee",
    title: "What's the history of coffee?",
    isActive: false,
  },
  {
    id: 16,
    href: "/chat/best-programming-language",
    title: "Which programming language should I learn next?",
    isActive: false,
  },
  {
    id: 17,
    href: "/chat/space-exploration",
    title: "How far have we explored space?",
    isActive: false,
  },
  {
    id: 18,
    href: "/chat/quick-breakfast-ideas",
    title: "Give me some quick breakfast ideas",
    isActive: false,
  },
  {
    id: 19,
    href: "/chat/understanding-black-holes",
    title: "How do black holes actually work?",
    isActive: false,
  },
  {
    id: 20,
    href: "/chat/indoor-plants",
    title: "What are some easy indoor plants to care for?",
    isActive: false,
  },
  {
    id: 21,
    href: "/chat/ancient-egypt",
    title: "Tell me about ancient Egyptian civilisation",
    isActive: false,
  },
  {
    id: 22,
    href: "/chat/improve-focus",
    title: "How can I improve my concentration?",
    isActive: false,
  },
  {
    id: 23,
    href: "/chat/ocean-depths",
    title: "What lives in the deepest parts of the ocean?",
    isActive: false,
  },
  {
    id: 24,
    href: "/chat/keyboard-shortcuts",
    title: "Useful VS Code keyboard shortcuts",
    isActive: false,
  },
  {
    id: 25,
    href: "/chat/medieval-castles",
    title: "How were medieval castles built?",
    isActive: false,
  },
  {
    id: 26,
    href: "/chat/meal-prep",
    title: "Help me plan meals for the week",
    isActive: false,
  },
  {
    id: 27,
    href: "/chat/artificial-intelligence",
    title: "How does artificial intelligence learn?",
    isActive: false,
  },
  {
    id: 28,
    href: "/chat/interesting-animal-facts",
    title: "Share some unusual animal facts",
    isActive: false,
  },
  {
    id: 29,
    href: "/chat/learn-git",
    title: "Explain Git branches and merging",
    isActive: false,
  },
];

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar threads={threads} />
      <main className="main-content">
        <Chat messages={messages} />
      </main>
    </div>
  );
}

export default Layout;
