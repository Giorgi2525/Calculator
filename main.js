const forInput = document.querySelector("#forinput");
const oneButton = document.querySelector("#forone");
const twoButton = document.querySelector("#fortwo");
const threeButton = document.querySelector("#forthree");
const fourButton = document.querySelector("#forfour");
const fiveButton = document.querySelector("#forfive");
const sixButton = document.querySelector("#forsix");
const sevenButton = document.querySelector("#forseven");
const eightButton = document.querySelector("#foreight");
const nineButton = document.querySelector("#fornine");
const zeroButton = document.querySelector("#forzero");
const clearButton = document.querySelector("#forclear");
const plusButton = document.querySelector("#forplus");
const minusButton = document.querySelector("#forminus");
const gamravlebaButton = document.querySelector("#forgamravleba");
const gayofaButton = document.querySelector("#forgayofa");
const udrisButton = document.querySelector("#forudris");
clearButton.addEventListener("click", () => {
  forInput.value = clearButton.value;
});
oneButton.addEventListener("click", () => {
  forInput.value += oneButton.value;
  clearInput();
});
twoButton.addEventListener("click", () => {
  forInput.value += twoButton.value;
});
threeButton.addEventListener("click", () => {
  forInput.value += threeButton.value;
});
fourButton.addEventListener("click", () => {
  forInput.value += fourButton.value;
});
fiveButton.addEventListener("click", () => {
  forInput.value += fiveButton.value;
});
sixButton.addEventListener("click", () => {
  forInput.value += sixButton.value;
});
sevenButton.addEventListener("click", () => {
  forInput.value += sevenButton.value;
});
eightButton.addEventListener("click", () => {
  forInput.value += eightButton.value;
});
nineButton.addEventListener("click", () => {
  forInput.value += nineButton.value;
});
zeroButton.addEventListener("click", () => {
  forInput.value += zeroButton.value;
});
plusButton.addEventListener("click", () => {
  forInput.value += plusButton.value;
});
minusButton.addEventListener("click", () => {
  forInput.value += minusButton.value;
});
gamravlebaButton.addEventListener("click", () => {
  forInput.value += gamravlebaButton.value;
});
gayofaButton.addEventListener("click", () => {
  forInput.value += gayofaButton.value;
});
udrisButton.addEventListener("click", () => {
  forInput.value = eval(forInput.value);
});
