let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

let validator = -1;

burger.addEventListener("click", () => {
    if (smallScreens.matches) return;
    validator *= -1;

    if (validator === 1) {
        menu.classList.toggle("hidden");

        let menuRect = menu.getBoundingClientRect();
        menu.style.top = "";
        menu.style.right = `-${menuRect.width}px`;

        const menuFramesIn = {
            transform: [`translate(-${menuRect.width}px)`],
            opacity: [0, 1],
            easing: "ease-out"
        }

        const animOptions = {
            duration: 1000,
            fill: "forwards",
        }
    
        menu.animate(menuFramesIn, animOptions);
    }

    if (validator === -1) {
        let menuRect = menu.getBoundingClientRect();

        const menuFramesOut = {
            transform: [`translate(${menuRect.width}px)`],
            opacity: [1, 0],
            easing: "ease-in"
        }

        const animOptions = {
            duration: 1000,
            fill: "forwards",
        }
        
        menu.animate(menuFramesOut, animOptions);

        setTimeout(() => menu.classList.toggle("hidden"), 1000);
}
});

const smallScreens = window.matchMedia("(max-width: 810px)");
let listMenu = document.getElementById("list");
let menuElems = document.querySelectorAll("#list > li");
const menuNumber = menuElems.length;
let noList = true;
//console.log(menuNumber);

function menuOnMobile() {
    if (smallScreens.matches && noList) {
        console.log("Entering if");
        for (let i = menuElems.length - 2; i >= 0; i--) {
            menu.firstElementChild.prepend(menuElems[i]);
        }
        noList = false;
        /*menu.style.top = "";
        menu.style.right = "";
        menu.style.left = "";
        menu.style.bottom = "";*/
    } else if (!smallScreens.matches && !noList) {
        console.log("Entering else");
        for (let i = menuNumber - 1; i >= 0; i--) {
            listMenu.prepend(menuElems[i]);
        }
        noList = true;
        menu.style.width = "fit-content";
    }
}

menuOnMobile()

window.addEventListener("resize", menuOnMobile);

let container = document.querySelector(".container");

burger.addEventListener("click", () => {
    if (!smallScreens.matches) return;
    console.log("Entering small screens listener");
    validator *= -1;

    let contRect = container.getBoundingClientRect();

    //console.log(contRect.height);
    if (validator === 1) {
        menu.classList.toggle("hidden");

        let menuRect = menu.getBoundingClientRect();
        /*menu.style.right = "1px";*/
        /*menu.style.top = `${contRect.height}px`;*/
        menu.style.width = "100vw";
        //console.log(`Menu height: ${menuRect.height}`);

        const menuFramesIn = {
            /*
            transform: [`translateY(${contRect.height}px)`],
            opacity: [0, 1],
            */
            height: [0, `${menuRect.height}px`],
            easing: "ease-out"
        }

        const animOptions = {
            duration: 1000,
            fill: "forwards",
        }
    
        console.log(`========= Menu height before: ========= ${menuRect.height}`);
        menu.animate(menuFramesIn, animOptions);
        console.log(`========= Menu height after: ========= ${menuRect.height}`);
    }

    if (validator === -1) {
        let menuRect = menu.getBoundingClientRect();
        /*menu.style.right = "1px";*/
        /*menu.style.top = `${contRect.height}px`;*/

        const menuFramesOut = {
            /*
            transform: [`translateY(-${menuRect.height + contRect.height}px)`],
            opacity: [1, 0],
            */
            height: [`${menuRect.height}px`, 0],
            easing: "ease-in"
        }

        const animOptions = {
            duration: 1000,
            /*fill: "forwards",*/
        }
        
        console.log(`========= Menu height before: ========= ${menuRect.height}`);
        menu.animate(menuFramesOut, animOptions);
        console.log(`========= Menu height after: ========= ${menuRect.height}`);

        setTimeout(() => menu.classList.toggle("hidden"), 1000);
}
});


// Debugging.
burger.addEventListener("click", () => {
    let menuRect = menu.getBoundingClientRect();
    console.log(menu);
    console.log(`Display: ${getComputedStyle(menu).display}\nHeight: ${getComputedStyle(menu).height}\nMenu height: ${menuRect.height}\nRight offset: ${menuRect.right}\nBottom offset: ${menuRect.bottom}\nWidth: ${menuRect.width}`);
})