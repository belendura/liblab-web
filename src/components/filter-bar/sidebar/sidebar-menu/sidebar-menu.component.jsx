import React from "react";

import Sidebar from "../sidebar.component";

import {
  Container,
  SidebarMenu,
  Title,
  SidebarContainer,
} from "./sidebar-menu.styles";

const SideBarMenu = () => {
  return (
    <div>
      <Container>
        <SidebarMenu />
        <Title>Clothing</Title>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </Container>
    </div>
  );
};

export default SideBarMenu;
