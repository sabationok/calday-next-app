import React from 'react';
import images from '@/img';

import * as S from './SvgIcon.style';

export interface ISvgIconProps {
  iconId?: string;
  style?: object;
  size?: string;
  width?: string;
  height?: string;
}

const SvgIcon: React.FC<ISvgIconProps> = ({
  iconId,
  style,
  width,
  height,
  size = '18px',
}) => {
  const styles = {
    width: width || size,
    height: height || size,
    minWidth: width || size,
    ...style,
  };

  return (
    <>
      {iconId ? (
        <S.Svg {...{ size, height, width, style: styles }}>
          <use href={`${''}#${iconId}`}></use>
        </S.Svg>
      ) : null}
    </>
  );
};

export default SvgIcon;
