import { useState, useEffect } from "react";
import FlashCardList from "./components/FlashCardList";
import axios from "axios";

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=20").then((res) => {
      setFlashCards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `$(index)+$(Date.now())`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5), // To sort options randomly
          };
        })
      );
      console.log(res);
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

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
