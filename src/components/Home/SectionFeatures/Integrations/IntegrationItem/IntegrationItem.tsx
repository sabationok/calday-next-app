import { IIntegrationItem } from '@/types/types';
import Image from 'next/image';
import * as S from './IntegrationItem.style';

const IntegrationItem: React.FC<IIntegrationItem> = ({ icon, alt, descr }) => {
  return (
    <S.IntegrationItem>
      <S.IntegrationItemImgBox>
        <Image src={icon} alt={alt} />
      </S.IntegrationItemImgBox>

      <S.IntegrationItemDescr>{descr}</S.IntegrationItemDescr>
    </S.IntegrationItem>
  );
};

export default IntegrationItem;
