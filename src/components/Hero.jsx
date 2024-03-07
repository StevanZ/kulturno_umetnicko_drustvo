import React, { useState, useEffect } from "react";

const Hero = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const promises = Array.from({ length: 12 }, async (_, i) => {
        const image = await import(`../assets/images/image-${i + 1}.jpg`);
        return image.default;
      });

      const loadedImages = await Promise.all(promises);
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <section className="hero">
      Hero
      {images.map((image, index) => (
        <img key={index} src={image} alt={`description ${index}`} />
      ))}
    </section>
  );
};

export default Hero;
