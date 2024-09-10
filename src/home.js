export function loadHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home")

    const heading = document.createElement("h1")
    heading.textContent = "Welcome to Terra & Vine";

    const subText = document.createElement("p");
    subText.textContent = "Nestled in the heart of wine country, Terra & Vine celebrates the union of earth’s finest ingredients and handcrafted wines. Our menu showcases locally sourced, seasonal produce, paired perfectly with our curated selection of regional and international wines. At Terra & Vine, we invite you to savor elegant flavors, in a warm and inviting atmosphere. Join us for a culinary journey that pays homage to the land and the vine.";
    
    const menuButton = document.createElement("button")
    menuButton.textContent = "Menu";
    menuButton.id = "homeMenu";

    const content = [heading, subText, menuButton]
    homeDiv.append(...content);

    const contentDiv = document.querySelector("div#content");
    contentDiv.append(homeDiv);
}