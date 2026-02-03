import {Routes , Route } from 'react-router-dom'
import {MovieList , MovieDetail , Serach , PageNote} from '../pages';

import React from 'react'

export const Allrouter = () => {
  return (
    <div className='dark:bg-gray-900 '>
      <Routes>
    <Route path="/" element={<MovieList/>}/>
    <Route path="movies/:id" element={<MovieDetail/>}/>
    <Route path="movies/popular" element={<MovieList/>}/>
    <Route path="movies/top" element={<MovieList/>}/>
    <Route path="movies/upcoming" element={<MovieList/>}/>
    <Route path="Serach" element={<Serach/>}/>
    <Route path="*" element={<PageNote/>}/>
  </Routes>
    </div>


  )
}
