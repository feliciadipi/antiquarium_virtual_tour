/**
 * @param {string} lang The language to render text in.
 * To make this universally functional across each exhibit regardless of content or formatting, each HTML page is 
 * built with divs for a title and up to four sections of text, generically named paragraph_[a, b, c, d].
 * The text itself, specific to each individual exhibit page, exists in a JS map called 'text'
 * which is included at the end of the <body> in a <script> tag. These maps have the form:
 *
 *  text = {
 *    a: {
 *      'it': '[content]',
 *      'en': '[content]
 *    }, ...
 *  }
 *
 * As support for additional languages becomes available, they can be handles by adding a new 'lang' key to each
 * text map, then adding a new navbar link and event listener to this module.
 */
function render(lang) {
  let title = document.getElementById("title");
  let paragraph_a = document.getElementById("a");
  let paragraph_b = document.getElementById("b");
  let paragraph_c = document.getElementById("c");
  let paragraph_d = document.getElementById("d");
  if (title) title.innerText = text.title[lang];
  if (paragraph_a) paragraph_a.innerText = text.a[lang];
  if (paragraph_b) paragraph_b.innerText = text.b[lang];
  if (paragraph_c) paragraph_c.innerText = text.c[lang];
  if (paragraph_d) paragraph_d.innerText = text.d[lang];
}

/**
 * This line enables browser persistence, so the webpage will "remember"
 * the user's preferred language for the duration of the session.
 */
let lang = window.localStorage["lang"] ? window.localStorage["lang"] : "it";
render(lang);

/**
 * Grab the "IT" and "EN" buttons. Event listeners render in the selected
 * language and update 'lang' local storage variable.
 */
const it = document.getElementById("lang-it");
const en = document.getElementById("lang-en");

it.addEventListener("click", () => {
  window.localStorage["lang"] = "it";
  render("it");
});

en.addEventListener("click", () => {
  window.localStorage["lang"] = "en";
  render("en");
});
