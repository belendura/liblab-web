import React from "react";

import CollectionSidebar from "./collection-sidebar/collection-sidebar.component";

import {
  Container,
  SidebarMenu,
  Title,
  SidebarContainer,
} from "./collection-sidebar-menu.styles";

const CollectionSideBarMenu = () => {
  return (
    <div>
      <Container>
        <SidebarMenu />
        <Title>Clothing</Title>
        <SidebarContainer>
          <CollectionSidebar />
        </SidebarContainer>
      </Container>
    </div>
  );
};

export default CollectionSideBarMenu;
