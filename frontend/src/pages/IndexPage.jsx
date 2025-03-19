import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
const IndexPage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5001/");
        console.log('res:',response);
        setImages(response.data);
      } catch (error) { 
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
        </div>
      ) : (
        <div className="flex items-center justify-start flex-wrap gap-2 px-4 py-4">
          {images ? (
            images.map((image, index) => (
              <Card
                key={index}
                prompt={image.prompt}
                image={image.image}
                size={300}
              ></Card>
            ))
          ) : (
            <div className="flex items-center justify-center min-h-screen">No images yet</div>
          )}
        </div>
      )}
    </div>
  );
};

export default IndexPage;
