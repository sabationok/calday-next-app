import SvgIcon from '@/components/SvgIcon/SvgIcon';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';

import * as S from './SignUpLinkButton.style';

const SignUpLinkButton = () => {
  return (
    <S.SignUpLinkButton href={'#'}>
      <span>SIGN UP</span>

      <SvgIcons icon={IconsMap.arrowRight} size="12px" />
    </S.SignUpLinkButton>
  );
};

export default SignUpLinkButton;
