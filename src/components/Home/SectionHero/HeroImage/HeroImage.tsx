import Image from 'next/image';
import images from '@/img';
import DecorItems from './DecorItems/DecorItems';

import * as S from './HeroImage.style';
import SG from '@/styles';

const HeroImage: React.FC = () => {
  return (
    <SG.Container>
      <S.HeroImageContainer>
        <S.HeroImageBox>
          <Image src={images.image_phone_1_2x} alt="image phone" />
        </S.HeroImageBox>

        <DecorItems />
      </S.HeroImageContainer>
    </SG.Container>
  );
};

export default HeroImage;
