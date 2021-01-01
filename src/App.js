import { useState } from "react";
import FlashCardList from "./components/FlashCardList";

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  return <FlashCardList flashCards={flashCards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "What is 4+4?",
    answer: "8",
    options: ["8", "3", "4", "5"],
  },
  {
    id: 3,
    question: "What is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
];

export default App;
