import React, { useState } from "react";
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

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  }

  const handleSearchInputState = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
  }
  
  return (
    <header className="py-1 px-12 lg:20 flex items-center justify-between bg-black">
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
          <Link to="/favorites" className="no-underline text-white text-2xl">My List</Link>
          <Link to="/" className="no-underline text-white text-2xl">Browse by Language</Link>
        </nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="lg:hidden">
          <DropdownToggle color="white" caret size="lg" className="text-white">
            Navigate
          </DropdownToggle>
          <DropdownMenu className="bg-black opacity-50 border border-white py-2 text-center">
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
              <Link to="/favorites" className="no-underline text-white text-2xl">My List</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/" className="no-underline text-white text-2xl">Browse by Language</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex gap-2 items-center">
        {!isSearchInputOpen ? (
          <Button color="link" className="no-underline text-white" onClick={handleSearchInputState}>
            <Search />
          </Button>
        ) : (
          <Label className="relative w-auto h-auto">
            <Search className="absolute left-2 top-1 text-white" />
            <Input 
              type="text"
              size={40}
              bsSize="lg"
              onBlur={handleSearchInputState}
              plaintext
              placeholder="Titles, people and genders"
              style={{ padding: "0 3rem" }}
              className="bg-black opacity-50 border border-white text-white" 
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