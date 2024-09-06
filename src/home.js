export function loadHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home")

    const heading = document.createElement("h1")
    heading.textContent = "Restaurant Page";

    const subText = document.createElement("p");
    subText.textContent = "This is the best restaurant in the world. Feel free to look at our menu!";

    const menuButton = document.createElement("button")
    menuButton.textContent = "Menu";
    menuButton.id = "homeMenu";

    const content = [heading, subText, menuButton]
    homeDiv.append(...content);

    const contentDiv = document.querySelector("div#content");
    contentDiv.append(homeDiv);
}