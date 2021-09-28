const luckyButton = document.querySelector("#lucky-button");
const googleSearchButton = document.querySelector("#google-button");
const buttonText = document.querySelector("#button-text");
const searchInput = document.querySelector("#search-input");
const signInButton = document.querySelector("#sign-in");
const profilePicture = document.querySelector("#profile-picture");

const text = [
  "I’m Feeling Wonderful",
  "I’m Feeling Artistic",
  "I’m Feeling Hungry",
  "I’m Feeling Puzzled",
  "I’m Feeling Doodly",
  "I’m Feeling Stellar",
  "I’m Feeling Trendy",
  "I’m Feeling Playful",
];

let time = 0;
let item = "I'm Feeling Lucky";

buttonText.onmouseover = () => {
  let changeWords = setInterval(() => {
    time += 1;

    if (time === 10) {
      clearInterval(changeWords);
    } else {
      buttonText.onmouseout = () => {
        clearInterval(changeWords);
        buttonText.innerHTML = "I'm Feeling Lucky";
        time = 0;
      };
    }

    let i = Math.floor(Math.random() * text.length);
    item = text[i];
    buttonText.innerHTML = item;
  }, 100);
};

googleSearchButton.addEventListener("click", () => {
  if (searchInput.value.length > 0) {
    let URL = "http://www.google.com/search?q=" + searchInput.value;
    window.open(URL, "Google");
  }
});

luckyButton.addEventListener("click", () => {
  let URL = "http://www.google.com/search?q=" + item + "&btnI";
  window.open(URL, "Lucky_Search");
});

(signInButton).addEventListener("click", () => {
  signInButton.classList.toggle("hide");
  profilePicture.classList.toggle("hide");
});
