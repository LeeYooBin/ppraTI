import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Carousel } from "../components/carousel";
import { GenresGrid } from "../components/genres-grid";
import { Footer } from "../components/footer";

export const Home = () => {
  document.title = "Home"

  return (
    <main className="bg-background w-[100%] min-h-[100vh]">
      <Header />
      <Banner />
      <Carousel
        isMovie
        title="Popular Movies"
        category="popular"
      />
      <Carousel
        title="Popular TV Shows"
        category="popular"
      />
      <Carousel
        isMovie
        title="Top Rated Movies"
        category="top_rated"
      />
      <GenresGrid />
      <Footer />
    </main>
  );
};