import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar({ introEntrance = false }: { introEntrance?: boolean }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame = 0;

    const updateNavbar = () => {
      frame = 0;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setOpenDropdown(null);
        if (!expanded) setNavbarVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavbar);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [expanded]);

  useEffect(() => {
    setOpenDropdown(null);
    setNavbarVisible(true);
  }, [location.pathname]);

  const revealNavbar = () => {
    setNavbarVisible(true);
  };

  const handleToggle = (nextExpanded: boolean) => {
    setExpanded(nextExpanded);
    if (!nextExpanded) setOpenDropdown(null);
    if (nextExpanded) setNavbarVisible(true);
  };

  const navbarHidden = !navbarVisible && !expanded;

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
    <>
      <div
        className={`navbar-reveal-zone${navbarHidden ? " navbar-reveal-zone-active" : ""}`}
        aria-hidden="true"
        onPointerEnter={revealNavbar}
      />
      <BootstrapNavbar
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
        onPointerEnter={revealNavbar}
        aria-label="Main navigation"
        className={`nest-navbar${introEntrance ? " nest-navbar-intro-enter" : ""}${navbarHidden ? " nest-navbar-hidden" : ""}`}
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
              src="https://static.igem.wiki/teams/6102/wiki/images/team-logo.png"
              alt=""
              width="98"
              height="41"
            />
            <span className="brand-team-name">ZJU-China</span>
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
    </>
  );
}
