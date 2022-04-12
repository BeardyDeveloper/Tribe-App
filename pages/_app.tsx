import { TribeClient } from '@tribeplatform/gql-client';
import { Provider as TribeProvider } from '@tribeplatform/react-sdk';
import { getCookies, setCookies } from 'cookies-next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '$styles/GlobalStyles';
import { lightBase } from '$theme/lightBase';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const appConfigs = {
    title: process.env.APP_TITLE,
    description: process.env.APP_DESC,
  };

  const coocies = getCookies();
  const apiKey = coocies.apiKey;
  const userToken = coocies.userToken;

  const client = new TribeClient({
    clientId: 'f1377131-ee704a6e55e7',
    clientSecret: 'd3d601ed8a2d439c8ea472e58483be0a',
    graphqlUrl: 'https://app.tribe.so/graphql',
  });

  useEffect(() => {
    if (!apiKey) {
      client
        .generateToken({
          networkId: 'aKHuLUg2DF',
          memberId: 'Gz8lM5HZLi',
        })
        .then(async (accessToken: string) => {
          setCookies('apiKey', accessToken);
        });
    }
  }, [apiKey]);

  return (
    <>
      <Head>
        <title>{appConfigs.title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="application-name" content={appConfigs.title} />
        <meta name="description" content={appConfigs.description} />
        <meta
          name="msapplication-TileImage"
          content="/icons/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={lightBase}>
        <GlobalStyle language="en" />
        <TribeProvider
          config={{
            clientId: 'f1377131-ee704a6e55e7',
            clientSecret: 'd3d601ed8a2d439c8ea472e58483be0a',
            accessToken: userToken ?? apiKey,
            baseUrl: 'https://app.tribe.so/graphql',
            networkDomain: 'beardy-developer.tribeplatform.com',
            networkId: 'aKHuLUg2DF',
          }}
        >
          <Component {...pageProps} />
        </TribeProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
