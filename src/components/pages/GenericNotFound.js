import React from "react";
import { Link } from "react-router-dom";

// posible images
import PageNotFoundImg from "../../assets/404.svg";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: "3rem",
          minHeight: "100vh",
        }}
      >
        <p>
          <Link to="/" className="my-12">
            Go to Home Page
          </Link>
        </p>
        <img
          src={PageNotFoundImg}
          alt="404 - Page not found"
          style={{ width: "50%" }}
        />
        <h2 className="text-lg-5xl text-blue-500 b">PAGE NOT FOUND</h2>
      </div>
    );
  }
}
export default NotFoundPage;
