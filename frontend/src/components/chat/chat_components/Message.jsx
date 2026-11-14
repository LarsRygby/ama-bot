function Message(props) {
  return (
    <div className={`message ${props.type}-message`}>
      <div className="message-content">
        {props.content}
      </div>
    </div>
  );
}

export default Message;
