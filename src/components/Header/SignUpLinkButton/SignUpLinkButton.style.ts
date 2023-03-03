import styled from 'styled-components';
import Link from 'next/link';

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
    fill: #ea8c1f;
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
// outlinedSmall: {
//   backgroundColor: '#372F2A',
//   borderColor: '#D8B681',
//   fill: '#FFF06B',
//   color: '#40464E',
//   backgroundColorHover: '#372F2A',
//   borderColorHover: '#EA8C1F',
//   fillHover: '#EA8C1F',
//   colorHover: '#40464E',
//   backgroundColorActive: '#F7F6F0',
//   borderColorActive: '#E9E7DD',
//   fillActive: '#40464E',
//   colorActive: '#40464E',
//   borderRadius: '100px',
//   fontSize: '14px',
//   lineHeight: '0.93',
//   minHeight: '36px',
//   minWidth: '127px',
//   padding: '10px 19px',
// },
export const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
