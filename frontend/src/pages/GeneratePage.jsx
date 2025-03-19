import React, { useState } from "react";
import axios from "axios";

const GeneratePage = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt first");
      return;
    }
    
    setError("");
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:5001/", {
        prompt,
      });
      setImageSrc(response.data);
    } catch (error) {
      console.error(error);
      setError("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-h-full w-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">AI Image Generator</h1>
          <p className="text-gray-300">Transform your ideas into stunning visuals</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe the image you want to create..."
            />
            <button
              onClick={generateImage}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-200 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>
          
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-100 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}
        </div>
        
        {imageSrc ? (
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Generated Image</h2>
            <div className="relative rounded-lg overflow-hidden shadow-2xl mx-auto">
              <img 
                src={imageSrc} 
                alt="AI Generated" 
                className="max-w-full h-auto rounded-lg"
                width={1024} 
                height={1024}
              />
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 bg-opacity-50 rounded-lg border-2 border-dashed border-gray-600 p-12 text-center">
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-medium">Your generated image will appear here</p>
              <p className="mt-2">Enter a prompt and click Generate to create an image</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratePage;