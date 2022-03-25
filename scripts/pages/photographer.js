//Mettre le code JavaScript lié à la page photographer.html

const PHOTOGRAPHERS = 1;
const MEDIA = 2;

async function getData(requested) {
    let response = await fetch("./data/photographers.json");
    let json = await response.json();

    if(requested === PHOTOGRAPHERS) {
        return json.photographers
    }

    if(requested === MEDIA) {
        return json.media
    }
}

async function init() {
    const photographers = await getData(PHOTOGRAPHERS);

   // Get the link and search on it.
    let params = new URLSearchParams(document.location.search);

    //Get the id
    let id = params.get("id");

    /*
     brows through the photographers array until it finds the photographer 
     with the id that is equal to the one in the URL 
    */
    const photographer = photographers.find(p => p.id == id);
    
    /* 
     Call the displayPhotographer function and pass the PHOTOGRAPHERS 
     ariable as argument  
    */
   
    displayPhotographer(photographer);
};

init();

function displayPhotographer(photographer) {
    let h1 = document.querySelector(".profil-name");
    let paragraph_1 = document.querySelector(".country-of-the-photographer");
    let paragraph_2 = document.querySelector(".tagline-photographer");
    let img = document.querySelector(".picture-profil-photographe");
    
    h1.textContent = photographer.name;
    paragraph_1.textContent = `${photographer.city}, ${photographer.country}`;
    paragraph_2.textContent = `${photographer.tagline}`;
    img.setAttribute("src", `./assets/photographers/${photographer.portrait}`)
    img.setAttribute("alt", `${photographer.name}`)
    console.log(h1)
};