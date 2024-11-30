// Fail: script.js //
// Autor: Ryan (ryfarlane.com) //
// Kuupäev: 30.08.2022 //
// Kirjeldus: See skript tekitab tekstile fade-in animatsiooni ja tuvastab kasutaja kerimist,
// tänu millele ta ajastab fade-in-i. //

// Valime kõik elemendid, millele on antud klass 'fade-in-up-on-scroll' //
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");

// Kontrollime, kas meil on javaskript HTML-is väljakutsutud //
if (elementsToFadeInUpOnScroll.length > 0) {
  // Lisame sündmuse kuulaja, mis ootab kasutaja kerimist ("scroll"). //
  window.addEventListener("scroll", function(event) {

    // Käime läbi kõik valitud elemendid //
    elementsToFadeInUpOnScroll.forEach(function(element) {

      // Kui kasutaja jõuab kerimisega elemendi algusesse //
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        // Lisab klassi "fade-in-up", mis käivitab CSS-i animatsiooni //
        element.classList.add("fade-in-up");
      } else {
        // Eemaldab klassi, kui element ei ole nähtav //
        element.classList.remove("fade-in-up");
      }
    });
  });
}
