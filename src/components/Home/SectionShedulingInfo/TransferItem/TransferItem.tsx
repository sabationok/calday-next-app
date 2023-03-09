import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import { ITransferItem } from '@/types/types';
import Link from 'next/link';

import s from './TransferItem.module.css';
import * as S from './TransferItem.style';

const TransferItem: React.FC<ITransferItem> = ({
  from,
  to,
  fill,
  descrList,
  link,
}) => {
  return (
    <S.TransferItem fill={fill}>
      <S.TitleWrapper>
        <S.Title>{from}</S.Title>

        <SvgIcons icon={IconsMap.muiTransferArrows} />

        <S.Title>{to}</S.Title>
      </S.TitleWrapper>

      <S.DescrList>
        {descrList.map((item, idx) => (
          <S.DescrListItem key={idx}>{item}</S.DescrListItem>
        ))}
      </S.DescrList>

      <Link href={link} className={s.linkCircle}>
        <SvgIcons icon={IconsMap.materialArrowRight} size="24px" />
      </Link>
    </S.TransferItem>
  );
};

export default TransferItem;
