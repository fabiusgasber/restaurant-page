import "./styles.css"
import { loadHome } from "./home"
import { loadMenu } from "./menu";
import { loadContact } from "./contact";


function tabSwitch(){
    const body = document.querySelector("body");
    body.addEventListener("click", loadTab);
}

function loadTab(e){
    console.dir(e.target);
    const currentTab = e.target.id;
    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    switch(currentTab) {
        case "menuBtn":
        case "homeMenu":
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

tabSwitch();
loadHome();