import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./Swiper.styled";

import { BiPauseCircle } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Swiper({ images }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isSlideMode, setIsSlideMode] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isSlideMode) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [isSlideMode, pageIndex, images]);

  function handlePageClick(index) {
    setPageIndex(index);
    setIsSlideMode(false);
  }

  const gotoNextPage = () => {
    setIsSlideMode(false);
    setPageIndex((prev) => (prev + 1) % images.length);
  };
  const gotoPreviousPage = () => {
    setIsSlideMode(false);
    setPageIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container $length={images.length}>
        {images.map(
          ({ name, url, title, description, position, color }, index) => {
            return (
              <Styled.ContentWrapper $translateX={-100 * pageIndex} key={name}>
                <Styled.BackgroundImage src={url} alt={name} />
                <Styled.Content $position={position}>
                  <div>
                    <Styled.Title
                      $isCurrentPage={pageIndex === index}
                      $color={color}
                    >
                      {title}
                    </Styled.Title>

                    <Styled.Description
                      $isCurrentPage={pageIndex === index}
                      $color={color}
                    >
                      {description}
                    </Styled.Description>
                  </div>
                </Styled.Content>
              </Styled.ContentWrapper>
            );
          }
        )}

        <Styled.Controller>
          {images.map((image, index) => (
            <button key={image.name} onClick={() => handlePageClick(index)}>
              <Styled.Circle $isCurrentPage={index === pageIndex} />
            </button>
          ))}

          <button onClick={() => setIsSlideMode((prev) => !prev)}>
            {isSlideMode ? (
              <BiPauseCircle size={20} />
            ) : (
              <BsPlayCircle size={20} />
            )}
          </button>
        </Styled.Controller>
        <Styled.LeftArrowButton onClick={gotoPreviousPage}>
          <AiOutlineArrowLeft size={25} />
        </Styled.LeftArrowButton>
        <Styled.RightArrowButton onClick={gotoNextPage}>
          <AiOutlineArrowRight size={25} />
        </Styled.RightArrowButton>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
