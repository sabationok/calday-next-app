import Button from '@/components/Button/Button';
import * as S from './FormCreateEvent.style';

const FormCreateEvent: React.FC = () => {
  return (
    <S.FormCreateEvent>
      <S.Inputs>
        <S.InputBox>
          <input type="text" />
        </S.InputBox>

        <S.InputBox>
          <input type="text" />
        </S.InputBox>
      </S.Inputs>

      <Button variant="filled">GET YOUR LINK</Button>
    </S.FormCreateEvent>
  );
};

export default FormCreateEvent;
