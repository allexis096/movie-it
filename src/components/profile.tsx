import * as S from '../styles/components/profile';

export default function Profile() {
  return (
    <S.Container>
      <img src="https://github.com/allexis096.png" alt="allexis figueiredo" />
      <S.LevelAndName>
        <strong>Allexis Figueiredo</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </S.LevelAndName>
    </S.Container>
  );
}
