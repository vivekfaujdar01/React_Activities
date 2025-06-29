import { useState } from "react";

function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addPost({ title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-2 border rounded"
        placeholder="Write your post..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Publish
      </button>
    </form>
  );
}

export default BlogForm;
