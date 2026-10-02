export default function Header({ right, total }) {
  return (
    <header>
      <div className="brand">Quiz Application</div>
      <div className="score" aria-live="polite">
        Score {right} / {total}
      </div>
    </header>
  );
}
