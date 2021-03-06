import { useState, useEffect } from "react";

export const useImages = (show, config, isCurrent, size, posterSize = 4) => {
  const desktop_size = "1920x1080";
  const [picture, setPicture] = useState(
    `https://via.placeholder.com/${desktop_size}?text=loading`
  );
  const [poster, setPoster] = useState(
    `https://via.placeholder.com/${size}?text=${show.name}`
  );
  const [personPic, setPersonPic] = useState(
    `https://via.placeholder.com/${size}?text=loading`
  );

  /* picture & poster URL */
  useEffect(() => {
    let picture_url =
      config.images?.secure_base_url === undefined ||
      show?.backdrop_path === null
        ? `https://via.placeholder.com/${desktop_size}?text=error`
        : `${config.images.secure_base_url}${config.images.backdrop_sizes[1]}${show.backdrop_path}`;
    let poster_url =
      config.images?.secure_base_url === undefined || show?.poster_path === null
        ? `https://via.placeholder.com/${size}?text=${show.name}`
        : `${config.images.secure_base_url}${config.images.poster_sizes[posterSize]}${show.poster_path}`;
    let person_url =
      config.images?.secure_base_url === undefined ||
      show?.profile_path === null
        ? `https://via.placeholder.com/${size}?text=${show.name}`
        : `${config.images.secure_base_url}${config.images.poster_sizes[posterSize]}${show.profile_path}`;
    if (isCurrent.current) {
      setPicture(picture_url);
      setPoster(poster_url);
      setPersonPic(person_url);
    }
  }, [config, show, isCurrent, size, posterSize]);

  return { poster, picture, personPic };
};
