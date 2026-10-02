import { useState } from "react";

// rightAnswer can be the option text ("Java") or the field name ("option2")
function isRight(q, key, text) {
  const ans = String(q.rightAnswer ?? "").trim().toLowerCase();
  return ans === String(text).trim().toLowerCase() || ans === key.toLowerCase();
}

export default function QuestionView({ question: q, previous, onSubmit, onBack }) {
  const [selected, setSelected] = useState(previous ? previous.choice : null);
  const [submitted, setSubmitted] = useState(Boolean(previous));
  const [correct, setCorrect] = useState(previous ? previous.correct : false);

  const options = ["option1", "option2", "option3", "option4"]
    .map((key) => ({ key, text: q[key] }))
    .filter((o) => o.text != null && o.text !== "");

  const info = [q.category, q.difficultylevel].filter(Boolean).join(", ");

  const handleSubmit = () => {
    const chosen = options.find((o) => o.text === selected);
    const ok = isRight(q, chosen.key, chosen.text);
    setCorrect(ok);
    setSubmitted(true);
    onSubmit({ choice: selected, correct: ok });
  };

  const optionClass = (o) => {
    if (submitted) {
      if (isRight(q, o.key, o.text)) return "opt right";
      if (o.text === selected) return "opt wrong";
      return "opt";
    }
    return o.text === selected ? "opt sel" : "opt";
  };

  return (
    <>
      <button type="button" className="back" onClick={onBack}>
        ← All questions
      </button>

      <section className="panel">
        <h2>{q.questionTitle}</h2>
        <p className="meta">{info || "Choose the right answer"}</p>

        <div className="grid">
          {options.map((o) => (
            <button
              key={o.key}
              type="button"
              className={optionClass(o)}
              disabled={submitted}
              onClick={() => setSelected(o.text)}
            >
              {o.text}
            </button>
          ))}
        </div>

        <p className={"result " + (submitted ? (correct ? "ok" : "bad") : "")} aria-live="polite">
          {submitted && (correct ? "Correct" : "Not quite. The right answer is highlighted.")}
        </p>

        {submitted ? (
          <button type="button" className="go dark" onClick={onBack}>
            Back to questions
          </button>
        ) : (
          <button type="button" className="go" disabled={selected === null} onClick={handleSubmit}>
            Submit answer
          </button>
        )}
      </section>
    </>
  );
}
