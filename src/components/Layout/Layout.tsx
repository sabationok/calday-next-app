import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SectionMain from '../SectionMain/SectionMain';

import * as S from './Layout.style';

type LayoutProps = {
  title?: string;
  description?: string;
  children?: any[];
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Calday'}</title>
        <meta name="description" content={description || 'Calday project'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.LayoutGradient>
        <Header />

        <SectionMain />

        <Footer />
      </S.LayoutGradient>
    </>
  );
}
