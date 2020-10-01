import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

export const useShowData = (currentShow, getCurrentShow, type, isCurrent) => {
  const fixedShow = useRef();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    fixedShow.current = currentShow;
  });
  useEffect(() => {
    const fetchData = async () => {
      if (
        (Object.keys(fixedShow.current).length === 0 &&
          fixedShow.current.constructor === Object) ||
        fixedShow.current.id !== id
      ) {
        const showFetched = await getCurrentShow(id, type);
        if (!showFetched) {
          history.push("/404");
        }
        if (isCurrent.current) {
          setLoading(false);
        }
      }
    };
    //ask for serie/movie/person details
    fetchData();
  }, [loading, id, getCurrentShow, type, isCurrent, history]);

  return loading;
};
