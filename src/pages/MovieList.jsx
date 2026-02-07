import{ useFetch }from '../hooks/useFetch'
import { Card } from '../components';

export const MovieList = ({apiPath }) => {


  const { data : movie} =useFetch(apiPath)



  return (
    <main >
      <section className="max-w- mx-auto py-7">

        <div className='flex justify-center flex-wrap'>
          {movie.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}



        </div>

      </section>
    </main>
  )
}
