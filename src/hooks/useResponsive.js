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
      breakpoint: { max: 900, min: 770 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 5,
    },
    mobilelg: {
      breakpoint: { max: 770, min: 520 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 520, min: 430 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 5,
    },
    mobilesm: {
      breakpoint: { max: 430, min: 360 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 140,
    },
    mobilexsm: {
      breakpoint: { max: 360, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };
};
