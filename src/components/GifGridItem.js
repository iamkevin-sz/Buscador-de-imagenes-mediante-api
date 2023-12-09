import React from 'react'

export const GifGridItem = ({title, url}) => {
    // console.log(id, title, url);
  return (
    <div className="card animate__animated animate__bounceIn">
      <h3>{title}</h3>
      <img src={url} title={title}></img>
    </div>
  )
}

