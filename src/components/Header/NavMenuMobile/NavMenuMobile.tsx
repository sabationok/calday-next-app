import Button from '@/components/Button/Button';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import { navLinks } from '@/testData/testData.data';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import NavLinkMobile from './NavLinkMobile/NavLinkMobile';
import * as S from './NavMenuMobile.style';

const NavMenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(prev => !prev);
    document.querySelector('body')?.classList.toggle('notScrolled');
  };

  return (
    <S.NavMenuMobileContainer>
      <S.NavMenuMobileButton onClick={handleMenuOpen}>
        <SvgIcons icon={IconsMap.menuBurger} size="21px" />
      </S.NavMenuMobileButton>

      <S.NavMenuMobile {...{ isOpen }}>
        <S.NavMenuMobileHeader>
          <Logo />

          <S.NavMenuMobileButton onClick={handleMenuOpen}>
            <SvgIcons icon={IconsMap.close} size="21px" />
          </S.NavMenuMobileButton>
        </S.NavMenuMobileHeader>

        <S.MenuList>
          {navLinks.map(link => (
            <NavLinkMobile key={link.name} {...link} />
          ))}
        </S.MenuList>

        <Button type="button" variant="filled">
          <span>Sign Up/ Login</span>
          <SvgIcons icon={IconsMap.arrowRight} size="15px" />
        </Button>
      </S.NavMenuMobile>
    </S.NavMenuMobileContainer>
  );
};
export default NavMenuMobile;
