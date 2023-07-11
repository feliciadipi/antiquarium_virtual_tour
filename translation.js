/* This  object has a key for every language included,
 * and that key maps to another object where each key is       m a tag ID 
 * mapping to a translation of the enclosed text. */
const translations = {
    "Italian": { "heading": "Ciao Mondo!", "languagePrompt": "Lingua" },
    "English": { "heading": "Hello World!", "languagePrompt": "Language" },
    "Spanish": { "heading": "¡Hola Mundo!", "languagePrompt": "Idioma" },
    "French": { "heading": "Bounjour le Monde!", "languagePrompt": "Langue" },
    "German": { "heading": "Hallo Welt!", "languagePrompt": "Sprache" }
}

/* Translates all text in the webpage given that they have the 'translate' class
 * and the tag ID has a corresponding translation in the translations object
 *
 * param language: language to translate site into
 */
function translate(language) {
    const elements = document.getElementsByClassName("translate");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        const id = element.id;
        element.innerHTML = translations[language][id];
    }
}

// If local storage has a saved language then translate to that
const language = localStorage.getItem("language");
if (language !== null) {
    document.getElementById("languageDropdown").value = language;
    translate(language);
}

//Change language when new one selected in dropdown
document.getElementById("languageDropdown").addEventListener("change", function () {
    const lang = document.getElementById("languageDropdown").value
    translate(lang);
    window.localStorage.setItem("language", lang)
});