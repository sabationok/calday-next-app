import Image from 'next/image';
import * as S from './FeatureItem.style';
import { IFeatureItem } from '@/types/types';

const FeatureItem: React.FC<IFeatureItem> = ({
  icon,
  alt,
  title,
  descr,
  idx,
  current,
  onClick,
}) => {
  return (
    <S.FeatureItem onClick={() => onClick(idx)} isActive={current === idx}>
      <Image src={icon} alt={alt} width={48} />

      <S.RightSide>
        <S.FutereTitle>{title}</S.FutereTitle>

        <S.FutureDescr>{descr}</S.FutureDescr>
      </S.RightSide>
    </S.FeatureItem>
  );
};

export default FeatureItem;
