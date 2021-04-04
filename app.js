const character = document.querySelector(".character-div");
const spriteSheet = document.querySelector(".spritesheet");

let moveBy = 10;

window.addEventListener("load", () => {
  character.style.position = "absolute";
  character.style.top = "0";
  character.style.left = "0";
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      character.style.top = `${parseInt(character.style.top) - moveBy}px`;
      spriteSheet.classList.add("top-char");
      spriteSheet.classList.remove("down-char");
      spriteSheet.classList.remove("left-char");
      spriteSheet.classList.remove("right-char");
      spriteSheet.classList.add("animated");
      break;
    case "s":
      character.style.top = `${parseInt(character.style.top) + moveBy}px`;
      spriteSheet.classList.add("down-char");
      spriteSheet.classList.remove("top-char");
      spriteSheet.classList.remove("left-char");
      spriteSheet.classList.remove("right-char");
      spriteSheet.classList.add("animated");
      break;
    case "d":
      character.style.left = `${parseInt(character.style.left) + moveBy}px`;
      spriteSheet.classList.add("right-char");
      spriteSheet.classList.remove("down-char");
      spriteSheet.classList.remove("left-char");
      spriteSheet.classList.remove("top-char");
      spriteSheet.classList.add("animated");
      break;
    case "a":
      character.style.left = `${parseInt(character.style.left) - moveBy}px`;
      spriteSheet.classList.add("left-char");
      spriteSheet.classList.remove("down-char");
      spriteSheet.classList.remove("top-char");
      spriteSheet.classList.remove("right-char");
      spriteSheet.classList.add("animated");
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      spriteSheet.classList.remove("animated");
      break;
    case "s":
      spriteSheet.classList.remove("animated");
      break;
    case "d":
      spriteSheet.classList.remove("animated");
      break;
    case "a":
      spriteSheet.classList.remove("animated");
      break;
  }
});

//------------------------------------------------LEFT MOVEMENT
// spriteSheet.classList.add("left-char");
// spriteSheet.classList.remove("down-char");
// spriteSheet.classList.remove("top-char");
// spriteSheet.classList.remove("right-char");
//------------------------------------------------RIGHT MOVEMENT
// spriteSheet.classList.add("right-char");
//     spriteSheet.classList.remove("down-char");
//     spriteSheet.classList.remove("left-char");
//     spriteSheet.classList.remove("top-char");
//-----------------------------------------------DOWN MOVEMENT
// spriteSheet.classList.add("down-char");
// spriteSheet.classList.remove("top-char");
// spriteSheet.classList.remove("left-char");
// spriteSheet.classList.remove("right-char");
//-----------------------------------------------UP MOVEMENT
// spriteSheet.classList.add("top-char");
// spriteSheet.classList.remove("down-char");
// spriteSheet.classList.remove("left-char");
// spriteSheet.classList.remove("right-char");
