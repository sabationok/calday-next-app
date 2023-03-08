import testData from '@/testData';
import ByNowZone from './ByNowZone/ByNowZone';

import * as S from './SectionBuyNow.style';

const SectionBuyNow: React.FC = () => {
  return (
    <S.SectionBuyNow>
      <S.SectionTopBackground />

      <S.SectionBuyNowContainer>
        <S.Title>{testData.buyNowSectionData.title}</S.Title>

        <S.SubTitle>{testData.buyNowSectionData.subTitle}</S.SubTitle>

        <ByNowZone />

        <S.Description>{testData.buyNowSectionData.descr}</S.Description>
      </S.SectionBuyNowContainer>
    </S.SectionBuyNow>
  );
};
export default SectionBuyNow;
