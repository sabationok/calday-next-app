import Advantages from './Advantages/Advantages';
import MainTitle from './MainTitle/MainTitle';
import MainSubTitle from './MainSubTitle/MainSubTitle';
import FormCreateEvent from './FormCreateEvent/FormCreateEvent';
import { testData } from '@/testData';

import * as S from './SectionMain.style';
import SG from '@/styles';

const SectionMain: React.FC = () => {
  return (
    <>
      <S.SectionMain>
        <SG.Container>
          <S.FlexWrapper>
            <MainTitle title={testData.heroData.title} />

            <MainSubTitle subTitle={testData.heroData.subTitle} />

            <FormCreateEvent />
          </S.FlexWrapper>
        </SG.Container>

        <Advantages advantagesList={testData.advantagesList} />
      </S.SectionMain>
    </>
  );
};

export default SectionMain;
