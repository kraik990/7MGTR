// Autor: ChatGPT (OpenAI) - Kood koostatud kasutaja poolt
// Kuupäev: 24.11.2024
// Kirjeldus: See skript määrab sektsioonide 'main' ja 'header' vahele tühja ruumi,
// et vältida nende kattumist. See muudatus toimib igal lehel, kus kasutatakse seda skripti.

document.addEventListener('DOMContentLoaded', () => {
    // Otsime lehelt 'header' ja 'main' sektsioonid
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    // Arvutame 'headeri' kõrguse
    const headerHeight = header.offsetHeight;
    
    // Teeb 'header'-i lõpu ja 'main'-i alguse vahele 60 pikslise tühja ruumi
    main.style.paddingTop = `60px`;
});

