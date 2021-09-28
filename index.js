const luckyButton = document.querySelector("#lucky-button");
const buttonText = document.querySelector("#button-text");

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
    let item = text[i];
    buttonText.innerHTML = item;
  }, 100);
};
