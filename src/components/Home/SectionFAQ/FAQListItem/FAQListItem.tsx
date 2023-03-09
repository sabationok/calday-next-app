import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import { IFAQItem } from '@/types/types';
import * as S from './FAQListItem.style';

export interface IItemState {
  isOpen: boolean;
}

const FAQListItem: React.FC<IFAQItem> = ({
  title,
  descr,
  onClick,
  isOpen = false,
}) => {
  return (
    <S.ListItem isOpen={isOpen}>
      <S.OpenItemButton onClick={onClick}>
        <SvgIcons
          icon={IconsMap.materialArrowRight}
          size="24px"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
        <span>{title}</span>
      </S.OpenItemButton>

      <S.ItemDescription isOpen={isOpen}>
        <S.ItemDescriptionInner>{descr}</S.ItemDescriptionInner>
      </S.ItemDescription>
    </S.ListItem>
  );
};

export default FAQListItem;
