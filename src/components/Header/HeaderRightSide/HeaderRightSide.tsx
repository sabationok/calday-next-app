import SignUpLinkButton from './SignUpLinkButton/SignUpLinkButton';
import * as S from './HeaderRightSide.style';

const HeaderRightSide: React.FC = () => {
  return (
    <S.SignUpBox>
      <SignUpLinkButton />

      {/* <Button variant="outlinedSmall">
        <span>SIGN UP</span>
      </Button> */}
    </S.SignUpBox>
  );
};

export default HeaderRightSide;
