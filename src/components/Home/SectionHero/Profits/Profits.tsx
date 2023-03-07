import * as S from './Profits.style';
import SG from '@/styles';
import { IProfitItem } from '@/types/types';
import ProfitItem from './ProfitItem/ProfitItem';

type ProfitsProps = {
  profitsList: IProfitItem[];
};

const Profits: React.FC<ProfitsProps> = ({ profitsList }) => {
  return (
    <S.Profits>
      <S.ListBackground>
        <SG.Container>
          <S.List>
            {profitsList.map(item => (
              <ProfitItem key={item.id} {...item} />
            ))}
          </S.List>
        </SG.Container>
      </S.ListBackground>
    </S.Profits>
  );
};
export default Profits;
