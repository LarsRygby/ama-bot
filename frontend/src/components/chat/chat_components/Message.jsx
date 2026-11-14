export function Message(props) {
  return (
    <div className={`message ${props.type}-message`}>
      <div className="message-content">
        {props.children}
      </div>
    </div>
  );
}