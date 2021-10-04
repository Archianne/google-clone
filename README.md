# Google Page Clone
This is the Week 1 project I've done with @SchoolOfCode, and it was initially build with only HTML and CSS. I have decided to refactor it and implement new features with JavaScript and Sass.

<p align="center">
  <a href="https://archianne.codes/google-page/">DEMO</a>
</p>

<p align="center">
<kbd>
<img align="center" src='https://github.com/Archianne/google-clone/blob/main/img/google-full-page.png?raw=true'/>
</kbd>
</p>

## Refactoring

### Changed from CSS to SASS
I decided to move to SASS due to the practicality when coding, I got quite used to Styled Components when I'm coding in React JS so I decided to give it a go here.

* First I installed Sass: `npm install -g sass`
* I made a file for `style.sass` & `style.css`
* On terminal: `sass --watch style.scss:style.css`

A good tutorial I found from [codementor.io here](https://www.codementor.io/@ricardozea/sass-for-beginners-the-friendliest-guide-about-installing-and-using-sass-on-windows-cjfs2id3o)

### Changed icons to SVG
Changing the icons to SVG allowed me to have the page really similar to the original and I don't to worry about the image pixelating.

### Clicking on the sign in button will show a picture
Using DOM manipulation I could make it feel a little bit like logging in by simply changing the button to the picture.

### All links working
To make it feel like a fully functional page, I added all the original links to the code, and they open in a new page so the user doesn't leave the cloned page.

### I'm Feeling Lucky:

With JavaScript I'm able now to change the text content of the button when on hover. 

```
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
```


### Mobile View
With `@mediaquery` I was also able to add how the page is shown in a mobile screen.

<p align="center">
<kbd>
<img src='https://github.com/Archianne/google-clone/blob/main/img/google-mobile.png?raw=true'/>
</kbd>
</p>
