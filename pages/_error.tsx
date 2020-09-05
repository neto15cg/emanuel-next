import React from 'react';
import Head from 'next/head';
import { AmpProvider } from '@utils/AmpContext';
import { useAmp } from 'next/amp';
import Layout from '@components/layout/Layout';

function Error({ statusCode }: any) {
  const isAmp = useAmp();
  return (
    <AmpProvider isAmp={isAmp}>
      <Head>
        <title>Erro {statusCode}</title>
        <meta charSet="utf-8" />
        <meta name="Description" content="" />
      </Head>
      <Layout>
        <main>Erro {statusCode}</main>
      </Layout>
    </AmpProvider>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
