import Link from 'next/link';
import styled from 'styled-components';

export const SignUpLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 10px 19px;

  font-size: 14px;
  font-weight: 700;
  line-height: 0.93;
  color: var(--blackPrimary);
  fill: var(--blackPrimary);
  white-space: nowrap;

  text-transform: uppercase;
  background-color: transparent;
  /* background-color: #d8b681; */

  border: 2px solid var(--brownLightClr);
  border-radius: 100px;

  transition: all var(--timing-function__main);

  &:hover {
    fill: var(--actionOrangeClr);
    border-color: #ea8c1f;
  }
  &:active {
    fill: var(--blackPrimary);
    background-color: var(--bagePrimary);
    border-color: var(--bntOutlineActive);
  }
`;
