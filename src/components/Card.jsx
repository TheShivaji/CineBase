import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path, vote_average } = movie;

  const img = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  // Rating colors
  const ratingColor =
    vote_average >= 7
      ? "text-emerald-500 dark:text-emerald-400"
      : vote_average >= 5
      ? "text-yellow-500 dark:text-yellow-400"
      : "text-red-500 dark:text-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06, y: -10 }}
      transition={{ duration: 0.4 }}
      className="
        group relative w-full max-w-[220px]
        rounded-2xl overflow-hidden cursor-pointer
        bg-white dark:bg-zinc-900
        shadow-lg dark:shadow-xl
        ring-1 ring-gray-200 dark:ring-white/10
        hover:ring-purple-500/50 dark:hover:ring-purple-400/40
        hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30
        transition-all duration-500
      "
    >
      <Link to={`/movie/${id}`} className="block w-full h-full">

        {/* IMAGE */}
        <div className="relative w-full aspect-[2/3] overflow-hidden">
          <img
            src={img}
            alt={original_title}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
          />

          {/* 🔥 ADAPTIVE CINEMATIC OVERLAY (Light mode me white gradient, dark me black) */}
          <div className="
            absolute inset-0 
            bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          " />

          {/* 🔥 glowing border effect */}
          <div className="
            absolute inset-0 rounded-2xl
            opacity-0 group-hover:opacity-100
            transition duration-500
            shadow-[inset_0_0_40px_rgba(168,85,247,0.15)] dark:shadow-[inset_0_0_40px_rgba(168,85,247,0.3)]
          " />

          {/* ▶️ play button */}
          <div className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            scale-75 group-hover:scale-100
            transition duration-500 z-10
          ">
            <div className="
              bg-white/60 dark:bg-white/20 backdrop-blur-md
              p-4 rounded-full
              border border-white/50 dark:border-white/30
              shadow-xl
            ">
              <svg
                className="w-7 h-7 text-purple-600 dark:text-white translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* ❤️ wishlist button */}
          <button
            className="
              absolute top-3 left-3 z-20
              bg-white/70 dark:bg-black/50 backdrop-blur-md
              p-2 rounded-full
              border border-gray-200 dark:border-white/10
              opacity-0 group-hover:opacity-100
              transition duration-500
              hover:scale-110
            "
          >
            ❤️
          </button>
        </div>

        {/* ⭐ rating */}
        <div className="
          absolute top-3 right-3 z-20 flex items-center gap-1.5
          bg-white/80 dark:bg-black/60 backdrop-blur-md
          border border-gray-200 dark:border-white/10
          text-gray-900 dark:text-white text-[11px] font-bold
          px-2 py-1 rounded-full
          shadow-lg
        ">
          <svg className={`w-3 h-3 ${ratingColor}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span>{vote_average ? vote_average.toFixed(1) : "N/R"}</span>
        </div>

        {/* 🎬 content */}
        <div className="
          absolute bottom-0 w-full p-3 z-20
          translate-y-8 group-hover:translate-y-0
          transition duration-500
        ">
          <h3 className="
            text-gray-900 dark:text-white text-sm font-bold
            line-clamp-1 mb-1
            drop-shadow-lg dark:drop-shadow-md
          ">
            {original_title}
          </h3>

          <p className="
            text-gray-600 dark:text-zinc-300 text-xs
            line-clamp-3
            opacity-0 group-hover:opacity-100
            transition duration-500 delay-100
          ">
            {overview || "No description available"}
          </p>

          {/* 🎯 extra actions */}
          <div className="
            flex gap-2 mt-2
            opacity-0 group-hover:opacity-100
            transition duration-500 delay-150
          ">
            <button className="text-xs font-semibold bg-purple-600 dark:bg-white text-white dark:text-black px-2.5 py-1 rounded-md shadow-md">
              Watch
            </button>
            <button className="text-xs font-semibold bg-white/50 dark:bg-white/10 text-gray-800 dark:text-white px-2.5 py-1 rounded-md border border-gray-300 dark:border-white/20 backdrop-blur-sm">
              Details
            </button>
          </div>
        </div>

      </Link>
    </motion.div>
  );
};