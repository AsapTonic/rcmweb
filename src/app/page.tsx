import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #f0f0f0;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #555;
  &:hover {
    color: #333;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavBrand href="/">My Website</NavBrand>
        <NavLinks>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
