import Profits from './Profits/Profits';
import FormCreateEvent from './FormCreateEvent/FormCreateEvent';
import HeroImage from './HeroImage/HeroImage';
import HeroTitle from './HeroTitle/HeroTitle';
import HeroSubTitle from './HeroSubTitle/HeroSubTitle';
import testData from '@/testData';

import * as S from './SectionHero.style';
import SG from '@/styles';

const SectionHero: React.FC = () => {
  const { title, subTitle, profitsList } = testData.heroSectionData;

  return (
    <>
      <S.SectionHero>
        <SG.Container>
          <S.FlexWrapper>
            <HeroTitle>{title}</HeroTitle>

            <HeroSubTitle>{subTitle}</HeroSubTitle>

            <FormCreateEvent />
          </S.FlexWrapper>
        </SG.Container>

        <HeroImage />

        <Profits profitsList={profitsList} />
      </S.SectionHero>
    </>
  );
};

export default SectionHero;
