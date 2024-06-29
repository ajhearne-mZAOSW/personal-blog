// TODO: Create a variable that selects the main element
const main = document.querySelector('main');
const submitEl = document.getElementById('submit');

let posts = [];

// TODO: Create a function that builds an element and appends it to the DOM
function buildNewPost () {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        const newPost = document.createElement('div');
        newPost.setAttribute('class', 'blog-post');
        newPost.setAttribute('data-index', i);

        const blogUsername = document.createElement('h1');
        const blogTitle = document.createElement('h2');
        const blogContent = document.createElement('p');

        blogUsername.textContent = post.username;
        blogTitle.textContent = post.title;
        blogContent.textContent = post.content;
        
        main.appendChild(newPost);
        newPost.appendChild(blogUsername);
        newPost.appendChild(blogTitle);
        newPost.appendChild(blogContent);
    }
}

// TODO: Create a function that handles the case where there are no blog posts to display


// TODO: Create a function that reads from local storage and returns the data
function readBlogData () {
    let postData = {
        username: '',
        title: '',
        content: '',
    }

    postData = JSON.parse(localStorage.getItem('post'));
    console.log(postData);
    posts = postData;
}

// TODO: Call the function to render the list of blog posts
readBlogData()
buildNewPost();