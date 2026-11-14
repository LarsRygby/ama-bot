export function Message(props) {
  const now = new Date();
  const messageDate = props.timestamp;

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  const isOlderThanWeek = messageDate < oneWeekAgo;

  const timestamp = messageDate.toLocaleString("da-DK", {
    weekday: isOlderThanWeek ? undefined : "short",
    day: isOlderThanWeek ? "2-digit" : undefined,
    month: isOlderThanWeek ? "short" : undefined,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`message ${props.type}-message`}>
      <div className="message-content">{props.children}</div>

      <span className="message-timestamp">{timestamp}</span>
    </div>
  );
}
