import Image from 'next/image';
import EventItems from './EventItems/EventItems';
import testData from '@/testData';

import * as S from './HeroImage.style';
import SG from '@/styles';

const HeroImage: React.FC = () => {
  const { image, alt } = testData.heroSectionData.heroImage;

  return (
    <SG.Container>
      <S.HeroImageContainer>
        <S.HeroImageBox>
          <Image src={image} alt={alt} />
        </S.HeroImageBox>

        <EventItems />
      </S.HeroImageContainer>
    </SG.Container>
  );
};

export default HeroImage;
