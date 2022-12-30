
const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => {
  System.import("./image_viewer").then(module => {
   module.default();
  }); // code slipting (lazy loading utilise ce system; c'est une fonctionnalité native du système de javascript module de ES6)
};

document.body.appendChild(button);
