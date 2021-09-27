const luckyButton = document.querySelector("#lucky-button");
const buttonText = document.querySelector("#button-text");

const text = [
  "I’m Feeling Wonderful",
  "I’m Feeling Artistic",
  "I’m Feeling Hungry",
  "I’m Feeling Puzzled",
];

let time = 0;

buttonText.onmouseover = () => {
  let changeWords = setInterval(() => {
    time += 1;

    if (time === 10) {
      clearInterval(changeWords);
    } else {
      buttonText.onmouseout = () => {
        buttonText.innerHTML = "I'm Feeling Lucky";
        time = 0;
        clearInterval(changeWords);
      };
    }

    let i = Math.floor(Math.random() * text.length);
    let item = text[i];
    buttonText.innerHTML = item;
  }, 100);

  //     var pos = -((Math.floor((Math.random() * 36) + 1)) * 5 - 3) * 5

  //   setTimeout(function () {
  //     luckyButton.querySelector("ul").style.marginTop = pos + "px";
  //   }, 300);
};

//on hover keep changing the text content of the button
//go through all the array
//select one
//goes back to im feeling lucky when mouse out
{
  /* <li>I’m Feeling Lucky</li>
            <li>I’m Feeling Artistic</li>
            <li>I’m Feeling Doodly</li>
            <li>I’m Feeling Hungry</li>
            <li>I’m Feeling Playful</li>
            <li>I’m Feeling Puzzled</li>
            <li>I’m Feeling Stellar</li>
            <li>I’m Feeling Trendy</li>
            <li>I’m Feeling Wonderful</li> */
}
