import React from 'react'
import {Link} from 'react-router-dom'
export const Card = ({movie}) => {
  const {id, original_title, overview ,poster_path} = movie;
  const img = `http://image.tmdb.org/t/p/w500/${poster_path}`

  return (
    <div>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-10 m-5">
          <Link to={`/movie/${id}`}>
            <img className="rounded-base" src={img} alt="" />
          </Link>
          <Link to={`/movie/${id}`}>
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{original_title}</h5>
          </Link>
          <p className="mb-6 text-body">{overview}</p>

        </div>
    </div>
  )
}
