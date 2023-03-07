import SvgIcon from '@/components/SvgIcon/SvgIcon';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import Link from 'next/link';
import s from './SignUpLinkButton.module.css';

const SignUpLinkButton = () => {
  return (
    <Link href={'#'} className={s.SignUpLinkButton}>
      <span>SIGN UP</span>
      <SvgIcons icon={IconsMap.arrowRight} size="12px" />
    </Link>
  );
};

export default SignUpLinkButton;
