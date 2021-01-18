import rhymes from "rhymes";

/**
 * Private
 */
let R = false;
let toggleR = false;
let mainR = false;
let input = false;
/**
 * Enable Rhymes
 */
const enable = () => {
  R = document.querySelector(".Rhymes");
  toggleR = document.querySelector(".Rhymes__toggle");
  mainR = document.querySelector(".Rhymes__main");
  input = document.querySelector(".Rhymes input");

  toggleR.addEventListener("click", function () {
    toggleDiv();
  });
  input.addEventListener("change", function (e) {
    newRhyme(e);
  });
};

const toggleDiv = () => {
  R.classList.toggle("is-active");
};

const newRhyme = (e) => {
  const word = input.value;
  const rhymesarray = word ? rhymes(word) : [];

  let arrayHtml = "";

  for (let i = 0; i < rhymesarray.length; i++) {
    arrayHtml += `<p>${rhymesarray[i].word}</p>`;
  }
  mainR.innerHTML = arrayHtml;
};

/**
 * Rhymes
 * @param  {Object} settings
 * @return {Object} public API
 */
const Rhymes = () => {
  enable();

  return {
    enable,
  };
};

export default Rhymes;
