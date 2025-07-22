function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

let blogs = [];
let editMode = false;

const blogsList = document.getElementById('blogs-list');
const searchInput = document.getElementById('search-blogs');


const blogForm = document.getElementById('blog-form');
const resetButton = document.getElementById('reset-form');

function loadBlogs() {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
        dispBlog(blogs);
    } else {
        blogs = [];
        blogsList.innerHTML = '<p>No blogs found</p>';
    }
}

function saveBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function dispBlog(blogsToDisplay) {
    blogsList.innerHTML = '';
    if (blogsToDisplay.length === 0) {
        blogsList.innerHTML = '<p>No blogs found</p>';
        return;
    }
    blogsToDisplay.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog-item';
        blogItem.innerHTML = `
            <div class="blog-item-content">
                <h3>${blog.blog_title}</h3>
                <p>${blog.description.substring(0, 100)}${blog.description.length > 100 ? '...' : ''}</p>
                <div class="blog-meta">
                    <span>Category: ${blog.category}</span>
                    <span>Date: ${blog.date}</span>
                </div>
            </div>
            ${blogForm ? `<div class="blog-item-actions">
                <button class="edit-btn" data-id="${blog.id}">Edit</button>
                <button class="delete-btn" data-id="${blog.id}">Delete</button>
            </div>` : ''}
        `;
        blogsList.appendChild(blogItem);
    });

    if (blogForm) {
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', handleEditBlog);
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', handleDeleteBlog);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    const blogData = {
        blog_title: document.getElementById('blog-title').value,
        description: document.getElementById('blog-description').value,
        url: document.getElementById('blog-url').value,
        "published-by": document.getElementById('blog-author').value,
        category: document.getElementById('blog-category').value,
        date: document.getElementById('blog-date').value
    };
    const blogId = document.getElementById('blog-id').value;
    if (blogId) {
        blogData.id = parseInt(blogId);
        const index = blogs.findIndex(blog => blog.id === blogData.id);
        if (index !== -1) {
            blogs[index] = blogData;
            saveBlogs();
            alert('Blog updated successfully!');
        }
    } else {
        blogData.id = blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 1;
        blogs.push(blogData);
        saveBlogs();
        alert('Blog has been added successfully!');
    }
    dispBlog(blogs);
    resetForm();
}

function handleEditBlog(e) {
    const blogId = parseInt(e.target.dataset.id);
    const blog = blogs.find(blog => blog.id === blogId);
    if (blog) {
        document.getElementById('blog-title').value = blog.blog_title;
        document.getElementById('blog-description').value = blog.description;
        document.getElementById('blog-url').value = blog.url || '';
        document.getElementById('blog-author').value = blog["published-by"];
        document.getElementById('blog-category').value = blog.category;
        document.getElementById('blog-date').value = blog.date;
        document.getElementById('blog-id').value = blog.id;
        document.getElementById('save-blog').textContent = 'Update Blog';
        editMode = true;
        blogForm.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleDeleteBlog(e) {
    if (confirm('Are you sure you want to delete this blog?')) {
        const blogId = parseInt(e.target.dataset.id);
        blogs = blogs.filter(blog => blog.id !== blogId);
        saveBlogs();
        dispBlog(blogs);
        alert('Blog deleted successfully!');
    }
}

function resetForm() {
    blogForm.reset();
    document.getElementById('blog-id').value = '';
    document.getElementById('save-blog').textContent = 'Save Blog';
    editMode = false;
}

const searchBlogs = debounce(function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBlogs = blogs.filter(blog => 
        blog.blog_title.toLowerCase().includes(searchTerm) || 
        blog.description.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
    );
    dispBlog(filteredBlogs);
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    loadBlogs();
    if (blogForm) {
        blogForm.addEventListener('submit', handleFormSubmit);
        resetButton.addEventListener('click', resetForm);
    }
    if (searchInput) {
        searchInput.addEventListener('input', searchBlogs);
    }
});
