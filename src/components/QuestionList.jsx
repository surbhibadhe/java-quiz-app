export default function QuestionList({ questions, answered, onOpen }) {
  return (
    <>
      <h1>Pick a question</h1>
      <p className="sub">Choose any question to answer it.</p>

      {questions.length === 0 ? (
        <p className="note">No questions found. Add some with POST /question/add.</p>
      ) : (
        <div className="list">
          {questions.map((q) => {
            const a = answered[q.id];
            const info = [q.category, q.difficultylevel].filter(Boolean).join(", ");
            return (
              <button key={q.id} type="button" className="q" onClick={() => onOpen(q)}>
                <span>
                  <span className="t">{q.questionTitle}</span>
                  {info && <span className="m">{info}</span>}
                </span>
                <span className={"dot" + (a ? (a.correct ? " ok" : " bad") : "")}>
                  {a ? (a.correct ? "✓" : "✕") : "+"}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
