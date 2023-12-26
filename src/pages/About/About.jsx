import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
          ullamcorper turpis, et consectetur elit placerat ac. Aenean fringilla tellus et
          convallis tempus. Vestibulum lobortis.
        </p>
        <p className="text-gray-700 mb-4">
          Morbi fermentum justo ut blandit tristique. Sed ullamcorper euismod nisl at
          ultricies. Integer tincidunt urna at lectus.
        </p>
        <p className="text-gray-700 mb-4">
          Praesent ut augue eu dui sodales congue. Proin lacinia gravida magna, non
          fringilla elit scelerisque vel.
        </p>
        <p className="text-gray-700">
          Phasellus at nulla et nunc aliquam ullamcorper. Fusce vel posuere justo. Donec
          eu fermentum.
        </p>
      </div>
    </div>
  );
};

export default About;
