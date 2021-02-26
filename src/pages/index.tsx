import { ExperienceBar } from '../components/ExperienceBar';

export default function Home() {
  return (
    <>
      <div
        style={{
          height: '100vh',
          maxWidth: '992px',
          margin: '0 auto',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ExperienceBar />
      </div>
    </>
  );
}
