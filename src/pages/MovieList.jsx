
import { Card } from '../components';

export const MovieList = () => {
  return (
    <main className='py-7'>
      <section className="max-w-7xl mx-auto py-7">

        <div className='flex justify-center flex-wrap'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>

      </section>
    </main>
  )
}
