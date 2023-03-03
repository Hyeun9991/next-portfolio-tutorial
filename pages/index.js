import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/home/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eh Portfolio</title>
        <meta name="description" content="제발 취업하기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
          
        </div>
      </section>
    </Layout>
  );
}
