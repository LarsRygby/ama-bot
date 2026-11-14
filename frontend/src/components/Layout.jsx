import Sidebar from "./sidebar/Sidebar.jsx";
import Chat from "./chat/Chat.jsx";

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Chat />
      </main>
    </div>
  );
}

export default Layout;
