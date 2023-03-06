import * as S from './Features.style';

const Features: React.FC = () => {
  return (
    <>
      <S.Features>
        <S.FeaturesList>
          <S.FeaturesListItem></S.FeaturesListItem>
          <S.FeaturesListItem></S.FeaturesListItem>
          <S.FeaturesListItem></S.FeaturesListItem>
          <S.FeaturesListItem></S.FeaturesListItem>
        </S.FeaturesList>

        <S.FeaturesIlustrationImage></S.FeaturesIlustrationImage>
      </S.Features>
    </>
  );
};

export default Features;
