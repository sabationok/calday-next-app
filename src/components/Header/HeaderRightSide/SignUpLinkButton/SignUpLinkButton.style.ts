import styled from 'styled-components';

export const SignUpLinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 10px 20px;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  color: #40464e;

  text-transform: uppercase;
  background-color: transparent;
  /* background-color: #d8b681; */

  border: 2px solid #d8b681;
  border-radius: 100px;

  &:hover {
    fill: var(--actionOrangeClr);
    color: '#40464E';
    /* background-color: '#372F2A'; */
    border-color: '#EA8C1F';
  }
  &:active {
    fill: #ea8c1f;
    color: '#40464E';
    background-color: '#F7F6F0';
    border-color: '#EA8C1F';
  }
`;
