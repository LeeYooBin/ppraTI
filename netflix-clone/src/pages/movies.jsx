import { Header } from "../components/header";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";

export const Movies = () => {
  document.title = "Movies";
  
  return (
    <main className="bg-background w-[100%] min-h-[100vh] pt-20">
      <Header />
      <Carousel
        isMovie
        title="Now Playing Movies"
        category="now_playing"
      />
      <Carousel
        isMovie
        title="Popular Movies"
        category="popular"
      />
      <Carousel
        isMovie
        title="Top Rated Movies"
        category="top_rated"
      />
      <Carousel
        isMovie
        title="Upcoming Movies"
        category="upcoming"
      />
      <Footer />
    </main>
  );
}