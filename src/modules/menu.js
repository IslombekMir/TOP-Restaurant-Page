export default function loadMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    const h1 = document.createElement("h1")
    const h2_Westeros = document.createElement("h2");
    const h2_Essos = document.createElement("h2"); 
    const ul_Westeros = document.createElement("ul");
    const ul_Essos = document.createElement("ul");
    
    
    function addListItems(list) {
        for(let i = 1; i <= 5; i++) {
            let item = "Item " + String(i);
            let li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        }
    }

    addListItems(ul_Westeros);
    addListItems(ul_Essos);

    h1.textContent = "Our Menu";
    h2_Westeros.textContent = "Food from Westeros";
    h2_Essos.textContent = "Food from Essos";

    //Append
    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(h2_Westeros);
    content.appendChild(ul_Westeros);
    content.appendChild(h2_Essos);
    content.appendChild(ul_Essos);
}