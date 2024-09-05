import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchGenres } from "../services/api-client";

export const GenresGrid = () => {
  const [data, setData] = useState([]);

  const handleSuccess = (data) => {
    setData(data);
  };

  const handleError = (e) => {
    console.error(`Error searching movie: ${e}`);
  };

  useEffect(() => {
    searchGenres(
      handleSuccess, 
      handleError
    );
  }, []);
  
  return (
    <section className="w-[100%] h-auto px-20">
      <h2 className="text-white text-5xl font-bold my-16 text-center">
        Browse By Genres
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] place-items-center p-4 gap-y-8">
        {data.length > 0 && data.map(item => (
          <Link key={item.id} to={`genres/${item.id}`} className="no-underline">
            <div className="w-60 h-32 rounded-lg bg-red flex items-center justify-center">
              <h2 className="text-white text-2xl">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}