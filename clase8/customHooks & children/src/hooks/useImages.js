import { useState, useEffect } from "react";
import getImages from "../services/getImages";

function useImages(qty) {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages(qty).then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, []);

  //return { images: images, loading: loading };
  return [images, loading];
}

export default useImages;
