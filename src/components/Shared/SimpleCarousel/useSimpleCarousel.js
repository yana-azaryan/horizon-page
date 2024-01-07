/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useRef, useState } from 'react';

import throttle from 'lodash.throttle';

const getSlideWidth = (slidesContainer) => {
  const firstSlideDimensions =
    slidesContainer.children?.[0]?.getBoundingClientRect();
  if (!firstSlideDimensions) return null;

  const secondSlideDimensions =
    slidesContainer.children?.[1]?.getBoundingClientRect();
  // only one slide - no gap
  if (!secondSlideDimensions) return firstSlideDimensions.width;

  // to include the gap - instead of width, just get the distance between two slides
  return secondSlideDimensions.x - firstSlideDimensions.x;
};

const getActiveSlide = (slidesContainer) => {
  const slideWidth = getSlideWidth(slidesContainer);
  if (!slideWidth) return null;

  // active slide while scrolling is rounded from the middle of the slide
  return Math.round(slidesContainer.scrollLeft / slideWidth);
};

const getProgress = (slidesContainer) => {
  const slidesContainerDimensions = slidesContainer.getBoundingClientRect();
  if (slidesContainer.scrollWidth <= slidesContainerDimensions.width) return 1;

  return (
    slidesContainer.scrollLeft /
    (slidesContainer.scrollWidth - slidesContainerDimensions.width)
  );
};

const useSimpleCarousel = ({ onSlideChange, onProgress }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  // As scroll progress gets updated very often, we use a ref to avoid re-renders
  const scrollProgress = useRef(0);
  const slidesContainerRef = useRef(null);

  useEffect(
    () => onSlideChange && onSlideChange(activeSlide),
    [onSlideChange, activeSlide],
  );

  useEffect(() => {
    if (!slidesContainerRef?.current) return undefined;
    const slidesContainer = slidesContainerRef.current;

    const setProgress = () => {
      const progress = getProgress(slidesContainer);

      if (onProgress) onProgress(progress);
      scrollProgress.current = progress;

      // The state setters below will only trigger a re-render if the actual active slide has changed, or if the first
      // or last position has been reached
      setIsFirst(progress === 0);
      setIsLast(progress === 1);

      const newActiveSlide = getActiveSlide(slidesContainer);
      if (newActiveSlide !== null) setActiveSlide(newActiveSlide);
    };

    const scrollCallback = throttle(() => setProgress(), 50);

    const scrollEndCallback = () => setProgress();

    slidesContainer.addEventListener('scroll', scrollCallback);
    slidesContainer.addEventListener('scrollend', scrollEndCallback);
    return () => {
      slidesContainer.removeEventListener('scroll', scrollCallback);
      slidesContainer.removeEventListener('scrollend', scrollEndCallback);
    };
  }, [slidesContainerRef, setActiveSlide, onProgress, scrollProgress]);

  return {
    isFirst,
    isLast,
    slidesContainerRef,
  };
};

export default useSimpleCarousel;
