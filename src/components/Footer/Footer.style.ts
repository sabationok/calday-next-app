import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  /* height: 359px; */

  background: var(--blackPrimary);
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1100px;

  padding: 56px 0 36px;

  margin: 0 auto;
`;
export const Copyright = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.33;

  color: var(--bagePrimary);
  text-align: center;
`;
