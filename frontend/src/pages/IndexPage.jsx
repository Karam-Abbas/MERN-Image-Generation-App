import React, { useEffect, useState } from "react";
import axios from "axios";
const IndexPage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [prompt, setPrompt] = useState("");
  const generateImage = async () => {
    try {
      const response = await axios.post("http://localhost:5001/", {
        prompt,
      });
      console.log("Image URL:", response);
      setImageSrc(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <input
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
        className="border text-gray-950 px-1 py-2"
        placeholder="Prompt..?"
      />
      <button onClick={generateImage} className="border px-1 py-2 cursor-pointer">
        Generate Image
      </button>
      {imageSrc && <img src={imageSrc} alt="Generated" height={1024} width={1024}/>}
    </div>
  );
};

export default IndexPage;
