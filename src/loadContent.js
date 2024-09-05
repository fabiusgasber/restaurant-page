export function loadContent() {
    const contentDiv = document.querySelector("div#content");

    const heading = document.createElement("h1")
    heading.textContent = "Restaurant Page";

    const subText = document.createElement("p");
    subText.textContent = "This is the best restaurant in the world. Feel free to look at our menu!";

    const menuButton = document.createElement("button")
    menuButton.textContent = "Menu";

    const content = [heading, subText, menuButton]

    contentDiv.append(...content);
}