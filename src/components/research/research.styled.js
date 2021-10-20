import styled from "styled-components";
import img from "./img/img.svg";

export const Header = styled.header`
  display: flex;

  align-items: center;
  background-image: url("${img}");
  background-size: cover;
  height: calc(100vh - 80px);
`;
