import Button from '@/components/Button/Button';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import testData from '@/testData';

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

        <Button variant="filled">
          <S.ButtonNameMobile>
            {testData.createEventFormData.submitButtonNameMobile}
          </S.ButtonNameMobile>

          <S.ButtonName>
            {testData.createEventFormData.submitButtonName}
          </S.ButtonName>

          <SvgIcons icon={IconsMap.arrowRight} size="16px" />
        </Button>
      </S.Wrapper>

      <S.FormNoteText>{testData.createEventFormData.note}</S.FormNoteText>
    </S.FormCreateEvent>
  );
};

export default FormCreateEvent;
