import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="notfound">
        <div className="content">
          <h1>404 Not Found</h1>
          <p>
            <span>Oops! Page Not Found.</span> It looks like the page you are
            looking for doesnot exist. Do not worry, you can find your way back
            by heading to the homepage or using the search below to find what
            you are looking for.
          </p>
          <Link to={"/"} className="btn">
            Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
