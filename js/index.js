const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");

const openMenu = () => {
    header.classList.add("menu-open");
    menu.classList.add("menu-open");
    menuBtn.classList.add("menu-open");
    closeBtn.classList.add("menu-open");
    document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
    header.classList.remove("menu-open");
    menu.classList.remove("menu-open");
    menuBtn.classList.remove("menu-open");
    closeBtn.classList.remove("menu-open");
    document.body.style.overflowY = "unset";
};

menuBtn.addEventListener("click", () => {
    openMenu();
});

closeBtn.addEventListener("click", () => {
    closeMenu();
});

const menuLinks = document.querySelectorAll(".menu-item a");

menu.addEventListener("click", event => {
    console.log(event.target);

    console.log(event.target);

    Object.values(menuLinks).forEach(value => {
        if (value === event.target) {
            closeMenu();
        }
    });
});