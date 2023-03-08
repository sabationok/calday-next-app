import * as S from './EventItems.style';

import testData from '@/testData';
import DecoreItem from './DecoreItem/EventItem';

const EventItems: React.FC = () => {
  const { eventItemLeft, eventItemRight } = testData.heroSectionData.heroImage;
  return (
    <S.EventItemsContainer>
      <DecoreItem {...eventItemLeft} style={{ top: 0, left: 0 }} />

      <DecoreItem {...eventItemRight} style={{ bottom: 0, right: 0 }} />
    </S.EventItemsContainer>
  );
};

export default EventItems;
