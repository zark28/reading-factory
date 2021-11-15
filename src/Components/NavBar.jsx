import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "About", link: "/about" },
    { item: "Projects", link: "/projects" },
    { item: "Gallery", link: "/gallery" },
    { item: "Blog", link: "/blog" },
    { item: "Our Team", link: "/team" },
    { item: "Donate", link: "/donate" },
  ];
  const [navMode, setNavMode] = useState();
  const focusPage = useRef();
  useEffect(() => {
    focusPage.current.focus();
  }, []);
  return (
    <Styles>
      <nav
        ref={focusPage}
        autoFocus
        className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0`}
      >
        <Link exact to="/" className="navbar-brand p-0">
          <h1 className="m-0 d-flex text-center items-center text-white">
            <img src="img/icon.png" alt="icon" width="150px" />
            THE READING FACTORY
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => (navMode ? setNavMode("") : setNavMode("show"))}
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navMode}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            {navItems.map((navitem, index) => (
              <NavItem
                navitem={navitem.item}
                itemlink={navitem.link}
                key={index}
              />
            ))}
          </div>
        </div>
      </nav>
    </Styles>
  );
};

export default NavBar;
const Styles = styled.nav`
  /*** Navbar ***/
  .navbar-dark .navbar-nav .nav-link {
    font-family: "Nunito", sans-serif;
    position: relative;
    margin-left: 25px;
    padding: 35px 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    transition: 0.5s ease-in-out;
  }

  .sticky-top.navbar-dark .navbar-nav .nav-link {
    padding: 20px 0;
    color: var(--dark);
  }

  .navbar-dark .navbar-nav .nav-link.active {
    color: var(--primary);
  }

  .navbar-dark .navbar-nav .nav-link:hover {
    transform: scale(1.1);
    transition: 5ms ease-in-out;
    z-index: 200;
  }

  .navbar-dark .navbar-toggler {
    color: var(--primary) !important;
    border-color: var(--primary) !important;
  }

  @media (max-width: 991.98px) {
    .sticky-top.navbar-dark {
      position: relative;
      background: #ffffff;
      transition: 0.5s ease-in-out;
    }

    .navbar-dark .navbar-nav .nav-link,
    .navbar-dark .navbar-nav .nav-link.show,
    .sticky-top.navbar-dark .navbar-nav .nav-link {
      padding: 10px 0;
      color: var(--dark);
      transition: 0.5s ease-in-out;
    }
  }

  .navbar-dark .navbar-brand h1 {
    color: var(--primary);
  }

  @media (min-width: 992px) {
    .navbar-dark {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      border-bottom: 1px solid rgba(256, 256, 256, 0.1);
      z-index: 999;
      transition: 0.5s ease-in-out;
    }

    .sticky-top.navbar-dark {
      position: fixed;
      background: #ffffff;
    }

    .navbar-dark .navbar-nav .nav-link::before {
      position: absolute;
      content: "";
      width: 0;
      height: 2px;
      bottom: -1px;
      left: 50%;
      background: var(--primary);
      transition: 0.5s ease-in-out;
    }

    .navbar-dark .navbar-nav .nav-link:hover::before,
    .navbar-dark .navbar-nav .nav-link.active::before {
      width: 100%;
      left: 0;
    }

    .navbar-dark .navbar-nav .nav-link.nav-contact::before {
      display: none;
    }

    .sticky-top.navbar-dark .navbar-brand h1 {
      color: var(--primary);
    }
  }
`;
