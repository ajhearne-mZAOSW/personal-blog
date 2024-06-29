// Access HTML elements
const themeSwitcher = document.getElementById('theme-switcher');
const container = document.querySelector('.container');
const mainImage = document.getElementById('main-image');

// Set default mode to dark
themeSwitcher.checked = false;

// Listen for a click event on toggle switch
function clickHandler () {
    // if dark
    if (this.checked) {
        container.setAttribute('class', 'dark');
        mainImage.src = "./assets/images/blog-dark.png";
        localStorage.setItem('theme', 'dark');
    }
    // if light
    else {
        container.setAttribute('class', 'light');
        mainImage.src = "./assets/images/blog-light.png";
        localStorage.setItem('theme', 'light');
    }
};

themeSwitcher.addEventListener('click', clickHandler);

window.onload = loadTheme()

function loadTheme() {
    const localTheme = localStorage.getItem('theme');

    if (localTheme !== null && localTheme === 'dark') {
        container.setAttribute('class', 'dark');
        themeSwitcher.checked = true;
    }
}