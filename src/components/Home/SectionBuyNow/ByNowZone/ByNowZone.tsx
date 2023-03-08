import * as S from './ByNowZone.style';
import { useState } from 'react';
import testData from '@/testData';

const ByNowZone: React.FC = () => {
  const [current, setCurrentPricePeriod] = useState(0);

  const onPeriodBtnClick = (idx: number) => {
    setCurrentPricePeriod(idx);
  };

  return (
    <S.ByNowZone>
      <S.PeriodButtons>
        {testData.buyNowSectionData.pricingPeriods.map((per, idx) => (
          <S.PeriodButton
            key={per.id}
            type="button"
            isActive={current === idx}
            onClick={() => {
              onPeriodBtnClick(idx);
            }}
          >
            {per.title}
          </S.PeriodButton>
        ))}
      </S.PeriodButtons>

      <S.CardsList>
        <S.BuyCard>
          <S.BuyCardInner>
            <S.CardTitle>free</S.CardTitle>
            <S.CardSubTitle>for small businesses</S.CardSubTitle>
          </S.BuyCardInner>
        </S.BuyCard>

        <S.BuyCard isPremium>
          <S.BuyCardInner>
            <S.CardTitlePremium>premium</S.CardTitlePremium>
            <S.CardSubTitle>for growing businesses</S.CardSubTitle>
          </S.BuyCardInner>
        </S.BuyCard>
      </S.CardsList>
    </S.ByNowZone>
  );
};

export default ByNowZone;
