import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavItem = ({ navitem, itemlink }) => {
  return (
    <Styles>
      <NavLink
        exact
        to={itemlink}
        className="nav-item nav-link"
        activeClassName="active"
      >
        {navitem}
      </NavLink>
    </Styles>
  );
};

export default NavItem;
const Styles = styled.div``;
