import Button from '@/components/Button/Button';
import SvgIcons, { IconsMap } from '@/components/SvgIcon/SvgIcons';
import testData from '@/testData';

import * as S from './FormCreateEvent.style';

const FormCreateEvent: React.FC = () => {
  const { createEventFormData } = testData.heroSectionData;
  return (
    <S.FormCreateEvent>
      <S.Wrapper>
        <S.InputsWrapper>
          <S.InputText
            placeholder={createEventFormData.eventInputPlaceholder}
            name={createEventFormData.eventInputName}
          />

          <S.InputTime
            placeholder={createEventFormData.timeInputPlaceholder}
            name={createEventFormData.timeInputName}
          />
        </S.InputsWrapper>

        <Button variant="filled" style={{ width: '100%' }}>
          {/* <S.ButtonNameMobile>
            {createEventFormData.submitButtonNameMobile}
          </S.ButtonNameMobile> */}

          <S.ButtonName>{createEventFormData.submitButtonName}</S.ButtonName>

          <SvgIcons icon={IconsMap.arrowRight} size="16px" />
        </Button>
      </S.Wrapper>

      <S.FormNoteText>{createEventFormData.note}</S.FormNoteText>
    </S.FormCreateEvent>
  );
};

export default FormCreateEvent;
