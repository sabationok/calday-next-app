import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const SectionDownloadApp = styled.section`
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
  padding: 0 15px 150px 15px;

  @media screen and (min-width: 768px) {
    min-width: 600px;
  }
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

export const GetAppLink = styled(Link)`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-columns: 1fr 1.2fr;
  gap: 4px;

  color: #fff;

  height: 44px;
  width: 150px;
  min-width: 150px;

  padding: 6px 10px;

  border-radius: 6px;
  background-color: #2b2f36;
  border: 1px solid #a6a6a6;
  &:hover {
    border-color: var(--actionOrangeClr);
  }
`;
export const LinkIcon = styled(Image)`
  grid-column: 1/2;
  grid-row: 1/3;

  width: 26px;
`;

export const LinkTitle = styled.span`
  white-space: nowrap;
  font-size: 10px;
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const LinkName = styled.span`
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  grid-column: 2/3;
  grid-row: 2/3;
`;
