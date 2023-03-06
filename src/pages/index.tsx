import { Inter } from 'next/font/google';
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import SectionHero from '@/components/SectionMain/SectionHero';
import Footer from '@/components/Footer/Footer';

import s from '@/styles/Home.module.css';
import SectionFeatures from '@/components/SectionFeatures/SectionFeatures';
import SectionShedulingInfo from '@/components/SectionShedulingInfo/SectionShedulingInfo';
import SectionByCustomers from '@/components/SectionByCustomers/SectionByCustomers';
import SectionFAQ from '@/components/SectionFAQ/SectionFAQ';
import SectionBuyNow from '@/components/SectionBuyNow/SectionBuyNow';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout>
        <Header />

        <SectionHero />

        <SectionFeatures />

        <SectionShedulingInfo />

        <SectionByCustomers />

        <SectionFAQ />

        <SectionBuyNow />

        <Footer />
      </Layout>
    </>
  );
}
