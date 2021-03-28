import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksAbout,
  NavBtn,
  NavBtnLink,
  Icon,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            ESIE
            <Icon>
              <span className="fas fa-shield-alt"></span>
            </Icon>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksAbout to="over-ons" smooth={true} offset={-80}>
                Over Ons
              </NavLinksAbout>
            </NavItem>
            <NavItem>
              <NavLinks to="/tools">Tools</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="meer-gevaren">Gevaren</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/download">
              Download <i className="fas fa-download DIcon" />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
