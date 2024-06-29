// select form elements
const submitEl = document.getElementById('submit');
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('post-title');
const contentEl = document.getElementById('content');

// form submission
function storeBlogData (event) {
    event.preventDefault();

    const post = {
        username: usernameEl.value.trim(),
        title: titleEl.value.trim(),
        content: contentEl.value.trim(),
    }

    // error handling: empty fields
    if (!post.username || !post.title || !post.content) { 
        alert('Please fill out all fields.'); 
        return; 
    }

    // store form data in local storage
    localStorage.setItem('post', JSON.stringify(post));

    // reset form
    usernameEl.value = '';
    titleEl.value = '';
    contentEl.value = '';
}

// redirect to blog page
let redirectURL = 'blog.html';

function redirectPage (event, url) {
    event.preventDefault();
    url = redirectURL;
    location.assign(url);
};

// on form submit
submitEl.addEventListener('click', storeBlogData, redirectPage);