import styled from 'styled-components';

export const FormCreateEvent = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 3px;

  width: max-content;

  margin-bottom: 76px;
`;

export const FormWrapper = styled.div``;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;

  overflow: hidden;
`;
export const FormNoteText = styled.span`
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.83;

  text-align: center;

  color: #423d2f;
`;

export const InputText = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 8px 0 0 8px;
  width: 291px;
  height: 58px;

  padding: 19px 21px;

  border: 1px solid #d8b681;

  /* background-color: '#F7F6F0'; */

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
export const InputTime = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 0 8px 8px 0;
  width: 120px;
  height: 58px;

  padding: 19px 48px 19px 21px;

  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: #d8b681;

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
