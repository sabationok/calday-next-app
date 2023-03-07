import { IFAQItem } from '@/types/types';
import { useState } from 'react';
import * as S from './FAQListItem.style';

export interface IItemState {
  isOpen: boolean;
}

const FAQListItem: React.FC<IFAQItem> = ({ title, descr }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hanleOpenItem = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.ListItem isOpen={isOpen}>
      <S.OpenItemButton onClick={hanleOpenItem}>{title}</S.OpenItemButton>

      <S.ItemDescription isOpen={isOpen}>{descr}</S.ItemDescription>
    </S.ListItem>
  );
};

export default FAQListItem;
