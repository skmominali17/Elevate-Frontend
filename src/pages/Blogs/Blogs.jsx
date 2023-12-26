import React, { useState } from 'react';
import './Blogs.css';

const Blogs = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    tag: 'general', // Default tag
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the blogData (send to API, save in state, etc.)
    console.log(blogData); // For example, log the data
  };

  return (
    <div className="container mx-auto h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <textarea
              name="description"
              value={blogData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
              Select Tag:
            </label>
            <select
              name="tag"
              value={blogData.tag}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="general">General</option>
              <option value="technology">Technology</option>
              <option value="travel">Travel</option>
              {/* Add more options for different tags */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blogs;
