import { useParams, Link } from "react-router-dom";

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <div className="text-center text-gray-500">Post not found</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <Link
        to="/"
        className="text-indigo-600 hover:underline"
      >
        ← Back to all posts
      </Link>
    </div>
  );
}

export default PostDetail;
// This component displays the details of a single blog post.
// It uses the `useParams` hook from `react-router-dom` to get the post ID from the URL.
// It finds the post in the `posts` array using the ID.
// If the post is not found, it displays a "Post not found" message.
// If the post is found, it displays the title and body of the post.
// It also includes a link to navigate back to the list of all posts.
// The `Link` component is used to create a navigable link that takes the user back to the home page (the list of posts).
// The `text-indigo-600` and `hover:underline` classes are used to style the link, making it visually distinct and interactive.
