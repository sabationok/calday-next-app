import React from 'react';
import { sprite } from '../../img/svgSprite';

import s from './SvgIcon.module.scss';

// import * as S from './SvgIcon.style';

type SvgIconProps = {
  iconId?: string;
  style?: object;
  size?: string;
  svgClass?: string;
  className?: string;
};

const SvgIcon: React.FC = ({
  iconId = 'info',
  style,
  size = '',
  svgClass = '',
  className = '',
}: SvgIconProps) => {
  const styles = {
    ...style,
    width: size,
    height: size,
    minWidth: size,
  };

  const classNameArr = [s.iconBox, className].join(' ');
  const svgClassArr = [s.svg, svgClass].join(' ');

  return (
    <div className={classNameArr} style={styles}>
      <svg className={svgClassArr}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
    </div>
  );
};

export default SvgIcon;
