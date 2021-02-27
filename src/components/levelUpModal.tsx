import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import * as S from '../styles/components/levelUpModal';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <S.Button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </S.Button>
      </S.Container>
    </S.Overlay>
  );
}
