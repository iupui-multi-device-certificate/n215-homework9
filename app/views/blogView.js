const renderPost = (blog) => `
<article class="blog-post">            
  <img src="${blog.relativeImagePath}" alt="${blog.title}">
    <div class="blog-post-body">
      <h1 class="blog-post-title">${blog.title}</h1>
      ${blog.content}
    </div>
</article>
`;

const renderBlogs = (blogs) => `
  ${blogs.map((blog) => renderPost(blog)).join("")}
`;

export const blogView = (blogs) => `

        <section class="blog">
        <h1 class="section-title upper">Blog</h1>
        <div class="blogs">
          ${renderBlogs(blogs)}
        </div>
        </section>

`;
