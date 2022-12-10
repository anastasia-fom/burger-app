import BlogElement from "./elements/BlogElement";

function BlogPrototype() {
    return(
        <section className="blog wrapper">
            <h2>Blog</h2>

            <div className="blog__body">
                <BlogElement />
                <BlogElement />
                <BlogElement />
                <BlogElement />
            </div>
        </section>
    );
}

export default BlogPrototype;