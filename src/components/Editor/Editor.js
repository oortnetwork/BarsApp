import syllable from "syllable";

/**
 * Private
 */
let editor = false;
let sidebar = false;
let textArray = [];
let textArrayPrev = false;

/**
 * Enable Editor
 */
const enable = () => {
  editor = document.querySelector(".Editor__main");
  sidebar = document.querySelector(".Editor__sidebar");
  editor.focus();
  setup();

  editor.addEventListener("input", function () {
    setup();
  });
};

const setup = () => {
  const p = editor.children;
  textArrayPrev = textArray;
  textArray = [];
  let sidebarHtml = "";

  for (let i = 0; i < p.length; i++) {
    const el = p[i];
    const notChanged =
      textArrayPrev[i] && textArrayPrev[i].text === el.innerText ? true : false;
    const syllables = !notChanged
      ? syllable(el.innerText)
      : textArrayPrev[i].syllables;

    textArray.push({
      text: el.innerText,
      syllables: syllables,
    });

    sidebarHtml += `<p>${syllables}</p>`;
  }
  sidebar.innerHTML = sidebarHtml;
};

/**
 * Editor
 * @param  {Object} settings
 * @return {Object} public API
 */
const Editor = () => {
  enable();

  return {
    enable,
  };
};

export default Editor;
