export function formatDate(dateStr) {
  const a = dateStr.split("-");
  // Of course months, and only months, are 0-indexed. That makes perfect sense.
  const date = new Date(a[0], a[1] - 1, a[2]);
  return Intl.DateTimeFormat().format(date);
}
