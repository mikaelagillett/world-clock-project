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
function changeActivePage(event) {
  let buttonFunction = event.srcElement.accessKey;
  if (buttonFunction === "b") {
    homeTimes.classList.add("inactive");
    homeTicketPurchase.classList.remove("inactive");
    clearInterval(timeInterval);
  } else if (buttonFunction === "h") {
    cityPage.classList.add("inactive");
    loadingPage.classList.remove("inactive");
    loading();
    setTimeout(displayHome, 6000);
    activeButton = document.querySelector("#new-flight-button");
    activeButton.addEventListener("click", changeActivePage);
  } else if (buttonFunction === "n") {
    welcomeHomePage.classList.add("inactive");
    homepage.classList.remove("inactive");
  }
}
function getTicket(selection) {
  selection.preventDefault();

  homepage.classList.add("inactive");
  loadingPage.classList.remove("inactive");
  loading();
  setTimeout(displayCity, 6000);
}
function loading() {
  planeInterval = setInterval(loadPlane, 1000);
  descriptionInterval = setInterval(loadDescription, 1500);
}
function loadPlane() {
  let currentImage = document.querySelector("#loading-image");
  if (currentImage.src.includes("plane1")) {
    currentImage.src = "images/plane2.png";
  } else if (currentImage.src.includes("plane2")) {
    currentImage.src = "images/plane3.png";
  } else if (currentImage.src.includes("plane3")) {
    currentImage.src = "images/plane1.png";
  }
}
function loadDescription() {
  let currentDescription = document.querySelector("#loading-description");
  let descriptions = [
    "boarding plane ...",
    "taking off ...",
    "flying through time ...",
    "landing ...",
  ];
  if (currentDescription.innerHTML.includes(descriptions[0])) {
    currentDescription.innerHTML = descriptions[1];
  } else if (currentDescription.innerHTML.includes(descriptions[1])) {
    currentDescription.innerHTML = descriptions[2];
  } else if (currentDescription.innerHTML.includes(descriptions[2])) {
    currentDescription.innerHTML = descriptions[3];
  } else {
    currentDescription.innerHTML = descriptions[0];
  }
}

function displayCity() {
  clearInterval(planeInterval);
  clearInterval(descriptionInterval);
  loadingPage.classList.add("inactive");
  cityPage.classList.remove("inactive");
  activeButton = document.querySelector("#home-button");
  activeButton.addEventListener("click", changeActivePage);
  cityContent.innerHTML = `
          <div class="city-text">
            <header>
              <h1>Welcome to <span class="city">Paris<span> <span class="fi fi-fr"></span></h1>
              <h2>arrival date: August 10th, 2023</h2>
            </header>
            <p>
              it is currently:
              <br />
              <span class="time-display">12:02:57</span>
            </p>
          </div>
          <img src="images/paris-icon.png" alt="city sketch" />
        `;
}
function displayHome() {
  clearInterval(planeInterval);
  clearInterval(descriptionInterval);
  loadingPage.classList.add("inactive");
  welcomeHomePage.classList.remove("inactive");
}
timeInterval = setInterval(displayTimesHome, 1000);
let homepage = document.querySelector("#home");
let homeTimes = document.querySelector("#home-times");
let homeTicketPurchase = document.querySelector("#home-purchase");
let loadingPage = document.querySelector("#loading-page");
let cityPage = document.querySelector("#city-page");
let cityContent = document.querySelector("#city-content");
let welcomeHomePage = document.querySelector("#welcome-home-page");
let activeButton = document.querySelector("#book-button");
activeButton.addEventListener("click", changeActivePage);
let ticketPurchase = document.querySelector("#ticket-form");
ticketPurchase.addEventListener("submit", getTicket);
