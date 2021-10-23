import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 56px);
  overflow-x: hidden;
`;

const Container = styled.div`
  height: 100%;
  width: ${({ $length }) => `${$length * 100}vw`};
  display: flex;
  scroll-snap-type: x mandatory;
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100%;
  transform: ${({ $translateX }) => `translateX(${$translateX}%)`};
  transition: all 1s ease-in-out;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $position }) => $position};
  > div {
    padding: 0px 45px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  max-width: 700px;
  margin: 0;
  font-size: 88px;
  padding-bottom: 30px;
  line-height: 68px;
  font-weight: 500;
  letter-spacing: -3px;
  transition: all 1.2s ease-in-out;
  color: ${({ $color }) => `${$color}`};

  ${({ $isCurrentPage }) =>
    $isCurrentPage
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(100%);
        `}
  @media only screen and (max-width: 1600px) {
    font-size: 70px;
    line-height: 56px;
    letter-spacing: -3px;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 64px;
    line-height: 56px;
    letter-spacing: -3px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 60px;
    line-height: 48px;
    letter-spacing: -3px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 38px;
    line-height: 34px;
    letter-spacing: -1px;
    max-width: 330px;
  }
`;

const Description = styled.p`
  font-weight: 300;
  margin: 0;
  max-width: 430px;
  transition: all 1.2s ease-in-out;
  transition-delay: 0.4s;
  color: ${({ $color }) => `${$color}`};

  ${({ $isCurrentPage }) =>
    $isCurrentPage
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(150%);
        `};

  @media screen and (max-width: 767px) {
    font-size: 14px;
    max-width: 330px;
  }
`;

const Controller = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  bottom: 50px;
  right: 50px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
  }
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid white;

  background-color: ${({ $isCurrentPage }) => $isCurrentPage && "white"};
`;

const LeftArrowButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  color: #d1d1d1;

  outline: none;
  border: none;
  line-height: 50%;
`;

const RightArrowButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: #d1d1d1;

  outline: none;
  line-height: 50%;
  border: none;

  cursor: pointer;
`;

export {
  Wrapper,
  Container,
  ContentWrapper,
  Content,
  BackgroundImage,
  Title,
  Description,
  Controller,
  Circle,
  LeftArrowButton,
  RightArrowButton,
};
