import * as S from './Button.style';

export interface ButtonProps {
  variant: 'filled' | 'outlinedLarge' | 'outlinedSmall';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  type = 'button',
  style,
  ...props
}) => {
  return (
    <S.Button {...{ variant, type, style, ...props }}>{children}</S.Button>
  );
};

export default Button;
