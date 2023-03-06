import * as S from './MainImage.style';
import SG from '@/styles';
import Image from 'next/image';
import images from '@/img';
import DecorItems from './DecorItems/DecorItems';
const MainImage: React.FC = () => {
  return (
    <SG.Container>
      <S.MainImageContainer>
        <S.MainImageBox>
          <Image src={images.image_phone_1_2x} alt="image phone" />
        </S.MainImageBox>

        <DecorItems />
      </S.MainImageContainer>
    </SG.Container>
  );
};

export default MainImage;
