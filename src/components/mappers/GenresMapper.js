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
      <div key={genre.genre_id}>
        <Link
          to={`/genres/${genre.genre_id}`}
          key={genre.genre_id}
          className="product-card-button-container"
          onClick={() => {
            handleClick(props.dataInfo, genre);
          }}
        >
          <div className="product-card-container">
            <div className="card-title">{genre.genre_name}</div>
            <div className="card-description">{genre.description}</div>
          </div>
        </Link>
      </div>
    );
  });
}
