import Button from '@/components/Button/Button';
import { testData } from '@/testData';

import * as S from './FormCreateEvent.style';

const FormCreateEvent: React.FC = () => {
  return (
    <S.FormCreateEvent>
      <S.Wrapper>
        <S.InputsWrapper>
          <S.InputText
            placeholder={testData.createEventFormData.eventInputPlaceholder}
            name={testData.createEventFormData.eventInputName}
          />

          <S.InputTime
            placeholder={testData.createEventFormData.timeInputPlaceholder}
            name={testData.createEventFormData.timeInputName}
          />
        </S.InputsWrapper>

        <S.FormNoteText>{testData.createEventFormData.note}</S.FormNoteText>
      </S.Wrapper>

      <Button variant="filled">
        {testData.createEventFormData.submitButtonName}
      </Button>
    </S.FormCreateEvent>
  );
};

export default FormCreateEvent;
