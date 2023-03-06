import * as S from './Button.style';

export interface ButtonProps {
  variant: 'filled' | 'outlinedLarge' | 'outlinedSmall';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  type = 'button',
  ...props
}) => {
  return <S.Button {...{ variant, type, ...props }}>{children}</S.Button>;
};

export default Button;
