import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import * as S from '../styles/components/countdown';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  return (
    <div>
      <S.Container>
        <S.Time>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.Time>
        <span>:</span>
        <S.Time>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.Time>
      </S.Container>
      {hasFinished ? (
        <S.CountdownButton disabled>Ciclo encerrado</S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton active type="button" onClick={resetCountDown}>
              Abandonar ciclo
            </S.CountdownButton>
          ) : (
            <S.CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
