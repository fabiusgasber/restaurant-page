export function loadContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    
    const contactDescription = document.createElement("p");
    contactDescription.textContent = "Here is how you can find us";
    contactDiv.appendChild(contactDescription);
    
    const contentDiv = document.querySelector("div#content");
    
    contentDiv.append(contactDiv);
}