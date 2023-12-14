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
      <div key={author.author_id}>
        <Link
          to={`/authors/${author.author_id}`}
          key={author.author_id}
          className="product-card-button-container"
          onClick={() => {
            handleClick(props.dataInfo, author.author_id);
          }}
        >
          <div className="product-card-container">
            <div className="card-title">{author.author_name}</div>
            <div className="card-description">{author.description}</div>
          </div>
        </Link>
        {/* <button
        // key={product.id}
        // onClick={() => props.function(product)}
        >
          {props.buttonName}
        </button> */}
      </div>
    );
  });
}
