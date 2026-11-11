function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-header">
        <h1>CoffeeGPT</h1>
        <button className="new-chat-btn">New Chat</button>
      </section>
      <section className="sidebar-chat-list">
        <h2>Coffee chats</h2>
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
          <li>Chat 4</li>
        </ul>
      </section>
      <section className="sidebar-footer">
        <h2>Username</h2>
      </section>
    </aside>
  );
}

export default Sidebar;
