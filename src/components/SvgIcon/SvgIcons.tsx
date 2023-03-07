import * as S from './SvgIcon.style';
import { ISvgIcons } from '@/types/types';

export const IconsMap = {
  arrowRight: {
    viewbox: '0 0 32 32',
    path: (
      <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
    ),
  },

  menuBurger: {
    viewbox: '0 0 20 20',
    path: (
      <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
    ),
  },
  close: {
    viewbox: '0 0 24 24',
    path: (
      <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
    ),
  },
};

const SvgIcons: React.FC<ISvgIcons> = ({
  icon,
  height,
  width,
  size,
  style,
}) => {
  const styles = {
    width: width || size || '18px',
    height: height || size || '18px',
    minWidth: width || size || '18px',
    ...style,
  };
  return (
    <S.Svg
      viewBox={icon?.viewbox}
      {...{ height, width, size, style }}
      style={styles}
    >
      {icon?.path}
    </S.Svg>
  );
};

export default SvgIcons;
