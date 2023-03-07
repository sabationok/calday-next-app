import { Inter } from 'next/font/google';
import Layout from '@/components/Layout/Layout';
import HomePage from '@/components/Home/HomePage/HomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
