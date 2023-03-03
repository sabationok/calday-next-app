import Logo from './Logo/Logo';
import NavMenuDesktop from './NavMenuDesktop/NavMenuDesktop';
import SignUpButton from './SignUpLinkButton/SignUpLinkButton';

import SG from '@/styles';
import * as S from './Header.style';

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <SG.Container>
          <S.HeaderGrid>
            <Logo />

            <NavMenuDesktop />

            <SignUpButton />
          </S.HeaderGrid>
        </SG.Container>
      </S.Header>
    </>
  );
};

export default Header;
