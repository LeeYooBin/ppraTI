import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Grid } from "../components/grid";
import { searchByGenreId } from "../services/api-client";

export const Genre = () => {
  const { genreId } = useParams();
  const [data, setData] = useState([]);

  const handleSuccess = (data) => {
    setData(data);
  };

  const handleError = (e) => {
    console.error(`Error searching movie: ${e}`);
  };

  useEffect(() => {
    searchByGenreId(
      genreId,
      handleSuccess,
      handleError
    );
  }, [genreId]);

  return (
    <main className="bg-background w-[100%] min-h-[100vh] pt-36">
      <Header />
      <Grid data={data} />
      <Footer />
    </main>
  );
}