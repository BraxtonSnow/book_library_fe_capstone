import { Link } from "react-router-dom";

export default function AuthorsMapper(props) {
  console.log(props);
  function handleClick(product, author_id) {
    console.log("product: ", product);
    props.setAuthorID(author_id);
  }
  return props.dataInfo?.map((author) => {
    console.log("author: ", author.author_id);
    return (
      <div key={author.author_id} className="authors-mapper-container">
        <Link
          to={`/authors/${author.author_id}`}
          key={author.author_id}
          className="authors-map-button-container"
          onClick={() => {
            handleClick(props.dataInfo, author.author_id);
          }}
        >
          <div className="authors-card-container">
            <div className="authors-title">{author.author_name}</div>
            {/* <div className="authors-description">{author.description}</div> */}
          </div>
        </Link>
      </div>
    );
  });
}
