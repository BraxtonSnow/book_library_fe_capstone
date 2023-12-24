import NavBar from "../navigations/NavBar";

import MainImage from "../images/MainImage";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <MainImage />
      <div className="homepage-title-container">
        <h1>Home Page</h1>
        <NavBar />
      </div>
      <div className="greeting-container">
        <h2>Welcome To Our Library!</h2>
        <h3>Enjoy The Adventure.</h3>
      </div>
    </div>
  );
}
