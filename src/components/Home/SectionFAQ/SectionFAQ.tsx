import FAQListItem from './FAQListItem/FAQListItem';
import testData from '@/testData';

import * as S from './SectionFAQ.style';
import { useState } from 'react';

const { faqList } = testData.faqSectionData;

const SectionFAQ: React.FC = () => {
  const [current, setCurrent] = useState<null | number>();

  const onItemClick = (idx?: number) => {
    setCurrent(prev => (prev === idx ? null : idx));
  };

  return (
    <S.SectionFAQ>
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
    </S.SectionFAQ>
  );
};

export default SectionFAQ;
