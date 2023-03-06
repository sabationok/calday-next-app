import * as S from './Profits.style';
import SG from '@/styles';
import Image from 'next/image';

type ProfitsProps = {
  profitsList: {
    iconId: string;
    title: string;
    descr: string;
  }[];
};

const Profits: React.FC<ProfitsProps> = ({ profitsList }) => {
  return (
    <S.Profits>
      <S.ListBackground>
        <SG.Container>
          <S.List>
            {profitsList.map(item => (
              <S.ListItem key={item?.title}>
                <S.ListItemImg>{/* <Image src={''} alt="" /> */}</S.ListItemImg>

                <S.ListItemTitle>{item?.title}</S.ListItemTitle>

                <S.ListItemDescr>{item?.descr}</S.ListItemDescr>
              </S.ListItem>
            ))}
          </S.List>
        </SG.Container>
      </S.ListBackground>
    </S.Profits>
  );
};
export default Profits;
