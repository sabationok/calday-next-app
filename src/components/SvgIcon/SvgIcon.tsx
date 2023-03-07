import { ISvgIcon } from '@/types/types';

import * as S from './SvgIcon.style';

const SvgIcon: React.FC<ISvgIcon> = ({
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
