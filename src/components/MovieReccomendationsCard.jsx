import React, { useState, useEffect } from 'react'
import { useAnimate, stagger, motion } from "framer-motion";
import idGenre from '../utils/genre';
function MovieReccomendationsCard({movie, genres}) {
const [open, setOpen]=useState(false)
const [scope, animate] = useAnimate();
const staggerList = stagger(0.1, { startDelay: 0.25 });

  return (
    <motion.div  
    ref={scope}
    className="box"
 
    onClick={() => {setOpen(!open) }} className=" flex  justify-start overflow-hidden w-auto"> 
   
    <div     className="bg-white relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <div 
      
      className="z-10 h-full w-full hover:opacity-100 overflow-hidden rounded-xl hover  opacity-80 group-hover:opacity-100 dark:opacity-70">
        <motion.img  ref={scope} whileTap={{ duration: 0.200 }} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}className="ease-in-out animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-1000 group-hover:scale-110" alt="" ></motion.img>
      </div>
{open &&
      <motion.div ref={scope}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50px", "50pc", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
      whileTap={{ duration: 0.200 }} layout className="ease-in-out duration-1000 object-cover shadow-xl px-3 pt-4 relative bottom-0 z-20 m-0 pb-4 ps-4 ">
      <h1 className=" text-start  text-2xl font-bold  ">{movie.original_title}</h1>
      <h1 className=" text-start text-sm font-light  "><span>Released:</span>{movie.release_date}</h1>
      <h1 className=" text-start text-sm font-light mt-4 px-2">
      {movie.genre_ids.map( genre => ( 
    <span key={Math.random().toString()} className="bg-blue-300 hover:bg-blue-700 text-white  py-1 px-2 mx-1 rounded-full mt-4 text-sm text-left leading-tight font-mediummt-5">{idGenre[genre]}</span>
 ))
 }
      </h1>
 
    </motion.div>
    }
    </div>
    </motion.div> 
  )
}

export default MovieReccomendationsCard
