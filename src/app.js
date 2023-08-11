function displayTimesHome() {
  let cities = ["paris", "toronto", "london", "new-york"];
  let timezones = [
    "Europe/Paris",
    "America/Toronto",
    "Europe/London",
    "America/New_York",
  ];
  cities.forEach(function (city, index) {
    let cityTimeElement = document.querySelector(`#${city}-time`);
    let cityDateElement = document.querySelector(`#${city}-date`);
    cityTimeElement.innerHTML = moment()
      .tz(`${timezones[index]}`)
      .format("HH:mm:ss");
    cityDateElement.innerHTML = moment()
      .tz(`${timezones[index]}`)
      .format("MMMM Do, YYYY");
  });
}
setInterval(displayTimesHome, 1000);
