import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import PostDetail from "./components/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const newPost = { id: Date.now(), ...post };
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">My Blog</h1>
                <BlogForm addPost={addPost} />
                <BlogList posts={posts} deletePost={deletePost} />
              </>
            }
          />
          <Route
            path="/post/:id"
            element={<PostDetail posts={posts} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
