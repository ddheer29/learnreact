import React from 'react'
import Movies from './Movies'
import movies from '../moviesdata.json'

const Allmovies = () => {
  return (
    <div className="main">
        {
            movies.map((element, index) => {
                return (
                    <Movies
                        key={index}
                        title={element.Title}
                        year={element.Year}
                        img={element.Poster}
                    />
                )
            })
        }
    </div>
  )
}

export default Allmovies;
