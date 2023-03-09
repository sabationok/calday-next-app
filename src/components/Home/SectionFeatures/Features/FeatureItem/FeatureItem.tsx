import Image from 'next/image';
import * as S from './FeatureItem.style';
import { IFeatureItem } from '@/types/types';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';

const FeatureItem: React.FC<IFeatureItem> = ({
  icon,
  iconAlt,
  title,
  descr,
  onClick,
  imgURL,
  imgAlt,
  isActive,
}) => {
  return (
    <S.FeatureItem isActive={isActive}>
      <S.FutureButton onClick={onClick}>
        <Image src={icon} alt={iconAlt} width={48} />

        <S.RightSide>
          <S.TitleWrapper>
            <S.FutureTitle>{title}</S.FutureTitle>

            <SvgIcons
              icon={IconsMap.materialArrowRight}
              size="24px"
              style={{ transform: `rotate(${isActive ? 90 : 0}deg)` }}
            />
          </S.TitleWrapper>

          <S.FutureDescr>{descr}</S.FutureDescr>
        </S.RightSide>
      </S.FutureButton>

      {isActive && (
        <S.FutureItemImage>
          <Image src={imgURL} alt={imgAlt} />
        </S.FutureItemImage>
      )}
    </S.FeatureItem>
  );
};

export default FeatureItem;
