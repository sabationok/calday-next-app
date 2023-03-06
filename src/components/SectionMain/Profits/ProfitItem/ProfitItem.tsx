import { IProfitItem } from '@/types/types';
import Image from 'next/image';
import * as S from './ProfitItem.style';

const ProfitItem: React.FC<IProfitItem> = ({ icon, alt, title, descr }) => {
  return (
    <S.ProfitItem>
      <S.ProfitItemImg>
        <Image src={icon} alt={alt} />
      </S.ProfitItemImg>

      <S.ProfitItemTitle>{title}</S.ProfitItemTitle>

      <S.ProfitItemDescr>{descr}</S.ProfitItemDescr>
    </S.ProfitItem>
  );
};
export default ProfitItem;
