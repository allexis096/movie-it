import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/challengesContext';
import CountdownProvider from '../contexts/countdownContext';

import CompletedChallenges from '../components/completedChallenges';
import Countdown from '../components/countdown';
import ExperienceBar from '../components/experienceBar';
import Profile from '../components/profile';
import ChallengeBox from '../components/challengeBox';

import * as S from '../styles/pages/';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <S.Container>
        <Head>
          <title>Inicio | movie.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <S.Section>
            <S.LeftBar>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </S.LeftBar>
            <div>
              <ChallengeBox />
            </div>
          </S.Section>
        </CountdownProvider>
      </S.Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
