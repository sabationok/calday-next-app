import * as S from "./SignUpButton.style";

const SignUpButton: React.FC = () => {
  return (
    <S.SignUpBox>
      <S.SignUpButton href="/">
        <span>SIGN UP</span>
      </S.SignUpButton>
    </S.SignUpBox>
  );
};

export default SignUpButton;
