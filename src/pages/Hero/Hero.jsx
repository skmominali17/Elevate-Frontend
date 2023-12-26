import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto flex items-center justify-center bg-zinc-400">
      <div className="bg-red-500 w-1/2 h-screen">
        <h1 className="text-4xl font-bold">This is Hero page</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/explore">Explore</Link>
        </button>
      </div>
      <div className="w-1/2 h-screen bg-yellow-500">
        <img
          src=""
          alt="Your Image"
          className="mx-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
