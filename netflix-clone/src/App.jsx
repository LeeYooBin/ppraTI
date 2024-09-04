import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";

export const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);