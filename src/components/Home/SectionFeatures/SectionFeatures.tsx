import Features from './Features/Features';
import Integrations from './Integrations/Integrations';

import * as S from './SectionFeatures.style';

export interface iSectionFeaturesProps {
  title?: string;
}

const SectionFeatures: React.FC<iSectionFeaturesProps> = ({
  title = 'Features',
}) => {
  return (
    <S.SectionFeatures>
      <S.SectionContainer>
        <S.FeaturesTitle>{title}</S.FeaturesTitle>

        <Features />

        <Integrations />
      </S.SectionContainer>
    </S.SectionFeatures>
  );
};

export default SectionFeatures;
