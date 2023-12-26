import React, { useState } from 'react';
import './Note.css';

const Note = () => {
  const [noteData, setNoteData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the noteData (save to database, etc.)
    console.log(noteData); // For example, log the data
    // You can add code here to handle storing the note data
  };

  return (
    <div className="container mx-auto h-screen w-screen bg-slate-300">
      <h1 className="text-2xl font-bold mb-4">Create a New Note</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={noteData.title}
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
            value={noteData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default Note;
