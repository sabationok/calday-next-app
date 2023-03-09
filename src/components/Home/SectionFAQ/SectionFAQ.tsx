import FAQListItem from './FAQListItem/FAQListItem';
import testData from '@/testData';

import * as S from './SectionFAQ.style';
import { useState } from 'react';
import SG from '@/styles';

const { faqList } = testData.faqSectionData;

const SectionFAQ: React.FC = () => {
  const [current, setCurrent] = useState<null | number>();

  const onItemClick = (idx?: number) => {
    setCurrent(prev => (prev === idx ? null : idx));
  };

  return (
    <S.SectionFAQ>
      <SG.Container>
        <S.Title>FAQ</S.Title>

        <S.FAQList>
          {faqList.map((item, idx) => {
            return (
              <FAQListItem
                key={item.id}
                {...item}
                onClick={() => onItemClick(idx)}
                isOpen={current === idx}
              />
            );
          })}
        </S.FAQList>
      </SG.Container>
    </S.SectionFAQ>
  );
};

export default SectionFAQ;
