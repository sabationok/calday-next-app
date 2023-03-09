import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;

  font-family: 'Mark Pro', sans-serif;
  font-weight: 700;

  user-select: none;
  text-transform: uppercase;

  width: fit-content;

  padding: ${({ variant }: ButtonProps) => variantsMap[variant]?.padding};

  font-size: ${({ variant }: ButtonProps) => variantsMap[variant]?.fontSize};
  line-height: ${({ variant }: ButtonProps) =>
    variantsMap[variant]?.lineHeight};

  min-height: ${({ variant }: ButtonProps) => variantsMap[variant]?.minHeight};
  min-width: ${({ variant }: ButtonProps) => variantsMap[variant]?.minWidth};

  background-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant]?.backgroundColor};
  fill: ${({ variant }: ButtonProps) => variantsMap[variant]?.fill};
  color: ${({ variant }: ButtonProps) => variantsMap[variant]?.color};

  border-color: ${({ variant }: ButtonProps) =>
    variantsMap[variant]?.borderColor};
  border-radius: ${({ variant }: ButtonProps) =>
    variantsMap[variant].borderRadius};
  border-width: ${({ variant }: ButtonProps) =>
    variantsMap[variant]?.borderWidth};

  border-style: solid;

  background: ${({ variant }: ButtonProps) => variantsMap[variant]?.background};
  transition: all var(--timing-function__main);

  &:hover {
    background-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant]?.backgroundColorHover};
    fill: ${({ variant }: ButtonProps) => variantsMap[variant]?.fillHover};
    color: ${({ variant }: ButtonProps) => variantsMap[variant]?.colorHover};
    border-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant]?.borderColorHover};
  }
  &:active {
    background-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant]?.backgroundColorActive};
    fill: ${({ variant }: ButtonProps) => variantsMap[variant]?.fillActive};
    color: ${({ variant }: ButtonProps) => variantsMap[variant]?.colorActive};
    border-color: ${({ variant }: ButtonProps) =>
      variantsMap[variant]?.borderColorActive};
    background: ${({ variant }: ButtonProps) =>
      variantsMap[variant]?.backgroundActive};
  }
`;

export const colors = {
  activeOrange: '#EA8C1F',
  primaryBlack: '#40464E',
  white: '#fff',
  bageDark: '#D8B681',
  bageLight: '#F2F0E4',
  bagePrimary: '#F7F6F0',
  yelowLight: '#FFF06B',
  blackPrimary: '#372F2A',

  backgroundGradient:
    'linear-gradient(#fff, #fff) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box',
  backgroundGradientActive:
    'linear-gradient(#F2F0E4, #F2F0E4) padding-box, linear-gradient( 120deg, rgba(205, 62, 255, 1) 0%, rgba(237, 163, 20, 1) 100%) border-box',
};

const variantsMap = {
  filled: {
    backgroundColor: colors.blackPrimary,
    borderColor: colors.bageDark,
    fill: colors.yelowLight,
    color: colors.white,
    backgroundColorHover: colors.blackPrimary,
    borderColorHover: '#2B2F36',
    fillHover: colors.white,
    colorHover: colors.white,
    backgroundColorActive: colors.blackPrimary,
    borderColorActive: colors.bageDark,
    fillActive: colors.bageLight,
    colorActive: colors.bageLight,
    borderRadius: '8px',
    borderWidth: '1px',
    fontSize: '15px',
    lineHeight: '0.87',
    minHeight: '58px',
    minWidth: '210px',
    padding: '10px 25px',
    background: '',
    backgroundActive: '',
  },
  outlinedLarge: {
    backgroundColor: colors.white,
    borderColor: colors.bageDark,
    fill: colors.blackPrimary,
    color: colors.primaryBlack,
    backgroundColorHover: colors.white,
    borderColorHover: colors.bageDark,
    fillHover: colors.primaryBlack,
    colorHover: colors.primaryBlack,
    backgroundColorActive: colors.bagePrimary,
    borderColorActive: colors.bageDark,
    fillActive: colors.bageDark,
    colorActive: colors.bageDark,
    borderRadius: '8px',
    borderWidth: '1px',
    fontSize: '15px',
    lineHeight: '0.87',
    minHeight: '58px',
    minWidth: '210px',
    padding: '10px 25px',
    background: '',
    backgroundActive: colors.backgroundGradientActive,
  },
  outlinedLargeGradient: {
    backgroundColor: colors.white,
    borderColor: 'transparent',
    fill: colors.activeOrange,
    color: colors.primaryBlack,
    backgroundColorHover: colors.white,
    borderColorHover: 'transparent',
    fillHover: colors.activeOrange,
    colorHover: colors.primaryBlack,
    backgroundColorActive: colors.bagePrimary,
    borderColorActive: 'transparent',
    fillActive: colors.activeOrange,
    colorActive: colors.primaryBlack,
    borderRadius: '8px',
    borderWidth: '1px',
    fontSize: '15px',
    lineHeight: '0.87',
    minHeight: '58px',
    minWidth: '210px',
    padding: '10px 25px',
    background: colors.backgroundGradient,
    backgroundActive: '',
  },
  outlinedSmall: {
    backgroundColor: 'transparent',
    borderColor: colors.bageDark,
    fill: colors.yelowLight,
    color: colors.primaryBlack,
    backgroundColorHover: 'transparent',
    borderColorHover: colors.activeOrange,
    fillHover: colors.activeOrange,
    colorHover: colors.primaryBlack,
    backgroundColorActive: '#F7F6F0',
    borderColorActive: '#E9E7DD',
    fillActive: colors.primaryBlack,
    colorActive: colors.primaryBlack,
    borderRadius: '100px',
    fontSize: '14px',
    lineHeight: '0.93',
    minHeight: '36px',
    minWidth: '127px',
    padding: '10px 19px',
    borderWidth: '2px',
    background: '',
    backgroundActive: '',
  },
};
