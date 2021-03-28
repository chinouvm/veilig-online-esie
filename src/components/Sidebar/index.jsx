import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  DIcon,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="over-ons" onClick={toggle}>
            Over Ons
          </SidebarLink>
          <SidebarLink to="/tools" onClick={toggle}>
            Tools
          </SidebarLink>
          <SidebarLink to="/meer-gevaren" onClick={toggle}>
            Gevaren
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/download">
            Download
            <DIcon>
              <i className="fas fa-download" />
            </DIcon>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
