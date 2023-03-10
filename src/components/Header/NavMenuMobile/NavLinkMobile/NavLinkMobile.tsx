import { INavLink } from '@/types/types';

import * as S from './NavLinkMobile.style';

const NavLinkMobile: React.FC<INavLink> = ({ path, name }) => {
  return (
    <li>
      <S.NavLinkMobile href={path}>{name}</S.NavLinkMobile>
    </li>
  );
};

export default NavLinkMobile;
