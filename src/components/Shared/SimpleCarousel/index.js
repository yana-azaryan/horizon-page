import React from 'react';
import cx from 'classnames';

import useSimpleCarousel from './useSimpleCarousel';

import styles from './SimpleCarousel.module.scss';

const SimpleCarousel = ({
  onProgress,
  onSlideChange,
  className,
  classNameSlidesContainer,
  classNameSlide,
  children,
}) => {
  const { slidesContainerRef } = useSimpleCarousel({
    onProgress,
    onSlideChange,
  });
  return (
    <div className={cx(className, styles.container)}>
      <div
        className={cx(styles.slidesContainer, classNameSlidesContainer)}
        ref={slidesContainerRef}
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className={cx(styles.slide, classNameSlide)}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;
