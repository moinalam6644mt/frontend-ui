import { useEffect, useContext } from 'react';
import AuthContext from '../components/Context/AuthContext';

const useGalleryImages = (property) => {
  const { totalImage, setTotalImage } = useContext(AuthContext);

  useEffect(() => {
    const getAllImages = () => {
      let arr = [];
      property?.data?.gallery.forEach(image => {
        arr = arr.concat(image.images);
      });
      setTotalImage(arr);
    };

    if (property) {
      getAllImages();
    }
  }, [property, setTotalImage]);

  return totalImage;
};

export default useGalleryImages;