// select form element
const main = document.querySelector('main');

let posts = [];
console.log(posts);

// build elements and append to DOM
function buildNewPost () {
    if (posts === null) {
        return;
    } else {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            
            const newPost = document.createElement('div');
            newPost.setAttribute('class', 'blog-post');
            newPost.setAttribute('data-index', i);

            const blogUsername = document.createElement('h1');
            const hzLine = document.createElement('hr');
            hzLine.setAttribute('class', 'hz-line');

            const blogContent = document.createElement('p');
            const blogTitle = document.createElement('h2');

            blogUsername.textContent = post.username;
            blogContent.textContent = post.content;
            blogTitle.textContent = `Posted by: ${post.title}`;

            main.appendChild(newPost);
            newPost.appendChild(blogUsername);
            newPost.appendChild(hzLine);
            newPost.appendChild(blogContent);
            newPost.appendChild(blogTitle);
        }
    }
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

// if no blog posts to display
if (posts === null) {
    const noPosts = document.createElement('img');
    noPosts.setAttribute('class', 'no-posts');
    noPosts.src = "./assets/images/noposts-light.png"

    main.appendChild(noPosts);
}