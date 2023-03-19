// Hiding/showing menu on BIG screens.
let burgerIcon = document.getElementById("burger");
let hidingMenu = document.getElementById("menu");

burgerIcon.addEventListener("click", hideFunc);

function hideFunc() {
    if (smallScreen.matches) return;
        
    const animOptions = {
        duration: 1000,
        fill: "forwards"
    }

    if (hidingMenu.classList.contains("hidden")) {
        hidingMenu.classList.toggle("hidden"); // So the menu appears on the DOM.
        let menuRect = menu.getBoundingClientRect();
        //menu.style.right = `${menuRect.width}px`; // So the menu starts to appear outside the website.

        const menuFramesIn = {
            transform: [`translateX(${menuRect.width}px)`, `translateX(0)`],
            opacity: [0, 1],
            easing: "ease-out"
        }

        menu.animate(menuFramesIn, animOptions);

    } else if (!hidingMenu.classList.contains("hidden")) {
        let menuRect = menu.getBoundingClientRect();

        const menuFramesOut = {
            transform: [`translateX(0)`, `translateX(${menuRect.width}px)`],
            opacity: [1, 0],
            easing: "ease-in"
        }

        menu.animate(menuFramesOut, animOptions);
        setTimeout( () => menu.classList.toggle("hidden"), 1000 ); // So the menu is removed from the DOM after the animation finishes (1 sec).
    }
}


// Hiding/showing the default links on the menu.
const smallScreen = window.matchMedia("(max-width: 810px)");
let headerList = document.getElementById("list");
const headerListLength = headerList.children.length;

window.addEventListener("resize", relocating);
relocating();

function relocating() {
    if (smallScreen.matches && Array.from(headerList.children).length > 1) {
        for (let i = headerListLength - 2; i >= 0; i--) {
            hidingMenu.firstElementChild.prepend(Array.from(headerList.children)[i]);
        }
    } else if (!smallScreen.matches && Array.from(headerList.children).length <= 1) {
        for (let i = headerListLength - 2; i >= 0; i--) {
            headerList.prepend(Array.from(hidingMenu.firstElementChild.children)[i]);
        }
    }
}


// Hiding/showing menu on SMALL screens.
burgerIcon.addEventListener("click", hideSmallFunc);

function hideSmallFunc() {
    if (!smallScreen.matches) return;

    hidingMenu.style.color = "yellow";
    //hidingMenu.style.left = "200px";
    hidingMenu.style.zIndex = "9999";

    const animOptions = {
        duration: 1000,
        fill: "forwards"
    }

    if (hidingMenu.classList.contains("hidden")) {
        hidingMenu.classList.toggle("hidden");
    } else if (!hidingMenu.classList.contains("hidden")) {
        hidingMenu.classList.toggle("hidden");
    }
}