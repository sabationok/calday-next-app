import * as S from './MainTitle.style';

type MainTitleProps = {
  title?: string;
};

const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
  return <S.MainTitle>{title}</S.MainTitle>;
};

export default MainTitle;
