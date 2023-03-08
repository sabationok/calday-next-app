import styled from 'styled-components';

export const SectionBuyNow = styled.section`
  position: relative;

  overflow: hidden;

  padding: 34px 0 78px;

  min-height: 530px;
`;
export const SectionTopBackground = styled.div`
  position: absolute;
  top: 0;
  height: 0;

  background-color: #eeede0;
  width: 100%;
  min-height: 430px;
`;
export const SectionBuyNowContainer = styled.div`
  position: sticky;
  z-index: 10;

  padding: 0 15px;

  max-width: 1440px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: 'Gilroy', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;

  color: var(--brownPrimeClr);
  padding-bottom: 3px;
`;
export const SubTitle = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.83;
  text-align: center;
  color: var(--textBlackClr);

  margin-bottom: 37px;
`;
export const Description = styled.p`
  max-width: 529px;
  padding: 0 15px;

  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.83;
  text-align: center;
  color: var(--textBlackClr);

  margin: 0 auto;
`;
