import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  // API Call: Yahan 'YOUR_API_KEY' ki jagah apni TMDB key daal dena ya .env se le lena
  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`); // Demo TMDB key (Replace with yours)
        const json = await response.json();
        setMovie(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  // Pro Feature: Browser tab title movie ke naam se update hoga
  useEffect(() => {
    if (movie.title) {
      document.title = `${movie.title} - CineBase`;
    }
  }, [movie]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Image URLs
  const img = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=No+Image";
    
  const backdropImg = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` 
    : "";

  // Dynamic Rating Color
  const ratingColor = 
    movie.vote_average >= 7 ? "text-emerald-500 dark:text-emerald-400" : 
    movie.vote_average >= 5 ? "text-yellow-500 dark:text-yellow-400" : 
    "text-red-500 dark:text-red-400";

  return (
    <main className="relative w-full min-h-screen bg-gray-50 dark:bg-zinc-950 pt-20 pb-14 overflow-hidden transition-colors duration-300">
      
      {/* 1. CINEMATIC BACKDROP IMAGE & GRADIENT */}
      {backdropImg && (
        <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[80vh] z-0">
          <img 
            src={backdropImg} 
            alt="backdrop" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 dark:to-transparent" />
        </div>
      )}

      <section className="relative z-10 max-w-7xl mx-auto px-4 mt-8 md:mt-16 flex flex-col md:flex-row gap-10 items-start">
        
        {/* 2. LEFT SIDE: POSTER */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[300px] mx-auto md:mx-0 md:w-1/3 lg:w-1/4 rounded-2xl overflow-hidden shadow-2xl dark:shadow-purple-900/20 ring-1 ring-gray-200 dark:ring-white/10 group"
        >
          <img src={img} alt={movie.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* 3. RIGHT SIDE: DETAILS */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-2/3 lg:w-3/4 flex flex-col"
        >
          {/* Title & Tagline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
            {movie.title}
          </h1>
          {movie.tagline && (
            <p className="text-lg md:text-xl text-purple-600 dark:text-purple-400 italic font-medium mb-6">
              "{movie.tagline}"
            </p>
          )}

          {/* Badges (Rating, Runtime, Release) */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-semibold">
            {/* Rating */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-zinc-800">
              <svg className={`w-5 h-5 ${ratingColor}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-gray-900 dark:text-white">{movie.vote_average?.toFixed(1)} / 10</span>
              <span className="text-gray-400 font-normal ml-1">({movie.vote_count} votes)</span>
            </div>

            {/* Runtime */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-zinc-800 text-gray-700 dark:text-gray-300">
              ⏱ {movie.runtime} min
            </div>

            {/* Release Date */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-zinc-800 text-gray-700 dark:text-gray-300">
              📅 {movie.release_date}
            </div>
          </div>

          {/* Genres */}
          {movie.genres && (
            <div className="flex flex-wrap gap-2 mb-8">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-transparent dark:border-white/5 backdrop-blur-md">
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Overview</h2>
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-lg max-w-4xl mb-8">
            {movie.overview || "No details available for this movie."}
          </p>

          {/* Action Buttons (IMDB Link etc) */}
          <div className="flex gap-4">
            {movie.imdb_id && (
              <a 
                href={`https://www.imdb.com/title/${movie.imdb_id}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#f5c518] hover:bg-[#e2b616] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#f5c518]/30 hover:-translate-y-1"
              >
                View on IMDB
              </a>
            )}
          </div>
          
        </motion.div>
      </section>
    </main>
  );
};