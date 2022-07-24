import React from "react";
import { Container, Body } from "./Layout.sytle";
import Sidebar from "../sidebar/Sidebar";
function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <Body>{children}</Body>
    </Container>
  );
}

export default Layout;
