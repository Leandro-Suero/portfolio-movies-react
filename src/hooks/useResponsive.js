export const useResponsive = () => {
  return {
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
};
