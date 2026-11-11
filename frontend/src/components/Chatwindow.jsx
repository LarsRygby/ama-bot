function Chatwindow() {
  return (
    <main>
      <section className="thread-info">
        <h2>Thread title</h2>
      </section>

      <section className="chat-window">
        <div className="user-message">
          Hey! Can you help me understand how React works?
        </div>

        <div className="ai-message">
          Of course! React is a JavaScript library for building user interfaces.
          It allows you to create reusable components.
        </div>

        <div className="user-message">What exactly are components?</div>

        <div className="ai-message">
          Components are independent, reusable pieces of UI. For example, a
          navigation bar, a button, or even an entire chat window can be its own
          component.
        </div>

        <div className="user-message">
          So I could make a separate component for each message?
        </div>

        <div className="ai-message">
          Exactly! You could create a Message component and reuse it for every
          message in your chat. You could even pass the message content and
          sender as props.
        </div>

        <div className="user-message">That sounds useful. What are props?</div>

        <div className="ai-message">
          Props are values passed from one component to another. They allow you
          to customize components without having to rewrite them. Think of them
          as arguments for your components.
        </div>

        <div className="user-message">
          I think I'm starting to understand. What should I learn next?
        </div>

        <div className="ai-message">
          I'd recommend learning about state and event handling next. These
          concepts allow your application to respond to user interactions and
          update the interface dynamically.
        </div>

        <div className="user-message">
          Perfect! I'll look into that. Thanks!
        </div>

        <div className="ai-message">You're welcome! Happy coding!</div>
      </section>

      <section className="chat-input">
        <form action="post">
          <textarea name="message" id="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

export default Chatwindow;
