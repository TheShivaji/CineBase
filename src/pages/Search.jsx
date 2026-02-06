import { useFetch } from '../hooks/useFetch'
import {useSearchParams } from 'react-router-dom'
import { Card } from '../components';


export const Search = ({ apiPath }) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data: movie } = useFetch(apiPath , queryTerm);
  return (
    <main>
      <section className=' max-w-7xl mx-auto pt-19'>
        <p className='text-3xl text-gray-700 dark:text-white'>
        {movie.length === 0 ? `No result founded ${queryTerm} ` : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">

        <div className='flex justify-center flex-wrap'>
          {movie.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
