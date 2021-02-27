import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import * as S from '../styles/components/experienceBar';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.floor(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.Experience>
      <span>0 xp</span>
      <S.Bar>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <S.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </S.CurrentExperience>
      </S.Bar>
      <span>{experienceToNextLevel}xp</span>
    </S.Experience>
  );
}
