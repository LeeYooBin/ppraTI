import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
  Button,
  Input,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
} from "reactstrap";
import { Bell, Search, X } from "lucide-react";
import logo from "../assets/netflix-logo.png";
import profile from "../assets/profile.jpg";

export const Header = ({ isErrorPage = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  }

  const handleSearchInputState = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
  }
  
  return (
    <header 
      className={`py-1 px-20 lg:20 w-[100%] flex items-center justify-between fixed z-10 top-0 ${scrollPosition > 0 || isErrorPage ? "bg-transparent" : "bg-background"}`}
    >
      <div className="flex sm:gap-2 lg:gap-20 items-center">
        <Link to="/">
          <img 
            src={logo} 
            alt="Netflix Logo" 
            className="w-44 h-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/" className="no-underline text-white text-2xl">Home</Link>
          <Link to="/series" className="no-underline text-white text-2xl">TV Show</Link>
          <Link to="/movies" className="no-underline text-white text-2xl">Movies</Link>
          <Link to="/trending" className="no-underline text-white text-2xl">Trending</Link>
        </nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="lg:hidden">
          <DropdownToggle color="white" caret size="lg" className="text-white">
            Navigate
          </DropdownToggle>
          <DropdownMenu className="bg-background opacity-80 border border-white py-2 text-center">
            <DropdownItem>
              <Link to="/" className="no-underline text-white text-2xl">Home</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/series" className="no-underline text-white text-2xl">TV Shows</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/movies" className="no-underline text-white text-2xl">Movies</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/trending" className="no-underline text-white text-2xl">Trending</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex gap-2 items-center">
        <span className="hidden md:block">
          {!isSearchInputOpen ? (
            <Button color="link" className="no-underline text-white" onClick={handleSearchInputState}>
              <Search />
            </Button>
          ) : (
            <Label className="relative w-auto h-auto">
              <Search className="absolute top-1 left-2" />
              <Input 
                type="text"
                size={40}
                bsSize="lg"
                onBlur={handleSearchInputState}
                
                plaintext
                placeholder="Titles, people and genders"
                style={{ padding: "0 3.2rem" }}
                className="bg-background opacity-50 border border-white text-white" 
              />
              <Button
                color="link"
                onClick={handleSearchInputState}
                className="w-auto h-auto flex items-center justify-center absolute right-0 top-0"
              >
                <X className="text-white opacity-55" />
              </Button>
            </Label>
          )}
        </span>
        <Button type="button" color="link" className="text-white">
          <Bell />
        </Button>
        <Button type="button" color="link" className="text-white">
          <img src={profile} alt="Miles Morales Spiderman profile image" className="w-12 h-12" />
        </Button>
      </div>
    </header>
  );
}

Header.propTypes = {
  isErrorPage: PropTypes.bool,
};