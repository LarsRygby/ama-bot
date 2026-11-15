
export function Message({ timestamp, type = "user", children = "Empty message" }) {
  const now = new Date();
  const messageDate = new Date(timestamp);

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  const isOlderThanWeek = messageDate < oneWeekAgo;

  const formattedTimestamp = messageDate.toLocaleString("da-DK", {
    weekday: isOlderThanWeek ? undefined : "short",
    day: isOlderThanWeek ? "2-digit" : undefined,
    month: isOlderThanWeek ? "short" : undefined,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`message ${type}-message`}>
      <div className="message-content">{children}</div>

      <span className="message-timestamp">
        {formattedTimestamp}
      </span>
    </div>
  );
}
