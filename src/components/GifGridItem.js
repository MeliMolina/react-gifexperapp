import React from 'react'

export const GifGridItem = ({title, url}) => {

    //class es una palabra reservada del lenguaje de javascript
  return (
    <div className="card animate__animated animate__bounce">
        <img src={url} alt={title}/>
        <p> {title} </p>
    </div>
  )
} 