// Hiding/showing menu on BIG screens.
let burgerIcon = document.getElementById("burger");
let hidingMenu = document.getElementById("menu");

burgerIcon.addEventListener("click", hideFunc);

function hideFunc() {
    if (smallScreen.matches) return;

    if (hidingMenu.classList.contains("hidden")) {
        hidingMenu.classList.toggle("hidden"); 
        let menuRect = menu.getBoundingClientRect();

        hidingMenu.style.width = "fit-content";
        
        const animOptions = {
            duration: 1000,
            fill: "forwards"
        };

        const menuFramesIn = {
            transform: [`translateX(${menuRect.width}px)`, `translateX(0)`],
            opacity: [0, 1],
            easing: "ease-out"
        };

        menu.animate(menuFramesIn, animOptions);

    } else if (!hidingMenu.classList.contains("hidden")) {
        let menuRect = menu.getBoundingClientRect();
        
        const animOptions = {
            duration: 1000,
        };

        const menuFramesOut = {
            transform: [`translateX(0)`, `translateX(${menuRect.width}px)`],
            opacity: [1, 0],
            easing: "ease-in"
        };

        menu.animate(menuFramesOut, animOptions);
        setTimeout( () => menu.classList.toggle("hidden"), 1000 );
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

    if (hidingMenu.classList.contains("hidden")) {
        hidingMenu.classList.toggle("hidden");

        let hidingMenuRect = hidingMenu.getBoundingClientRect();

        hidingMenu.style.width = "100vw";

        const menuFramesIn = {
            height: [0, `${hidingMenuRect.height}px`],
            easing: "ease-out"
        }

        const animOptions = {
            duration: 1000,
            fill: "forwards"
        };

        hidingMenu.animate(menuFramesIn, animOptions);

    } else if (!hidingMenu.classList.contains("hidden")) {
        let hidingMenuRect = hidingMenu.getBoundingClientRect();

        const menuFramesOut = {
            height: [`${hidingMenuRect.height}px`, 0],
            easing: "ease-in"
        }

        const animOptions = {
            duration: 1000,
        };

        hidingMenu.animate(menuFramesOut, animOptions);
        setTimeout( () => hidingMenu.classList.toggle("hidden"), 1000);
    }
}
