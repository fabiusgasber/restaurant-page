export function loadMenu() {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    const menuHeadline = document.createElement("h1");
    menuHeadline.textContent = "Menu";
    menuDiv.appendChild(menuHeadline);

    const menuItems = [
        {
            courseInfo: "First Course",
            menuHeadline: "Heirloom Tomato & Burrata Salad",
            menuDescription: "Delicate heirloom tomatoes, creamy burrata, basil oil, and a balsamic reduction.",
            winePairing: "Wine Pairing: Sauvignon Blanc",
            price: "22",
        },
        {
            courseInfo: "Main Course",
            menuHeadline: "Seared Duck Breast",
            menuDescription: "Pan-seared duck breast served with caramelized shallots, truffle-infused mashed potatoes, and a rich blackberry port reduction.",
            winePairing: "Wine Pairing: Pinot Noir", 
            price: "38",
        },
        {
            courseInfo: "Dessert",
            menuHeadline: "Lavender Honey Crème Brûlée",
            menuDescription: "Silky custard infused with lavender and honey, topped with a golden caramelized sugar crust.",
            winePairing: "Wine Pairing: Late Harvest Riesling",
            price: "27",
        },
    ]

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");

        const courseInfo = document.createElement("p");
        courseInfo.textContent = item.courseInfo;
        courseInfo.classList.add("courseInfo");

        const menuHeadline = document.createElement("h1");
        menuHeadline.textContent = item.menuHeadline;
        menuHeadline.classList.add("menuHeadline");

        const menuDescription = document.createElement("p");
        menuDescription.textContent = item.menuDescription;
        menuDescription.classList.add("menuDescription");

        const winePairing = document.createElement("p");
        winePairing.textContent = item.winePairing; 
        winePairing.classList.add("winePairing"); 

        const price = document.createElement("p");
        price.textContent = item.price;

        menuItem.append(courseInfo, menuHeadline, menuDescription, winePairing);
        
        menuDiv.append(menuItem, price);
    });

    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";

    contentDiv.append(menuDiv);
}