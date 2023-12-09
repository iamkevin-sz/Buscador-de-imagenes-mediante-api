import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const {data:images, loading} =   useFetchGifs(category);

  // console.log(data);
  // console.log(loading);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
