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
    const medias = await getData(MEDIA);
    console.log(medias); 

    let params = new URLSearchParams(document.location.search);

    let id = params.get("id");

    /*
     brows through the photographers array until it finds the photographer 
     with the id that is equal to the one in the URL 
    */
    const photographer = photographers.find(p => p.id == id);
    const photographerMedia = medias.filter(media => media.photographerId == id);
    
    for (const media of photographerMedia) {
        console.log(media)
        mediaDisplay(media) 
    }
    
    displayPhotographer(photographer);
};

init();

function displayPhotographer(photographer) {
    //console.log(photographer);
    let h1 = document.querySelector(".profil-name");
    let paragraph_1 = document.querySelector(".country-of-the-photographer");
    let paragraph_2 = document.querySelector(".tagline-photographer");
    let img = document.querySelector(".picture-profil-photographe");
    
    h1.textContent = photographer.name;
    paragraph_1.textContent = `${photographer.city}, ${photographer.country}`;
    paragraph_2.textContent = `${photographer.tagline}`;
    img.setAttribute("src", `./assets/photographers/${photographer.portrait}`);
    img.setAttribute("alt", `${photographer.name}`);

};

function mediaDisplay(media) {
    console.log(media)
    let containerGallery = document.querySelector(".gallery");
    let figure = document.createElement("figure");
    let link = document.createElement("a");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    let divlike = document.createElement("div");
    let iconlike = document.createElement("img");

    link.setAttribute("href","#");
    img.setAttribute("class", "pictures-photographer");
    img.setAttribute("src", `./assets/media/${media.image}`);
    figcaption.textContent = media.title;
    divlike.textContent = media.likes;
    divlike.setAttribute("class", "likes");
    divlike.setAttribute("aria-label", "likes");
    iconlike.setAttribute("src", `./assets/icons/like.svg`);

    link.appendChild(img)
    figure.appendChild(link)

    divlike.appendChild(iconlike);
    figcaption.appendChild(divlike);

    figure.appendChild(figcaption);

    containerGallery.appendChild(figure);
};

