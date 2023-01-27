const appButton = document.getElementById("button");
const container = document.getElementById("container");
// import json, { forEach } from "./data.json";
// var parse = require('./data.json');
function loader() {
  var json = require("./data.json");
  console.log("555", json);

  forEach((el) => {
    const div = document.createElement("div");
    const id = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("div");
    const price = document.createElement("div");

    id.textContent = `Id: ${el.id}`;
    // id.textContent = el.id;
    name.textContent = `Name: ${el.name}`;
    price.textContent = `Price: Rs ${el.price}`;
    img.src = el.imgUrl;
    img.classList.add("customize__image");
    div.appendChild(id);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    div.classList.add("custom-card");
    container.appendChild(div);
  });
}

appButton.addEventListener("click", loader());
