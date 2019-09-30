import React from "react";
import styled from "styled-components";
import { colors, poppins } from "./styleHelper";
import { Link } from "react-router-dom";

const Base = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  width: 100%;
  max-width: 630px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  color: white;
  ${poppins}
`;

const Title = styled(Link)`
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavItem = styled(Link)`
  color: white;
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Header = () => {
  return (
    <Base>
      <Title to="/">Portfolio</Title>
      <Nav>
        <NavItem to="/">About</NavItem>
        <NavItem to="/">Works</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Nav>
    </Base>
  );
};

export default Header;
