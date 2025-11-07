export default function loadHtml() {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    h1.textContent = "The Best Food Place in all of Westeros";
    p1.textContent = "You can't call yourself a man unless you've tried these bloody food. We have food from kingdoms like the Reach, the North, the Riverlands, the KingsLanding, the Westerlands and even Essos.";
    p2.textContent = "And if you don't come visit us, we will send the gold cloaks after you. Or we will pay the Iron Bank to have the faceless man deal with you. Your punishment will be to be sent to the Night's Watch to rot.";

    content.innerHTML = "";
    content.appendChild(h1);
    content.appendChild(p1);
    content.appendChild(p2)
}