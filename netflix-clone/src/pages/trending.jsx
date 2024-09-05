import { Header } from "../components/header";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";

export const Trending = () => {
  document.title = "Trending";
  
  return (
    <main className="bg-background w-[100%] min-h-[100vh] pt-20">
      <Header />
      <Carousel
        isTrending
        title="Trending Movies"
        category="movie"
      />
      <Carousel
        isTrending
        title="Trending Series"
        category="tv"
      />
      <Footer />
    </main>
  );
}