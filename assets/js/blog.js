// select form element
const main = document.querySelector('main');

let posts = [];
console.log(posts);

// build elements and append to DOM
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

// if no blog posts to display
if (posts.length === 0) {
    const noPosts = document.createElement('img');
    noPosts.setAttribute('class', 'no-posts');
    noPosts.src = "./assets/images/noposts-light.png"

    main.appendChild(noPosts);
}

// read and return local storage data
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

readBlogData()
buildNewPost();