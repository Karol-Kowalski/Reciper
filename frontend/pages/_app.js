import Page from '../components/Page';

function MyApp({ pageProps, Component, apollo }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
