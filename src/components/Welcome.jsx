import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

import imgQuiz from "../assets/img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome">
      <h1>Seja bem-vindo</h1>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={imgQuiz} alt="Início do Quiz" />
    </div>
  );
};
export default Welcome;
