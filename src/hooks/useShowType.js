export const useShowType = (show) => {
  let showType, showName;

  if (show.hasOwnProperty("media_type")) {
    showType = show.media_type;
    if (showType === "movie") {
      showName = show.title;
    } else {
      showName = show.name;
    }
  } else if (show.hasOwnProperty("title")) {
    showType = "movie";
    showName = show.title;
  } else if (show.hasOwnProperty("known_for_department")) {
    showType = "person";
    showName = show.name;
  } else {
    showType = "tv";
    showName = show.name;
  }

  return { showType, showName };
};
