import Profits from './Profits/Profits';
import MainTitle from './MainTitle/MainTitle';
import MainSubTitle from './MainSubTitle/MainSubTitle';
import FormCreateEvent from './FormCreateEvent/FormCreateEvent';
import testData from '@/testData';

import * as S from './SectionHero.style';
import SG from '@/styles';
import MainImage from './MainImage/MainImage';

const SectionHero: React.FC = () => {
  return (
    <>
      <S.SectionHero>
        <SG.Container>
          <S.FlexWrapper>
            <MainTitle title={testData.heroData.title} />

            <MainSubTitle subTitle={testData.heroData.subTitle} />

            <FormCreateEvent />
          </S.FlexWrapper>
        </SG.Container>

        <MainImage />

        <Profits profitsList={testData.advantagesList} />
      </S.SectionHero>
    </>
  );
};

export default SectionHero;
