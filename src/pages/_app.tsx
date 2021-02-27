import { ChallengesProvider } from '../contexts/challengesContext';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ChallengesProvider>
  );
}

export default MyApp;
