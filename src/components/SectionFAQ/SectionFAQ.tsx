import FAQListItem from './FAQListItem/FAQListItem';
import testData from '@/testData';

import * as S from './SectionFAQ.style';

const { faqList } = testData.faqSectionData;

const SectionFAQ: React.FC = () => {
  return (
    <S.SectionFAQ>
      <S.Title>FAQ</S.Title>

      <S.FAQList>
        {faqList.map(item => {
          return <FAQListItem key={item.id} {...item} />;
        })}
      </S.FAQList>
    </S.SectionFAQ>
  );
};

export default SectionFAQ;
