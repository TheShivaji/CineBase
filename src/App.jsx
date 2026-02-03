import React from 'react'
import { Allrouter } from './routes/Allrouter'
import { Header, Footer } from './components';

export const App = () => {
  return (

    <div>
      App
      <Header/>
      <Allrouter/>
      <Footer/>
    </div>
  )
}

export default App
