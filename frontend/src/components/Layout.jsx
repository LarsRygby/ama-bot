import { Send, Coffee, Plus, User, Bean } from "lucide-react";

function Layout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        {/* Sidebar header */}
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
        {/* Chat threads list */}
        <nav className="chat-threads-list" aria-label="Chat threads">
          <ul>
            <li className="chat-threads-title">Recent coffee chats</li>

            <li className="chat-thread-item">
              <a
                href="/chat/how-to-learn-programming"
                className="chat-thread-link"
              >
                How to learn programming?
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/best-pizza-toppings" className="chat-thread-link">
                What are the best pizza toppings?
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/explain-quantum-physics"
                className="chat-thread-link"
              >
                Can you explain quantum physics?
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/morning-routine-ideas"
                className="chat-thread-link"
              >
                Help me create a morning routine
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/weekend-activity-suggestions"
                className="chat-thread-link"
              >
                What should I do this weekend?
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/why-sky-blue" className="chat-thread-link">
                Why is the sky blue?
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/learn-new-language" className="chat-thread-link">
                How do I learn a new language?
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/meaning-of-life" className="chat-thread-link">
                What's the meaning of life?
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/funny-joke-please" className="chat-thread-link">
                Tell me a funny joke
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/healthy-dinner-ideas" className="chat-thread-link">
                What's a healthy dinner idea?
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/good-book-recommendations"
                className="chat-thread-link"
              >
                Recommend me a good book
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/creative-writing-prompt"
                className="chat-thread-link"
              >
                Give me a creative writing prompt
              </a>
            </li>
            <li className="chat-thread-item">
              <a href="/chat/fix-slow-computer" className="chat-thread-link">
                My computer is slow, help?
              </a>
            </li>
            <li className="chat-thread-item">
              <a
                href="/chat/interesting-history-fact"
                className="chat-thread-link"
              >
                Tell me an interesting history fact
              </a>
            </li>
          </ul>
        </nav>
        {/* Sidebar footer */}
        <div className="sidebar-footer">
          <a href="/profile" className="user-profile">
            <div className="user-avatar">
              <User size={20} strokeWidth={2} />
            </div>
            <span className="user-name">Barista</span>
          </a>
        </div>
      </aside>
      <main className="main-content">
        <section className="chat-container">
            
          <Bean className="chat-watermark" />

          <div className="chat-messages">
            <div className="chat-messages-inner">
              {/* Chat message 1 */}
              <div className="message user-message">
                <div className="message-content">
                  Hello! Can you help me understand React Router v7?
                </div>
              </div>

              <div className="message bot-message">
                <div className="message-content">
                  Of course! React Router v7 is the latest version that
                  introduces several improvements including better data loading,
                  enhanced nested routing, and improved TypeScript support. What
                  specific aspect would you like to learn about?
                </div>
              </div>

              {/* Chat message 2 */}
              <div className="message user-message">
                <div className="message-content">
                  How do nested routes work in v7?
                </div>
              </div>

              <div className="message bot-message">
                <div className="message-content">
                  Nested routes in React Router v7 allow you to create
                  hierarchical UI structures. You define parent routes that
                  contain child routes, and use the `&lt;Outlet /&gt;` component
                  to render child components. The parent route acts as a layout
                  component that wraps its children.
                </div>
              </div>

              {/* Chat message 3 */}
              <div className="message user-message">
                <div className="message-content">
                  What's the difference between route() and layout() helpers?
                </div>
              </div>

              <div className="message bot-message">
                <div className="message-content">
                  Great question! The `route()` helper creates routes that add
                  URL segments, while `layout()` creates routes that only
                  provide UI structure without affecting the URL. Layout routes
                  are perfect for shared components like sidebars or headers
                  that should appear across multiple pages.
                </div>
              </div>

              {/* Chat message 4 */}
              <div className="message user-message">
                <div className="message-content">
                  Can you show me an example of a routes.js configuration?
                </div>
              </div>

              <div className="message bot-message">
                <div className="message-content">
                  Sure! Here's a basic example: You can use route(), index(),
                  and layout() helpers to create nested route structures. The
                  layout() function creates wrapper components, while route()
                  adds URL segments. This approach gives you clean, hierarchical
                  routing that's easy to maintain.
                </div>
              </div>

              {/* Chat message 5 */}
              <div className="message user-message">
                <div className="message-content">
                  How do I handle data loading in React Router v7?
                </div>
              </div>

              <div className="message bot-message">
                <div className="message-content">
                  React Router v7 provides excellent data loading capabilities
                  through loader functions. You can define a `loader` function
                  in your route component that runs before the component
                  renders, ensuring your data is available immediately. You can
                  access the loaded data using the `useLoaderData()` hook within
                  your component.
                </div>
              </div>
            </div>
          </div>

          {/* Chat input area */}
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

              <button
                className="send-button"
                type="submit"
                aria-label="Send message"
              >
                <Send size={20} strokeWidth={2} />
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Layout;
