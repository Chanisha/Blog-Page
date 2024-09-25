document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
});

function fetchPosts() {
    // Simulate fetching data from an API
    const posts = [
        { title: "First Blog Post", summary: "This is a summary of the first blog post.", date: "2024-01-01" },
        { title: "Second Blog Post", summary: "This is a summary of the second blog post.", date: "2024-02-01" }
    ];

    const postsList = document.getElementById('posts-list');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        postDiv.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-summary">${post.summary}</p>
            <p class="post-date">${post.date}</p>
        `;
        postsList.appendChild(postDiv);
    });
}
