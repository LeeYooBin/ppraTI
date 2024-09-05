import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody } from "reactstrap";
import { CalendarDays, Film, X } from 'lucide-react';

const imgPath = import.meta.env.VITE_IMG_PATH;

export const Poster = ({ data }) => {
  const [modal, setModal] = useState(false);
  
  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>  
      <Button 
        color="link"
        onClick={toggle}
        className="w-auto h-auto flex items-center justify-center"
      >
        <img 
          src={imgPath + data.poster_path} 
          alt={`${data.title} poster`}
          className="w-[22.5rem]"
        />
      </Button>
      <Modal 
        isOpen={modal} 
        toggle={toggle}
      >
        <ModalBody className="w-auto h-auto p-0 flex items-center justify-center">
          <div 
            className="flex flex-col items-center gap-6 w-[100%] px-10 py-20 md:px-20 relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imgPath + data.poster_path})`
            }}
          >
            <h2 className="text-white text-5xl text-center items-center">{data.title}</h2>
            <div className="flex flex-col items-center gap-6">
              <img className="w-[22.5rem]" src={imgPath + data.poster_path} alt={`${data.title} Poster`} />
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-2xl text-justify">{data.overview}</p>
                <div className="flex flex-col items-start w-[100%] md:flex-row md:justify-between">
                  <p className="text-white text-lg md:text-2xl flex items-center gap-3">
                    <CalendarDays className="w-[2rem]" /> Release date: {data.release_date} 
                  </p>
                  <p className="text-white text-lg md:text-2xl flex items-center gap-3">
                    <Film className="w-[2rem]" /> Genre: Genre not found 
                  </p>
                </div>
                <Button 
                  size="lg"
                  onClick={toggle} 
                  className="bg-white border-none text-black shadow-lg self-start"
                >
                  Go Back
                </Button>
              </div>
            </div>
            <Button 
              onClick={toggle} 
              color="link" 
              className="absolute top-3 right-1 flex items-center justify-center w-auto h-auto"
            >
              <X className="text-white w-10" />
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

Poster.propTypes = {
  data: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired
};
