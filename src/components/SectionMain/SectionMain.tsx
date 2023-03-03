import * as S from './SectionMain.style';
import SG from '@/styles';
import Advantages from './Advantages/Advantages';
import MainTitle from './MainTitle/MainTitle';
import MainSubTitle from './MainSubTitle/MainSubTitle';
import FormCreateEvent from './FormCreateEvent/FormCreateEvent';

const advantagesList = [
  {
    iconId: '',
    title: '24/7 booking',
    descr: 'Clients can schedule appointments while you are sleeping',
  },
  {
    iconId: '',
    title: 'Less no-shows',
    descr: 'We will remind your clients about upcoming appointments',
  },
  {
    iconId: '',
    title: 'No empty slots',
    descr: 'Waitlist can help you to feel canceled appointments',
  },
  {
    iconId: '',
    title: 'Manage Clients',
    descr: 'Store & manage clients info and contacts',
  },
];

const SectionMain: React.FC = () => {
  return (
    <>
      <S.SectionMain>
        <SG.Container>
          <S.FlexWrapper>
            <MainTitle title="Small Business Scheduling Software" />

            <MainSubTitle subTitle="Our appointment scheduler allows you to easily manage your appointments, send automated reminders, and customize your availability. Plus, with our intuitive interface and powerful features" />

            <FormCreateEvent />
          </S.FlexWrapper>
        </SG.Container>

        <Advantages advantagesList={advantagesList} />
      </S.SectionMain>
    </>
  );
};

export default SectionMain;
