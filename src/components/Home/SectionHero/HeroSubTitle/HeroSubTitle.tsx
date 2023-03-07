import { IHeroSubTitle } from '@/types/types';
import * as S from './HeroSubTitle.style';

const HeroSubTitle: React.FC<IHeroSubTitle> = ({ children }) => {
  return <S.HeroSubTitle>{children}</S.HeroSubTitle>;
};

export default HeroSubTitle;
