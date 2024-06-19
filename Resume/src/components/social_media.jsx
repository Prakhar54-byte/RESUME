import React from "react";

function social_media({ website_name, link }) {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {website_name.map((name, index) => (
          <button
            key={index}
            className="rounded-lg border border-transparent px-4 py-2 text-xl font-extrabold bg-gray-900 cursor-pointer transition duration-200 hover:border-white"
          >
            <a href={link[index]} target="_blank" rel="nooper noref">
              {name}
            </a>
          </button>
        ))}
      </div>
    </>
  );
}

export default social_media;
