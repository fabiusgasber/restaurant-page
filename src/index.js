import "./styles.css"
import { loadHome } from "./home"
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function init(){
    tabSwitch();
    loadHome();
}

function tabSwitch(){
    const listItems = document.querySelectorAll("li");
    listItems.forEach(listItem => listItem.addEventListener("click", loadTab));
}

function loadTab(e){
    const currentTab = e.target.id;
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    switch(currentTab) {
        case "menuBtn":
            loadMenu();
            break;
        case "contactBtn":
            loadContact();
            break;
        default: 
            loadHome();
            break;
    }
}

init();