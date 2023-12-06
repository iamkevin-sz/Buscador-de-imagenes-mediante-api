import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=cgdp6rg9dpeG9QZr0J8LCMXeWFFT0iUr";
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(imagenes => {
        return{
        id: imagenes.id,    
        title: imagenes.title,
        url : imagenes.images.downsized_medium.url,
    }

    })
    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
