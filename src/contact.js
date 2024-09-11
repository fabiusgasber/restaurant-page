export function loadContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    
    const contactForm = document.createElement("form");
    contactForm.action = "";
    contactForm.method = "get";
    contactForm.id = "contact-form"
    contactForm.classList.add("contact-form");
    const firstName = getInputElement("text", "firstName", true, "First Name");
    const lastName = getInputElement("text", "lastName", true, "Last Name");
    const email = getInputElement("email", "email", true, "E-Mail");
    const tel = getInputElement("tel", "tel", true, "Telephone Number");
    const textarea = document.createElement("textarea");
    textarea.name = "textarea";
    textarea.placeholder = "Please write down your message for us"
    textarea.required = true;
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("form", "contact-form");
    submitBtn.name = "submit";
    submitBtn.value = "Submit";
    submitBtn.textContent = "Submit";
    const formChilds = [firstName, lastName, email, tel, textarea];
    contactForm.append(...formChilds);
    
    contactDiv.append(contactForm, submitBtn);
    const contentDiv = document.querySelector("div#content");
    
    contentDiv.append(contactDiv);
}

function getInputElement(type, name, required, placeholder){
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.required = required;
    input.placeholder = placeholder;
    return input;
}