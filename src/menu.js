export function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const menuDescription = document.createElement("p");
    menuDescription.textContent = "This is a menu";
    menuDiv.appendChild(menuDescription);

    const contentDiv = document.querySelector("div#content");

    contentDiv.append(menuDiv);
}