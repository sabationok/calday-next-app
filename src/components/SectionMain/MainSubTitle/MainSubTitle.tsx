import * as S from './MainSubTitle.style';

type MainSubTitleProps = {
  subTitle?: string;
};

const MainSubTitle: React.FC<MainSubTitleProps> = ({ subTitle }) => {
  return <S.MainSubTitle>{subTitle}</S.MainSubTitle>;
};

export default MainSubTitle;
