import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import { CountdownContext } from '../contexts/countdownContext';
import * as S from '../styles/components/challengeBox';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <S.MainChallenge>
            <img src={`icons/${activeChallenge.type}.svg`} alt="anything" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </S.MainChallenge>

          <S.FootterButtons>
            <S.Button
              action="failed"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </S.Button>
            <S.Button
              action="succeeded"
              type="button"
              onClick={handleChallengeSucceded}
            >
              Completei
            </S.Button>
          </S.FootterButtons>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de levels completando desafio.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  );
}
