const API_URL = import.meta.env.VITE_API_URL || "";

export async function fetchQuestions() {
  const res = await fetch(`${API_URL}/question/allQuestions`);

  if (!res.ok) throw new Error("HTTP " + res.status);

  return res.json();
}