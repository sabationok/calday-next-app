import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 44px;
`;
