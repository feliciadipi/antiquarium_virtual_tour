function render(lang) {
  let title = document.getElementById('title');
  let paragraph_a = document.getElementById('a');
  let paragraph_b = document.getElementById('b');
  if (title) title.innerText = text.title[lang];
  if (paragraph_a) paragraph_a.innerText = text.a[lang];
  if (paragraph_b) paragraph_b.innerText = text.b[lang];
}

let lang = window.localStorage['lang'] ? window.localStorage['lang'] : 'it';
render(lang);

const it = document.getElementById('lang-it');
const en = document.getElementById('lang-en');

it.addEventListener('click', () => {
  window.localStorage['lang'] = 'it';
  render('it');
});

en.addEventListener('click', () => {
  window.localStorage['lang'] = 'en';
  render('en');
});

