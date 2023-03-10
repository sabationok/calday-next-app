import { INavLink } from '@/types/types';
import Link from 'next/link';

import * as S from './NavLinkDesktop.style';

const NavLinkDesktop: React.FC<INavLink> = ({ path, name }) => {
  return (
    <li>
      <S.NavLinkDesktop href={path}>{name}</S.NavLinkDesktop>
    </li>
  );
};

export default NavLinkDesktop;
