import { useEffect, useState } from "react";
import { fetchQuestions } from "./api.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import QuestionList from "./components/QuestionList.jsx";
import QuestionView from "./components/QuestionView.jsx";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [current, setCurrent] = useState(null);
  const [answered, setAnswered] = useState({}); // id -> { choice, correct }

  useEffect(() => {
    fetchQuestions()
      .then((data) => {
        setQuestions(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const total = Object.keys(answered).length;
  const right = Object.values(answered).filter((a) => a.correct).length;

  const saveAnswer = (id, result) =>
    setAnswered((prev) => ({ ...prev, [id]: result }));

  return (
    <>
      <Header right={right} total={total} />
      <main>
        {status === "loading" && <p className="note">Loading questions…</p>}
        {status === "error" && (
          <p className="note">
            <b>Couldn't reach the quiz server.</b>
            <br />
            Check that the Spring Boot app is running on port 8080.
          </p>
        )}
        {status === "ready" && current === null && (
          <QuestionList
            questions={questions}
            answered={answered}
            onOpen={setCurrent}
          />
        )}
        {status === "ready" && current !== null && (
          <QuestionView
            question={current}
            previous={answered[current.id]}
            onSubmit={(result) => saveAnswer(current.id, result)}
            onBack={() => setCurrent(null)}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
