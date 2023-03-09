import * as S from './ByNowZone.style';
import { useState } from 'react';
import testData from '@/testData';
import PriceCard from './PriceCard/PriceCard';

const ByNowZone: React.FC = () => {
  const [current, setCurrentPricePeriod] = useState(0);
  const { pricingPeriods } = testData.buyNowSectionData;

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
        {pricingPeriods[current].priceCards.map(card => (
          <PriceCard
            key={card.title}
            {...card}
            period={pricingPeriods[current].title.toLowerCase()}
          />
        ))}
      </S.CardsList>
    </S.ByNowZone>
  );
};

export default ByNowZone;
