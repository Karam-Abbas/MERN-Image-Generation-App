import React from "react";

const Card = (props) => {
  const { image, size, prompt } = props;
  return (
    <div
      className="group relative hover:backdrop-blur-md h-12 w-12 lg:h-auto lg:w-auto"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <img
        src={image}
        alt="Generated Image"
        height={size}
        width={size}
        className="object-fill rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
        <span className="text-white text-lg overflow-hidden">{prompt}</span>
      </div>
    </div>
  );
};

export default Card;
