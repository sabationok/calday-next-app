import * as S from './Features.style';
import testData from '@/testData';
import FeatureItem from './FeatureItem/FeatureItem';

const { featuresList } = testData.featuresSectionData;
const Features: React.FC = () => {
  return (
    <>
      <S.Features>
        <S.FeaturesList>
          {featuresList.map(item => (
            <FeatureItem key={item.id} {...item} />
          ))}
        </S.FeaturesList>

        <S.FeaturesIlustrationImage></S.FeaturesIlustrationImage>
      </S.Features>
    </>
  );
};

export default Features;
