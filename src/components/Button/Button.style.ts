import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;

  font-family: 'Mark Pro', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 13px;

  min-height: 58px;
  min-width: 210px;

  padding: 0 25px;

  background-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant].backgroundColor};
  fill: ${({ variant }: ButtonProps) => variantsMap[variant].fill};
  color: ${({ variant }: ButtonProps) => variantsMap[variant].color};
  border-style: none;
  border-radius: 8px;
  border-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant].borderColor};
  border-width: 1px;
  border-style: solid;

  &:hover {
    background-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant].backgroundColorHover};
    fill: ${({ variant }: ButtonProps) => variantsMap[variant].fillHover};
    color: ${({ variant }: ButtonProps) => variantsMap[variant].colorHover};
    border-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant].borderColorHover};
  }
  &:active {
    background-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant].backgroundColorActive};
    fill: ${({ variant }: ButtonProps) => variantsMap[variant].fillActive};
    color: ${({ variant }: ButtonProps) => variantsMap[variant].colorActive};
    border-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant].borderColorActive};
  }
`;

const variantsMap = {
  filled: {
    backgroundColor: '#372F2A',
    borderColor: '#D8B681',
    fill: '#FFF06B',
    color: '#FFF',
    backgroundColorHover: '#372F2A',
    borderColorHover: '#2B2F36',
    fillHover: '#FFF',
    colorHover: '#FFF',
    backgroundColorActive: '#372F2A',
    borderColorActive: '#D8B681',
    fillActive: '#F2F0E4',
    colorActive: '#F2F0E4',
  },
  outlined: {
    backgroundColor: '#372F2A',
    borderColor: '#D8B681',
    fill: '#FFF06B',
    color: '#FFF',
    backgroundColorHover: '#372F2A',
    borderColorHover: '#D8B681',
    fillHover: '#FFF',
    colorHover: '#FFF',
    backgroundColorActive: '#372F2A',
    borderColorActive: '#D8B681',
    fillActive: '#F2F0E4',
    colorActive: '#F2F0E4',
  },
};
