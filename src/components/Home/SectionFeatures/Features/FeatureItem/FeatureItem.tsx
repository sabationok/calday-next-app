import Image from 'next/image';
import * as S from './FeatureItem.style';
import { IFeatureItem } from '@/types/types';

const FeatureItem: React.FC<IFeatureItem> = ({ descr, icon, alt, title }) => {
  return (
    <S.FeatureItem>
      <Image src={icon} alt={alt} />
    </S.FeatureItem>
  );
};

export default FeatureItem;
