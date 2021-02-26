import { useEffect, useState } from 'react';
import * as S from '../styles/components/countdown';

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <S.CountdownButton type="button" onClick={startCountDown}>
        Iniciar um ciclo
      </S.CountdownButton>
    </div>
  );
}
