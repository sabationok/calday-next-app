import styled from 'styled-components';
import { IItemState } from './FAQListItem';

export const ListItem = styled.li`
  background-color: ${({ isOpen }: IItemState) =>
    isOpen ? '#ffffff' : '#f7f6f0'};

  box-shadow: -40px 20px 100px rgba(163, 159, 139, 0.1);

  fill: ${({ isOpen }: IItemState) => (!isOpen ? '#d9b682' : '#62C45B')};
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid;
  border-color: ${({ isOpen }: IItemState) =>
    isOpen ? '#d9b682' : 'transparent'};
`;

export const OpenItemButton = styled.button`
  display: flex;
  gap: 20px;

  font-family: 'Gilroy', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;

  color: var(--blackPrimary);

  width: 100%;
  padding: 21px 16px;

  border-style: none;
  background-color: transparent;

  border: 1px solid transparent;

  border-radius: 10px;
`;

export const ItemDescription = styled.span`
  display: block;

  overflow: hidden;

  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;

  color: var(--textBlackClr);

  max-height: ${({ isOpen }: IItemState) => (isOpen ? '100%' : '0')};
  padding: ${({ isOpen }: IItemState) =>
    isOpen ? '21px 16px 21px 64px' : '0'};
`;
