import React, { FC } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

interface Props {
  toggle: () => void;
}

export const Navbar: FC<Props> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Club Rossignol</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="restaurant">Restaurant</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="rental">Rental</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop">Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hotel">Hotel</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/rental">Rental Application</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
