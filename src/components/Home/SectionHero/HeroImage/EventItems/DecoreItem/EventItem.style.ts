import styled from 'styled-components';

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  position: absolute;

  height: 58px;

  width: 100%;
  min-width: max-content;

  max-width: 268px;

  border-radius: 50px;
  padding: 6px 12px;

  overflow: hidden;

  background-color: #fff;
  box-shadow: -20px 20px 50px rgba(122, 64, 19, 0.3);
`;
export const AvatarBox = styled.div<{ size?: number }>`
  width: ${({ size }) => size || '36px'};
`;
export const ItemRapper = styled.div``;
export const ItemNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const ItemName = styled.span`
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.71;
  color: #86888b;
`;
export const ItemEvent = styled.span`
  font-family: 'Gilroy', sans-serif;
  font-size: 14px;
  line-height: 1.71;
  color: #86888b;
`;
export const ItemDate = styled.span`
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.71;
  color: #000000;
`;
