import { Link } from "react-router-dom";

export default function AuthorsMapper(props) {
  console.log(props);
  function handleClick(product, genre) {
    console.log("product: ", product);
    props.setGenreID(genre.genre_id);
  }
  return props.dataInfo?.map((genre) => {
    console.log("author: ", genre.genre_id);
    return (
      <div key={genre.genre_id} className="genres-mapper-container">
        <Link
          to={`/genres/${genre.genre_id}`}
          key={genre.genre_id}
          className="genres-map-button-container"
          onClick={() => {
            handleClick(props.dataInfo, genre);
          }}
        >
          <div className="genres-card-container">
            <div className="genres-title">{genre.genre_name}</div>
          </div>
        </Link>
      </div>
    );
  });
}
