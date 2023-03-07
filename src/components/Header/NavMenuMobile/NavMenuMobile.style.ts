import styled from 'styled-components';

export const NavMenuMobileContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const NavMenuMobile = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding-bottom: 69px;

  background-color: var(--bageDarkClr);
`;
export const NavMenuMobileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 15px 13px;

  height: 60px;
  width: 100%;
`;
export const NavMenuMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;

  border: 1px solid transparent;
  background-color: transparent;
`;
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;
