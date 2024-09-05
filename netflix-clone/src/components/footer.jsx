import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";

export const Footer = () => (
  <footer className="py-4 px-20 w-[100%] h-auto flex items-center justify-between">
    <Link to="/">
      <img 
        src={logo} 
        alt="Netflix Logo" 
        className="w-44 h-auto"
      />
    </Link>
    <p className="text-white text-2xl m-0">
      © 2024. All rights reserved.
    </p>
  </footer>
)