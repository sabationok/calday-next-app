import Image from 'next/image';
import images from '@/img';
import * as S from './Advantages.style';
import SG from '@/styles';

type AdvantagesProps = {
  advantagesList: {
    iconId: string;
    title: string;
    descr: string;
  }[];
};

const Advantages: React.FC<AdvantagesProps> = ({ advantagesList }) => {
  return (
    <S.Advantages>
      <SG.Container>
        <div style={{ width: '350px' }}>
          <Image src={images.image_phone_1_2x} alt="image phone" />
        </div>
      </SG.Container>

      <S.ListBackground>
        <SG.Container>
          <S.List>
            {advantagesList.map(item => (
              <S.ListItem key={item?.title}>
                <div>{item?.title}</div>
                <div>{item.descr}</div>
              </S.ListItem>
            ))}
          </S.List>
        </SG.Container>
      </S.ListBackground>
    </S.Advantages>
  );
};
export default Advantages;
