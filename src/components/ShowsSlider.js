import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
//carousel library
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShowCardSlider from "./ShowCardSlider";
import { useResponsive } from "../hooks/useResponsive";

const ShowsSlider = ({ showType, title, shows }) => {
  //responsive breakpoints and configuration for the carousel
  const responsive = useResponsive();
  const configImg = useSelector((state) => state.shows.config);

  return (
    <React.Fragment>
      <h1 className="text-2xl my-3 text-white">{title}</h1>
      <div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          arrows={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          // autoPlay
          // autoPlaySpeed={5000}
          partialVisible
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass=""
          itemClass=""
        >
          {shows.map((show) => (
            <ShowCardSlider
              key={show.id}
              show={show}
              configImg={configImg}
              showType={showType}
            />
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

ShowsSlider.propTypes = {
  showType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shows: PropTypes.array.isRequired,
};

export default ShowsSlider;
