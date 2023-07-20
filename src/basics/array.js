// In this code:

// The turnLight variable is declared outside the event listener callback function to maintain its state between button clicks.
// When the button is clicked, it checks the current value of turnLight.
// If turnLight is false, it sets turnLight to true and logs "Light is on: true".
// If turnLight is true, it sets turnLight to false and logs "Light is off: false".
// The console.log(btn) statement outputs the button element to the console.
// Now, each time the button is clicked, the turnLight variable will be updated accordingly, and the corresponding state message will be logged to the console.

const btn = document.querySelector(".btn");
let turnLight = false;

btn.addEventListener("click", () => {
  if (!turnLight) {
    turnLight = true;
    console.log("Light is on: " + turnLight);
  } else {
    turnLight = false;
    console.log("Light is off: " + turnLight);
  }
});
