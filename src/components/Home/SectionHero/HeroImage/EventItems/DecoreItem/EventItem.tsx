import { IEventItem } from '@/types/types';
import Image from 'next/image';
import * as S from './EventItem.style';

const EventItem: React.FC<IEventItem> = ({
  avatar,
  name,
  event,
  date,
  alt,
  style,
}) => {
  return (
    <S.EventItem style={style}>
      <S.AvatarBox>
        <Image src={avatar} alt={alt} width={36} />
      </S.AvatarBox>

      <S.ItemRapper>
        <S.ItemNameWrapper>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemEvent>{event}</S.ItemEvent>
        </S.ItemNameWrapper>

        <S.ItemDate>{date}</S.ItemDate>
      </S.ItemRapper>
    </S.EventItem>
  );
};
export default EventItem;
