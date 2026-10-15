import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar({ introEntrance = false }: { introEntrance?: boolean }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [introPlaying, setIntroPlaying] = useState(introEntrance);

  useEffect(() => {
    setOpenDropdown(null);
    setExpanded(false);
    let frame = 0;

    const updateNavbar = () => {
      frame = 0;
      const atTop = window.scrollY < 10;
      setNavbarVisible(atTop);

      if (!atTop) {
        setOpenDropdown(null);
        setExpanded(false);
        setIntroPlaying(false);
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavbar);
    };

    updateNavbar();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  const handleToggle = (nextExpanded: boolean) => {
    setExpanded(nextExpanded);
    if (!nextExpanded) setOpenDropdown(null);
  };

  const navbarHidden = !navbarVisible;

  const pages = Pages.filter(
    (item) => !("path" in item && item.path === "/"),
  ).map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const dropdownId = `page-${pageIndex}`;
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              active={location.pathname === subpage.path}
              onClick={() => {
                setOpenDropdown(null);
                setExpanded(false);
              }}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          active={item.folder.some(
            (subpage) => subpage.path === location.pathname,
          )}
          id={dropdownId}
          show={openDropdown === dropdownId}
          onToggle={(nextShow) => setOpenDropdown(nextShow ? dropdownId : null)}
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          active={location.pathname === item.path}
          onClick={() => setExpanded(false)}
        >
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar
      expand="lg"
      expanded={expanded}
      onToggle={handleToggle}
      aria-label="Main navigation"
      aria-hidden={navbarHidden}
      inert={navbarHidden}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setIntroPlaying(false);
      }}
      className={`nest-navbar${introPlaying ? " nest-navbar-intro-enter" : ""}${navbarHidden ? " nest-navbar-hidden" : ""}`}
      fixed="top"
    >
      <Container fluid>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="brand-link"
          onClick={() => setExpanded(false)}
          aria-label="ZJU-China home"
        >
          <img
            className="brand-team-logo"
            src="https://static.igem.wiki/teams/6102/wiki/images/team-logo.avif"
            alt=""
            width="98"
            height="41"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            {pages}
            <span
              className="navigation-cart"
              title="Shopping cart — not available yet"
            >
              <img
                src={`https://static.igem.wiki/teams/6102/wiki/images/navigation/cart.svg`}
                alt="Shopping cart (not available yet)"
                width="22"
                height="22"
              />
            </span>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
