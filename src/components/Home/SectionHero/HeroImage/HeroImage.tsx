import Image from 'next/image';
import EventItems from './EventItems/EventItems';
import testData from '@/testData';

import * as S from './HeroImage.style';

const HeroImage: React.FC = () => {
  const { image, alt } = testData.heroSectionData.heroImage;

  return (
    <S.HeroImageContainer>
      <S.HeroImageBox>
        <Image src={image} alt={alt} />
      </S.HeroImageBox>

      <EventItems />
    </S.HeroImageContainer>
  );
};

export default HeroImage;
