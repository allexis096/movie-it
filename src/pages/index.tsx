import Head from 'next/head';
import CompletedChallenges from '../components/completedChallenges';
import Countdown from '../components/countdown';
import ExperienceBar from '../components/experienceBar';
import Profile from '../components/profile';

import * as S from '../styles/pages/';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Inicio | movie.it</title>
      </Head>

      <ExperienceBar />

      <S.Section>
        <S.LeftBar>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </S.LeftBar>
        <div></div>
      </S.Section>
    </S.Container>
  );
}
