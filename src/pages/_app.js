import '../styles/index.scss';

import PageLayout from '../components/Shared/PageLayout';

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
