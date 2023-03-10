import styled from 'styled-components';
import Link from 'next/link';

export const NavLinkDesktop = styled(Link)`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;

  transition: all var(--timing-function__main);

  &:hover {
    color: var(--actionOrangeClr);
  }
  &:active {
    color: var(--brownLightClr);
  }
`;
