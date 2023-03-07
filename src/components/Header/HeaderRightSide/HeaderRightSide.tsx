import SignUpLinkButton from './SignUpLinkButton/SignUpLinkButton';
import * as S from './HeaderRightSide.style';
import NavMenuMobile from '../NavMenuMobile/NavMenuMobile';

const HeaderRightSide: React.FC = () => {
  return (
    <S.SignUpBox>
      <SignUpLinkButton />

      <NavMenuMobile />
    </S.SignUpBox>
  );
};

export default HeaderRightSide;
