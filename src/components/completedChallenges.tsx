import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import * as S from '../styles/components/completedChallenges';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  );
}
