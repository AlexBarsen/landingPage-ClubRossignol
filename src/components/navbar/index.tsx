import React, { FC } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
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
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/ ">Club Rossignol</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-85}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="restaurant"
                smooth={true}
                duration={500}
                spy={true}
                offset={-85}
              >
                Restaurant
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="rental"
                smooth={true}
                duration={500}
                spy={true}
                offset={-85}
              >
                Rental
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="shop"
                smooth={true}
                duration={500}
                spy={true}
                offset={-75}
              >
                Shop
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hotel"
                smooth={true}
                duration={500}
                spy={true}
                offset={-85}
              >
                Hotel
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-85}
              >
                Contact
              </NavLinks>
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
