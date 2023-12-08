import React from 'react'

export const GifGridItem = ({title, url}) => {
    // console.log(id, title, url);
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={url} title={title}></img>
    </div>
  )
}

