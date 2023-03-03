import Button from '@/components/Button/Button';
import Link from 'next/link';
import * as S from './SignUpLinkButton.style';
import s from './SignUpLinkButton.module.css';

const SignUpButton: React.FC = () => {
  return (
    <S.SignUpBox>
      <Link href={'#'} className={s.SignUpLinkButton}>
        <span>SIGN UP</span>
        {/* <S.SignUpLinkButton type="button">
          
        </S.SignUpLinkButton> */}
      </Link>

      <Button variant="outlinedSmall">
        <span>SIGN UP</span>
      </Button>
    </S.SignUpBox>
  );
};

export default SignUpButton;
