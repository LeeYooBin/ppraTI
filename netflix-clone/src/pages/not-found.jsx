import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Header } from "../components/header";
import img from "../assets/not-found-page-image.jpg";

export const NotFound = () => (
  <main className="flex flex-col w-[100%] h-[100vh]">
    <Header />
    <section 
      className="bg-cover bg-center bg-no-repeat w-[100%] flex-grow"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`
      }}
    >
      <div className="flex flex-col items-center justify-center gap-8 w-[100%] min-h-[80vh] text-white">
        <h1 className="text-9xl font-bold">Are you lost?</h1>
        <p className="text-5xl font-thin text-center w-[50%]">
          Unfortunately, we were unable to locate this page. You can find many other titles on our home page.
        </p>
        <Link to="/">
          <Button 
            className="bg-white border-none text-black"
            size="lg"
          >
            Netflix Homepage
          </Button>
        </Link>
        <p></p>
      </div>
    </section>
  </main>
);
