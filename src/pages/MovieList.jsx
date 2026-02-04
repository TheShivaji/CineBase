import { useState, useEffect } from 'react';
import { Card } from '../components';

export const MovieList = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
  async function featchMovie() {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=def2230e4a655e83a48dd519a9902261")
    const data = await response.json();
    setMovie(data.results)

  }
  featchMovie()
  }, [])

  return (
    <main className='py-7'>
      <section className="max-w-7xl mx-auto py-7">

        <div className='flex justify-center flex-wrap'>
          {movie.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}



        </div>

      </section>
    </main>
  )
}
