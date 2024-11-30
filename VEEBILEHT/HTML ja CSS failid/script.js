// Autor: Ryan (ryfarlane.com)
// Kuupäev: 30.08.2022
// Kirjeldus: See skript tekitab tekstile fade in animatsiooni ja tuvastab kasutaja kerimist,
// tänu millele ta ajastab fade in-i.

// Valime kõik elemendid, millele on antud klass 'fade-in-up-on-scroll'
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");

// Kontrollime, kas meil on javaskript html-is väljakutsutud
if (elementsToFadeInUpOnScroll) {
  // Lisame evendi tuvastaja, mis ootab kasutaja kerimist ("scroll").
  window.addEventListener("scroll", function(event) {

    // Käime läbi kõik valitud elemendid
    elementsToFadeInUpOnScroll.forEach(function(element) {

      // Kui kasutaja jõuab kerimisega elemendi algusesse
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up"); // Lisab klassi ja rakendab cssi koodis olevaid animatsioone
      } else {
        element.classList.remove("fade-in-up"); // Eemaldab klassi, element läheb algasendisse
      }
    });
  });
}
