import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=cgdp6rg9dpeG9QZr0J8LCMXeWFFT0iUr";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((imagenes) => {
      return {
        id: imagenes.id,
        title: imagenes.title,
        url: imagenes.images.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(() => gifs);
  };

  return (
    <div>
      <h3>{category}</h3>

      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
