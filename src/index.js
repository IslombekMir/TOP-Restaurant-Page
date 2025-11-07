import "./styles.css";
import loadHome from "./modules/htmlLoad.js";
import loadMenu from "./modules/menu.js";
import loadAbout from "./modules/about.js";

loadHome();

const nav = document.querySelector("nav");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");


nav.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "home-btn":
            loadHome();
            break;
        case "menu-btn":
            loadMenu();
            break;
        case "about-btn":
            loadAbout();
    }
})