import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SectionBuyNow from '../SectionBuyNow/SectionBuyNow';
import SectionFAQ from '../SectionFAQ/SectionFAQ';
import SectionFeatures from '../SectionFeatures/SectionFeatures';
import SectionHero from '../SectionHero/SectionHero';
import SectionShedulingInfo from '../SectionShedulingInfo/SectionShedulingInfo';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionFeatures />
        <SectionShedulingInfo />
        {/* <SectionByCustomers /> */}
        <SectionFAQ />
        <SectionBuyNow />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
