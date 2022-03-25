function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement("a");
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement("h3");
        const paragraph_1 = document.createElement("p");
        const paragraph_2 = document.createElement("p");
        
        link.setAttribute("href", `#`);
        link.setAttribute("aria-label", `${name}`)
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil ${name}`);
        h2.textContent = name;
        h3.textContent = `${city}, ${country}`;
        paragraph_1.textContent = tagline;
        paragraph_2.textContent = `${price}€/jour`;
        
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(paragraph_1);
        article.appendChild(paragraph_2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
};