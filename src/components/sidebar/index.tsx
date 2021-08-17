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
} from "./sidebarElements";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: FC<Props> = ({ toggle }) => {
  return (
    <SidebarContainer onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="restaurant">Restaurant</SidebarLink>
          <SidebarLink to="rental">Rental</SidebarLink>
          <SidebarLink to="shop">Shop</SidebarLink>
          <SidebarLink to="hotel">Hotel</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/rental">Rental Application</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
