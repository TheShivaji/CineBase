import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { motion } from 'framer-motion';

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  
  // Naming ko thoda sahi kiya (movie -> movies, kyunki array hai)
  const { data: movies } = useFetch(apiPath, queryTerm);

  // Pro Feature: Browser tab ka title automatically update hoga
  useEffect(() => {
    document.title = `Search: "${queryTerm}" - CineBase`;
  }, [queryTerm]);

  return (
    // Background colors ko baaki app ke dark/light mode se match kiya
    <main className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 pt-24 pb-14 px-4 transition-colors duration-300">
      
      {/* 1. Animated Search Title */}
      <section className="max-w-7xl mx-auto mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          {movies.length === 0 ? (
            <span>
              No results found for <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">"{queryTerm}"</span>
            </span>
          ) : (
            <span>
              Results for <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">"{queryTerm}"</span>
            </span>
          )}
        </motion.h1>
      </section>

      {/* 2. Proper CSS Grid for Cards (Netflix Style) */}
      <section className="max-w-7xl mx-auto">
        
        {movies.length > 0 ? (
          // Grid setup: Mobile pe 2, tablet pe 3-4, desktop pe 5 cards per row
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </motion.div>
        ) : (
          // 3. Premium Empty State (Agar koi movie na mile toh)
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="bg-gray-200 dark:bg-zinc-900 p-6 rounded-full mb-4 shadow-inner dark:shadow-black/50">
              <svg className="w-16 h-16 text-gray-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl text-gray-700 dark:text-zinc-300 font-semibold mb-2">
              Oops! We couldn't find that movie.
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-500 max-w-md">
              Try searching for a different title, checking for typos, or exploring our popular movies section.
            </p>
          </motion.div>
        )}

      </section>
    </main>
  );
};