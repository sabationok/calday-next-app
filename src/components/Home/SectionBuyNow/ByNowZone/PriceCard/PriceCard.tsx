import Button from '@/components/Button/Button';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import * as S from './PriceCard.style';

export interface IPriceCard {
  isPremium: boolean;
  period?: string;
  price?: number;
  title?: string;
  subTitle?: string;
  buttonTitle?: string;
  sale?: string;
  options?: string[] | number[];
}
const PriceCard: React.FC<IPriceCard> = ({
  isPremium,
  period,
  price,
  title,
  subTitle,
  buttonTitle,
  sale,
  options = [],
}) => {
  return (
    <S.PriceCard isPremium={isPremium}>
      <S.CardTitle isPremium={isPremium}>{title}</S.CardTitle>

      <S.CardSubTitle>{subTitle}</S.CardSubTitle>

      <S.CardPriceBox>
        <S.CardPrice>{`$${price}`}</S.CardPrice>

        <S.Wrapper>
          <S.CardSale>{sale || ' '}</S.CardSale>

          <S.CardPeriod>{`/${period}`}</S.CardPeriod>
        </S.Wrapper>
      </S.CardPriceBox>

      <S.OptionsList>
        {options.map(opt => (
          <S.ListOption isPremium={isPremium} key={opt}>
            <S.IconBox isPremium={isPremium}>
              <SvgIcons icon={IconsMap.muiDone} size="16px" />
            </S.IconBox>

            <S.ListOption isPremium={isPremium}>{opt}</S.ListOption>
          </S.ListOption>
        ))}
      </S.OptionsList>

      <Button
        variant={isPremium ? 'outlinedLargeGradient' : 'outlinedLarge'}
        style={{ width: '100%' }}
      >
        <span>{buttonTitle}</span>
        <SvgIcons icon={IconsMap.arrowRight} />
      </Button>
    </S.PriceCard>
  );
};

export default PriceCard;
