import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame() + CardGame() + CardGame() + CardGame() + CardGame() + CardGame();


$root.insertAdjacentHTML('beforeend', $htmlCardGame);
