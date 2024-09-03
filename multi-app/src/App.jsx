import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./pages/private-route";
import { Auth } from "./pages/auth";
import { NotFound } from "./pages/not-found";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};