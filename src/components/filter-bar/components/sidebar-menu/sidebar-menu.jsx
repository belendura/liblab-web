import React from "react";

import Sidebar from "./components/sidebar";

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
