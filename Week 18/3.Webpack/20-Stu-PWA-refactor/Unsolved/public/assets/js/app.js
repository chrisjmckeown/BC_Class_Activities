import { createCards } from "./cardCreation";

export function loadImages() {
  fetch("http://localhost:3000/api/images")
    .then((res) => res.json())
    .then((data) => createCards(data));
}

loadImages();