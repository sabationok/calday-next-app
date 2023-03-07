import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;

  font-family: 'Mark Pro', sans-serif;
  font-weight: 700;

  user-select: none;
  text-transform: uppercase;

  width: fit-content;

  font-size: ${({ variant }: ButtonProps) => variantsMap[variant].fontSize};
  line-height: ${({ variant }: ButtonProps) => variantsMap[variant].lineHeight};

  min-height: ${({ variant }: ButtonProps) => variantsMap[variant].minHeight};
  min-width: ${({ variant }: ButtonProps) => variantsMap[variant].minWidth};

  background-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant].backgroundColor};
  fill: ${({ variant }: ButtonProps) => variantsMap[variant].fill};
  color: ${({ variant }: ButtonProps) => variantsMap[variant].color};

  border-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant].borderColor};
  border-radius: ${({ variant }: ButtonProps) =>
    variantsMap[variant].borderRadius};
  border-width: ${({ variant }: ButtonProps) =>
    variantsMap[variant].borderWidth};

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
    borderRadius: '8px',
    borderWidth: '1px',
    fontSize: '15px',
    lineHeight: '0.87',
    minHeight: '58px',
    minWidth: '210px',
    padding: '10px 25px',
  },
  outlinedLarge: {
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
    borderRadius: '8px',
    borderWidth: '1px',
    fontSize: '15px',
    lineHeight: '0.87',
    minHeight: '58px',
    minWidth: '210px',
    padding: '10px 25px',
  },
  outlinedSmall: {
    backgroundColor: 'transparent',
    borderColor: '#D8B681',
    fill: '#FFF06B',
    color: '#40464E',
    backgroundColorHover: 'transparent',
    borderColorHover: '#EA8C1F',
    fillHover: '#EA8C1F',
    colorHover: '#40464E',
    backgroundColorActive: '#F7F6F0',
    borderColorActive: '#E9E7DD',
    fillActive: '#40464E',
    colorActive: '#40464E',
    borderRadius: '100px',
    fontSize: '14px',
    lineHeight: '0.93',
    minHeight: '36px',
    minWidth: '127px',
    padding: '10px 19px',
    borderWidth: '2px',
  },
};
