function getWeekDay() {
  var date = new Date(2012, 0, 3);
  return date.toLocaleString("ru", { weekday: "short" });
}
