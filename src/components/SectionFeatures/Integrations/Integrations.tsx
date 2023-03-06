import * as S from './Integrations.style';
import testData from '@/testData';
import Image from 'next/image';

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
              <S.ListItem key={item.alt}>
                <S.ListImgBox>
                  <Image src={item.icon} alt={item.alt} />
                </S.ListImgBox>

                <S.ListItemDescr>{item.descr}</S.ListItemDescr>
              </S.ListItem>
            ))}
          </S.IntegrationsList>
        </S.Integrations>
      </S.IntegrationsContainer>
    </>
  );
};

export default Integrations;
