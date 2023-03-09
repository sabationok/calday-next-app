import styled from 'styled-components';

export const FormCreateEvent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;

  width: max-content;

  margin-bottom: 76px;

  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 622px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  gap: 10px;

  overflow: hidden;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr min-content;
    gap: 3px;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;

  align-items: center;
  overflow: hidden;
`;

export const InputText = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 8px 0 0 8px;

  width: 100%;
  height: 58px;

  padding: 19px 21px;

  border: 1px solid var(--brownLightClr);

  &:hover {
  }
  &:focus {
  }
  &:placeholder-shown {
    background-color: var(--inputEmptyBackgroundClr);
  }
  &::placeholder {
    font-family: 'Mark Pro', sans-serif;
    font-weight: 450;
    font-size: 15px;
    line-height: 1.33px;

    vertical-align: bottom;

    color: #86888b;
  }
`;
export const InputTime = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 0 8px 8px 0;
  width: 120px;
  min-width: 120px;
  height: 58px;

  padding: 19px 48px 19px 21px;

  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: var(--brownLightClr);

  &:hover {
  }
  &:focus {
  }
  &:placeholder-shown {
    background-color: #f7f6f0;
  }
  &::placeholder {
    font-family: 'Mark Pro', sans-serif;
    font-weight: 450;
    font-size: 15px;
    line-height: 1.33px;

    color: #86888b;
  }
`;

export const ButtonNameMobile = styled.span`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ButtonName = styled.span`
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const FormNoteText = styled.span`
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.83;

  text-align: center;

  color: var(--browmPrimeClr);

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
