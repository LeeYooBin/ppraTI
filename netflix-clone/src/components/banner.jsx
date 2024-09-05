import { useState, useEffect } from "react";
import { searchByQuery } from "../services/api-client";
import { Info } from 'lucide-react';
import img from "../assets/2408132.jpg";


export const Banner = () => {
  const [movie, setMovie] = useState({});

  const handleSuccess = (data) => {
    setMovie(data[0]);
  };

  const handleError = (e) => {
    console.error(`Error searching movie: ${e}`);
  };

  useEffect(() => {
    searchByQuery(
      "Ghost in the Shell",
      handleSuccess, 
      handleError
    );
  }, []);

  return (
    <section 
      className="flex flex-col px-10 pb-10 md:px-20 md:pb-0 justify-end md:justify-center bg-cover bg-center h-[30vh] bg-no-repeat w-[100%] md:h-[40vh] lg:h-[90vh] text-gray-50"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-8xl">{movie.title}</h1>
      <p className="text-justify text-sm md:text-lg lg:text-3xl md:w-[50%]">{movie.overview}</p>
      <button
        className="self-start flex items-center px-4 py-2 gap-2 rounded-md bg-gray-500"
      >
        <Info className="w-6 md:w-10" />
        <span className="md:text-xl font-medium">More Info</span>
      </button>
    </section>
  );
}