import { useFetch } from '../hooks/useFetch';
import { Card } from '../components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const MovieList = ({ apiPath, title }) => {
  // naming theek ki: movie (single) ko movies (array) kiya
  const { data: movies } = useFetch(apiPath);

  // Tab Title Update
  useEffect(() => {
    document.title = title ? `${title} - CineBase` : "CineBase - Watch Movies";
  }, [title]);

  return (
    // Pt-24 lagaya hai taaki fixed Header ke neeche cards na chhupe
    <main className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 pt-24 pb-14 px-4 transition-colors duration-300">
      <section className="max-w-7xl mx-auto">
        
        {/* Agar page ka koi title bhejna ho (e.g., "Popular Movies") */}
        {title && (
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 px-2"
          >
            {title}
          </motion.h2>
        )}

        {/* 👇 NEXT LEVEL GRID SYSTEM 👇 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </motion.div>

      </section>
    </main>
  );
};