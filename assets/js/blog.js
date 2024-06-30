// select form element
const main = document.querySelector('main');

let posts = [];

// build elements and append to DOM
function buildNewPost () {
    if (posts === null) {
        return;
    } else {
        const postBlock = document.createElement('div')
        postBlock.setAttribute('class', 'post-block')
        main.appendChild(postBlock);

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const newPost = document.createElement('div');
            newPost.setAttribute('class', 'blog-post');
            newPost.setAttribute('data-index', i);

            const blogUsername = document.createElement('h3');
            const hzLine = document.createElement('hr');
            hzLine.setAttribute('class', 'hz-line');

            const blogContent = document.createElement('p');
            const blogTitle = document.createElement('h6');

            blogUsername.textContent = post.username;
            blogContent.textContent = post.content;
            blogTitle.textContent = `Posted by: ${post.title}`;

            
            newPost.appendChild(blogUsername);
            newPost.appendChild(hzLine);
            newPost.appendChild(blogContent);
            newPost.appendChild(blogTitle);
            postBlock.appendChild(newPost);
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
    posts = postData;
}

readBlogData()
buildNewPost();

// if no blog posts to display
if (posts === null) {
    const noPosts = document.createElement('div');
    const noPostsImg = document.createElement('img');
    noPosts.setAttribute('class', 'no-posts');
    noPostsImg.setAttribute('class', 'no-posts-img');
    noPostsImg.src = "./assets/images/noposts.png"    

    main.appendChild(noPosts);
    noPosts.appendChild(noPostsImg);
}