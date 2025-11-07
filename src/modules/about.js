export default function loadAbout() {
    const content = document.getElementById("content");
    const h1 = document.querySelector("h1");
    const p = document.createElement("p");



    //Contents
    h1.textContent = "Lean about our fine diner!";
    p.textContent = "We offer food from different parts of the world, including all seven kingdoms and Essos. Gods, the food is good here.";

    //Append
    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(p);
}