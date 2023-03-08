import styled from 'styled-components';

export const SectionShedulingInfo = styled.section`
  padding: 156px 0 0;
`;
export const Title = styled.h2`
  font-family: 'Gilroy', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;
  color: var(--browmPrimeClr);

  padding: 0 15px;
  margin-bottom: 6px;
`;
export const SubTitle = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  text-align: center;
  color: var(--blackPrimary);

  padding: 0 15px;
  margin-bottom: 78px;
`;

export const TransfersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  padding: 0 12px;
  margin-bottom: 115px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;
