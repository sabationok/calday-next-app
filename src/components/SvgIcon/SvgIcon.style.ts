import styled from 'styled-components';
import { ISvgIconProps } from './SvgIcon';

export const Svg = styled.svg`
  width: ${({ size, width }: ISvgIconProps) => {
    return width || size || '100%';
  }};
  height: 100%;

  fill: inherit;
`;
