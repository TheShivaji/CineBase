import React from 'react'
import { Allrouter } from './routes/Allrouter'
import { Header, Footer } from './components';

export const App = () => {
  return (

    <div className='dark:bg-slate-800 min-h-screen flex flex-col'>

      <Header />
      <main className="flex-grow">
        <Allrouter />
      </main>

      <Footer />
    </div>
  )
}

export default App
