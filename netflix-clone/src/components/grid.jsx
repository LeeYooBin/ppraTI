import PropTypes from "prop-types";
import { Poster } from "./poster";

export const Grid = ({ data }) => (
  <section className="px-20 flex items-center justify-center flex-wrap gap-4">
    {data.length > 0 && data.map(item => (
      <Poster key={item.id} data={item} />
    ))}
  </section>
);

Grid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool,
      backdrop_path: PropTypes.string,
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
  ),
};