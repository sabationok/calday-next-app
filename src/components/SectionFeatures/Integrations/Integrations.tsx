import * as S from './Integrations.style';
import testData from '@/testData';
import Image from 'next/image';
import IntegrationItem from './IntegrationItem/IntegrationItem';

const { integrations } = testData.featuresSectionData;

const Integrations: React.FC = () => {
  return (
    <>
      <S.IntegrationsContainer>
        <S.Integrations>
          <S.IntegrationsTitle>
            <>{testData.featuresSectionData.integrations.title}</>
          </S.IntegrationsTitle>

          <S.IntegrationsSubTitle>
            <>{testData.featuresSectionData.integrations.subTitle}</>
          </S.IntegrationsSubTitle>

          <S.IntegrationsList>
            {integrations.integrationsList.map(item => (
              <IntegrationItem key={item.id} {...item} />
            ))}
          </S.IntegrationsList>
        </S.Integrations>
      </S.IntegrationsContainer>
    </>
  );
};

export default Integrations;
