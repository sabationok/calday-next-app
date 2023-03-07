import { navLinks } from '@/testData/testData.data';
import NavLinkDesktop from './NavLinkDesktop/NavLinkDesktop';
import * as S from './NavMenuDesktop.styles';

const NavMenuDesktop: React.FC = () => {
  return (
    <S.NavMenu>
      <S.NavMenuList>
        {navLinks.map(link => (
          <NavLinkDesktop key={link.name} {...link} />
        ))}
      </S.NavMenuList>
    </S.NavMenu>
  );
};

export default NavMenuDesktop;
