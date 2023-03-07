import { IHeroTitle } from '@/types/types';

import * as S from './HeroTitle.style';

const HeroTitle: React.FC<IHeroTitle> = ({ children }) => {
  return <S.HeroTitle>{children}</S.HeroTitle>;
};

export default HeroTitle;
