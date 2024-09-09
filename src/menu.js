export function loadMenu() {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const menuItems = [
        {
            courseInfo: "First Course",
            menuHeadline: "Heirloom Tomato & Burrata Salad",
            menuDescription: "Delicate heirloom tomatoes, creamy burrata, basil oil, and a balsamic reduction.",
            winePairing: "Wine Pairing: Sauvignon Blanc"
        },
        {
            courseInfo: "Main Course",
            menuHeadline: "Seared Duck Breast with Blackberry Port Reduction",
            menuDescription: "Pan-seared duck breast served with caramelized shallots, truffle-infused mashed potatoes, and a rich blackberry port reduction.",
            winePairing: "Wine Pairing: Pinot Noir"
        },
        {
            courseInfo: "Dessert",
            menuHeadline: "Lavender Honey Crème Brûlée",
            menuDescription: "Silky custard infused with lavender and honey, topped with a golden caramelized sugar crust.",
            winePairing: "Wine Pairing: Late Harvest Riesling"
        },
    ]

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");

        const courseInfo = document.createElement("p");
        courseInfo.textContent = item.courseInfo;

        const menuHeadline = document.createElement("h1");
        menuHeadline.textContent = item.menuHeadline;

        const menuDescription = document.createElement("p");
        menuDescription.textContent = item.menuDescription;

        const winePairing = document.createElement("p");
        winePairing.textContent = item.winePairing;  

        menuItem.appendChild(courseInfo);
        menuItem.appendChild(menuHeadline);
        menuItem.appendChild(menuDescription);
        menuItem.appendChild(winePairing);
        
        menuDiv.appendChild(menuItem);    
    });

    const contentDiv = document.querySelector("div#content");

    contentDiv.append(menuDiv);
}