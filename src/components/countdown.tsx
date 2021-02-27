import { useContext } from 'react';
import { CountdownContext } from '../contexts/countdownContext';
import * as S from '../styles/components/countdown';

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
            <S.CountdownButton active type="button" onClick={resetCountdown}>
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
