import React, { useState } from 'react';
//import BlogList from './components/BlogList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
  ]);

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogList posts={posts} onDeletePost={handleDeletePost} />
    </div>
  );
}

export default App;
