import images from '@/img';
import Image from 'next/image';
import * as S from './Logo.styles';

const Logo: React.FC = () => {
  return (
    <S.LogoBox>
      <Image src={images.CaldayLogo} alt={'logo'} />
    </S.LogoBox>
  );
};

export default Logo;
