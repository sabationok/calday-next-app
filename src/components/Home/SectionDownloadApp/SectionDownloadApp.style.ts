import styled from 'styled-components';

export const SectionDownloadApp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

export const ImageSide = styled.div`
  align-self: flex-end;
  max-width: 693px;
`;

export const TextSide = styled.div`
  padding-right: 15px;
  min-width: 600px;
`;

export const Title = styled.h3`
  font-family: 'Gilroy', sans-serif;
  font-weight: 800;
  font-size: 52px;
  line-height: 1;
  color: var(--brownPrimeClr);

  margin-top: calc(263px - 115px);
  margin-bottom: 32px;
`;

export const SubTitle = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  color: var(--textBlackClr);

  max-width: 573px;

  margin-bottom: 40px;
`;

export const DownloadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
