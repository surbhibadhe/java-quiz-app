export async function fetchQuestions() {
  const res = await fetch("/question/allQuestions");
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}
