import styled from "styled-components";
import { Link } from "react-scroll";

interface Props {
  primary: boolean;
  paddingBig: boolean;
  dark: boolean;
  fontBig: boolean;
}

export const Button = styled(Link)<Props>`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "rgb(77, 168, 218)" : "rgb(244, 217, 73)"};
  white-space: nowrap;
  padding: ${({ paddingBig }) =>
    paddingBig ? "1.4rem 4.8rem" : "1.2rem 3rem"};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }
`;
