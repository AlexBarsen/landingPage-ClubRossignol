import React, { FC } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: FC<Props> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="restaurant" onClick={toggle}>
            Restaurant
          </SidebarLink>
          <SidebarLink to="rental" onClick={toggle}>
            Rental
          </SidebarLink>
          <SidebarLink to="shop" onClick={toggle}>
            Shop
          </SidebarLink>
          <SidebarLink to="hotel" onClick={toggle}>
            Hotel
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/rental">Rental Application</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
