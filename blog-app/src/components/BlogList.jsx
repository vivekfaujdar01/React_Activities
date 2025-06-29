import BlogItem from "./BlogItem";

function BlogList({ posts, deletePost }) {
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet.</p>
      ) : (
        posts.map((post) => (
          <BlogItem key={post.id} post={post} deletePost={deletePost} />
        ))
      )}
    </div>
  );
}

export default BlogList;
// This component renders a list of blog posts.
// If there are no posts, it displays a message indicating that there are no blog posts yet.
// If there are posts, it maps over the `posts` array and renders a `BlogItem` for each post.
// The `deletePost` function is passed down to each `BlogItem`,
// allowing each item to handle its own deletion.
// The `key` prop is used to uniquely identify each `BlogItem` in the list,
// which is important for React's reconciliation process.
// The `post` prop contains the individual blog post data, which includes the title and body.
// The `deletePost` function is called when the delete button in the `BlogItem` is clicked,
// allowing the parent component to manage the state of the blog posts.