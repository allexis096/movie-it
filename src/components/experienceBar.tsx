import * as S from '../styles/components/experienceBar';

export default function ExperienceBar() {
  return (
    <S.Experience>
      <span>0 xp</span>
      <S.Bar>
        <div style={{ width: '60%' }} />
        <S.CurrentExperience style={{ left: '50%' }}>
          300 xp
        </S.CurrentExperience>
      </S.Bar>
      <span>600xp</span>
    </S.Experience>
  );
}
