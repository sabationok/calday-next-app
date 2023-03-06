import styled from 'styled-components';

export const IntegrationsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;

    padding: 138px;
  }
`;

export const Integrations = styled.div`
  margin: 0 auto;

  min-height: 300px;
  width: 100%;
  max-width: 1164px;

  background-color: var(--bageDarkClr);
  border-radius: 20px;

  padding: 58px 58px 78px;
`;

export const IntegrationsTitle = styled.h3`
  font-family: 'Gilroy', sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;

  margin-bottom: 8px;

  color: var(--browmPrimeClr);
`;
export const IntegrationsSubTitle = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  text-align: center;

  margin-bottom: 63px;

  color: var(--blackPrimary);
`;
export const IntegrationsList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  max-width: 215px;

  flex-basis: 180px;
  flex-grow: 1;
`;

export const ListImgBox = styled.div`
  width: 32px;
  height: 32px;
`;
export const ListItemDescr = styled.span`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
  text-align: center;

  color: var(--graySecondary);
`;
