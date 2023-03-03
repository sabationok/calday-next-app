import styled from 'styled-components';

export const FormCreateEvent = styled.form`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const FormWrapper = styled.div``;

export const Inputs = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
`;

export const InputBox = styled.div`
  border-radius: 8px 0 0 8px;

  border: 1px solid #d8b681;

  &:hover {
  }
  &:focus {
  }
  &:placeholder-shown {
    background-color: #f7f6f0;
  }
  /* border-radius: 8px; */
`;
