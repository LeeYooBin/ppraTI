import { Header } from "../components/header";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";

export const Series = () => {
  document.title = "Series";
  
  return (
    <main className="bg-background w-[100%] min-h-[100vh] pt-20">
      <Header />
      <Carousel
        title="Popular Series"
        category="popular"
      />
      <Carousel
        title="Top Rated Series"
        category="top_rated"
      />
      <Carousel
        title="Airing Today Series"
        category="airing_today"
      />
      <Carousel
        title="On The Air Series"
        category="on_the_air"
      />
      <Footer />
    </main>
  );
}