import React from 'react';
import { useState, useRef } from 'react';
import * as Theme from './Slideshow.theme';

const delay = 7500;

const BackgroundSlideshow: React.FC<{ images: string[] }> = ({ images }) =>  {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [images, index]);


  return (
    <Theme.Slideshow>
      <Theme.Slider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((imageName, index) => (
          <Theme.IMG
            src={'/assets/images/'+imageName}
            alt={imageName}
            key={index}
          />
        ))}
      </Theme.Slider>
    </Theme.Slideshow>
  );
}

export default BackgroundSlideshow