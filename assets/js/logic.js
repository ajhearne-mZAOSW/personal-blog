// ! fix toggle to set based on theme in local storage
// Access HTML elements
const themeSwitcher = document.getElementById('theme-switcher');
const container = document.querySelector('.container');
let mainImage = document.getElementById('main-image');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
        mainImage.src = "./assets/images/blog-light.png";
        localStorage.setItem('theme', mode);
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        mainImage.src = "./assets/images/blog-dark.png";
        localStorage.setItem('theme', mode);
    }
});

function loadTheme() {
    const theme = localStorage.getItem('theme');

    if(!theme) {
        return;
    }

    if (theme === 'light') {
        container.setAttribute('class', 'light');
        mainImage.src = "./assets/images/blog-light.png";
        // themeSwitcher.setAttribute()
    } else {
        container.setAttribute('class', 'dark');
        mainImage.src = "./assets/images/blog-dark.png";
    }
}

loadTheme()