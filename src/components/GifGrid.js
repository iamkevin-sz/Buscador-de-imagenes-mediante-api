import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);
    useEffect(()=>{
      getGifs();
    }, []);

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

 

  return (
    <div>
      <h3>{category}</h3>
      <h3>{count}</h3>
      <button onClick={()=> setCount(count + 1)}>+</button>
    </div>
  );
};
