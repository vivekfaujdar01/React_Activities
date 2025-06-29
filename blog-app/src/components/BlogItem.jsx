import { Link } from "react-router-dom";

function BlogItem({ post, deletePost }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
      </Link>
      <p className="mt-2 text-gray-700 line-clamp-2">{post.body.slice(0, 100)}...</p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={() => deletePost(post.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default BlogItem;
// This component represents a single blog post item.
// It displays the title and a truncated version of the body.
// The title is a link that navigates to the post detail page when clicked.
// There is also a delete button that calls the `deletePost` function passed as a prop
// with the post's ID when clicked, allowing the parent component to handle the deletion of the post.
// The `line-clamp-2` class is used to limit the body text to two lines, providing a preview of the content.
// The `hover:underline` class adds an underline effect to the title when hovered over,
// enhancing the user experience by indicating that the title is clickable.