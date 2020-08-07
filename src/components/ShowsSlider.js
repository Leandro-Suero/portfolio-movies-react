import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//carousel library
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShowCardSlider from "./ShowCardSlider";

const ShowsSlider = ({ showType, title, shows, configImg }) => {
  const responsive = {
    desktoplg: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
      slidesToSlide: 6,
      partialVisibilityGutter: 15,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1248 },
      items: 5,
      slidesToSlide: 5,
      partialVisibilityGutter: 15,
    },
    tabletlg: {
      breakpoint: { max: 1248, min: 900 },
      items: 4,
      slidesToSlide: 4,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 900, min: 760 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 5,
    },
    mobilelg: {
      breakpoint: { max: 760, min: 500 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 60,
    },
  };

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
  configImg: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  configImg: state.shows.config,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsSlider);
