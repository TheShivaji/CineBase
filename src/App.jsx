import React from 'react';
import { Allrouter } from './routes/Allrouter';
import { Header, Footer } from './components';

export const App = () => {
  return (
    // 1. Premium Dark Background (zinc-950)
    // 2. Custom Text Selection Color (selection:bg-purple-500)
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-purple-500 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* --- Cinematic Background Glows (Netflix/Premium feel) --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
      {/* --------------------------------------------------------- */}

      <div className="relative z-10 flex flex-col min-h-screen ">
        <Header />
        
        {/* Tera flex-grow logic ekdum perfect hai */}
        <main className="flex-grow w-full">
          <Allrouter />
        </main>

        <Footer />
      </div>
      
    </div>
  );
};

export default App;