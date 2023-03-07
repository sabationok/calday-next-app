import styled from 'styled-components';
import { ISvgIcons } from '@/types/types';

export const Svg = styled.svg<ISvgIcons>`
  width: ${({ size, width }) => {
    return width || size || '18px';
  }};
  height: ${({ size, height }) => {
    return height || size || '18px';
  }};
  min-width: ${({ size, height }) => {
    return height || size || '18px';
  }};

  fill: inherit;
`;
