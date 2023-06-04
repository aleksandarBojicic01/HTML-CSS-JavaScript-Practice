function subscribe() {
  if (
    document.querySelector(".js-subscribe-button").innerText ===
    "Subscribed"
  ) {
    document.querySelector(".js-subscribe-button").innerHTML =
      "Subscribe";
      document.querySelector(".js-subscribe-button").classList.remove("subscribe-button-clicked")
  } else {
    document.querySelector(".js-subscribe-button").innerHTML =
      "Subscribed";
      document.querySelector(".js-subscribe-button").classList.add("subscribe-button-clicked")
  }
}

function displayCost() {
  let cost = Number(document.querySelector("input").value);
  if (cost < 40) {
    cost += 10;
  }
  document.querySelector(".js-final-cost").innerHTML = "$" + cost;
}