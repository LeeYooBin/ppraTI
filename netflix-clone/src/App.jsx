import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Movies } from "./pages/movies";
import { Series } from "./pages/series";
import { Trending } from "./pages/trending";
import { Genre } from "./pages/genre";
import { NotFound } from "./pages/not-found";

export const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/trending" element={<Trending />}></Route>
      <Route path="/genres/:genreId" element={<Genre />}></Route>
    </Routes>
  </Router>
);