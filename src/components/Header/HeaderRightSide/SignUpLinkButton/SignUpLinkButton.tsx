import SvgIcon from '@/components/SvgIcon/SvgIcon';
import Link from 'next/link';
import s from './SignUpLinkButton.module.css';

const SignUpLinkButton = () => {
  return (
    <Link href={'#'} className={s.SignUpLinkButton}>
      <span>SIGN UP</span>
      <SvgIcon iconId="arrowLeft" />
    </Link>
  );
};

export default SignUpLinkButton;
