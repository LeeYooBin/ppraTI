import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { searchByCategory, searchByTrending } from "../services/api-client";
import { Poster } from "./poster";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = ({ 
  title, 
  category, 
  isMovie = false, 
  isTrending = false 
}) => {
  const [data, setData] = useState([]);

  const handleSuccess = (data) => {
    setData(data);
  };

  const handleError = (e) => {
    console.error(`Error searching movie: ${e}`);
  };

  useEffect(() => {
    if (isTrending) {
      searchByTrending(
        category, 
        handleSuccess, 
        handleError
      );
    } else {
      searchByCategory(
        isMovie,
        category,
        handleSuccess, 
        handleError
      );
    }
  }, [category, isMovie, isTrending]);

  return (
    <section className="px-20">
      <h2 className="text-white text-5xl font-bold my-16 text-center">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          641: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 6,
          }
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className="flex items-center justify-center">
            <Poster data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  isMovie: PropTypes.bool,
  isTrending: PropTypes.bool,
  category: PropTypes.string
};