import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Header, Menu, Item } from "./Sidebar.style";
const linkStyles = ({ isActive }) => {
  return {
    background: isActive ? "#E7EAEB" : "",
    color: isActive ? "black" : "",
    fontWeight: isActive ? "bold" : "normal",

    boxShadow: isActive ? "0px 1px 8px 0px rgba(0, 0, 0, 0.1)" : "none",
  };
};
function Sidebar() {
  return (
    <Container>
      <Header>Coding Test</Header>
      <Menu>
        <Item>
          <NavLink to="/" style={linkStyles}>
            Invoice
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/other" style={linkStyles}>
            Other
          </NavLink>
        </Item>
      </Menu>
    </Container>
  );
}

export default Sidebar;
