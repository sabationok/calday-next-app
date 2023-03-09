import FooterList from './FooterList/FooterList';
import testData from '@/testData';

import * as S from './Footer.style';
import SG from '@/styles';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <SG.Container>
        <S.FooterWrapper>
          <FooterList />

          <S.Copyright>{testData.footerData.copyright}</S.Copyright>
        </S.FooterWrapper>
      </SG.Container>
    </S.Footer>
  );
};

export default Footer;
