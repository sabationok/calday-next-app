import styled from 'styled-components';

export const SectionFAQ = styled.section`
  padding: 78px 0 130px;
  min-height: 150px;
  background-color: var(--bageBackgroundClr);
`;

export const Title = styled.h2`
  font-family: 'Gilroy', sans-serif;

  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;
  color: var(--brownPrimeClr);

  text-transform: uppercase;

  margin-bottom: 72px;
`;

export const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0 auto;

  /* width: 100%; */
  max-width: 926px;
`;
