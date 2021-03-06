import React from 'react';
import bulbIcon from 'assets/bulb.svg';
import penIcon from 'assets/pen.svg';
import logoutIcon from 'assets/logout.svg';
import twitterIcon from 'assets/twitter.svg';
import logoIcon from 'assets/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme, activeColorType }) =>
    activeColorType ? theme[activeColorType] : theme.notes};
`;

const StyledLogoButton = styled(NavLink)`
  display: block;
  height: 67px;
  width: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  margin-bottom: 15vh;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => {
  return (
    <StyledWrapper activeColorType={pageType}>
      <StyledLogoButton to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeClassName="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClassName="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClassName="active" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
