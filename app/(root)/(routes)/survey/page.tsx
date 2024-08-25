"use client";

import { useState } from "react";
import { questions } from "./data/survey";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPortal } from "react-dom";
// import confetti from "canvas-confetti";

export default function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(false);

  const handleChange = (optionId: number) => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers({ ...answers, [questionId]: optionId });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (questions.length === currentQuestionIndex + 1) {
        // confetti();
        setResult(true);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center gap-y-2 mt-8 p-2">
        <h3 className="text-center text-3xl font-semibold text-pretty text-[#A98A4D] mb-4">
          {currentQuestion.title}
        </h3>
        <div className="w-full grid grid-cols-2 gap-3">
          {currentQuestion.options.map((option) => (
            <Button
              key={option.id}
              value={option.id}
              onClick={() => handleChange(option.id)}
              variant="secondary"
              disabled={result}
              className="h-[5rem] shadow-[0_4px_0_0] shadow-[#B89B62] text-sm px-8 active:translate-y-1 active:shadow-none transition-all duration-200 text-slate-50 bg-gradient-to-r from-[#267b40] to-[#2F9D5C] hover:to-[#267b40] hover:from-[#309A50]"
            >
              {option.response}
            </Button>
          ))}
        </div>
        <p className="text-[#B89B62] text-sm mt-2">Me da igual</p>
        {currentQuestion.text.map((text, i) => (
          <p className="text-[#A98A4D] text-base text-center" key={i}>
            {text["en"]}
          </p>
        ))}

        {result ? <ResultSurvey /> : null}
      </div>
      <p className="absolute bottom-0 left-0 text-[#267b40] text-sm w-full text-center pb-2">
        Vover al menu completo
      </p>
    </>
  );
}

function ResultSurvey() {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-custom-2 rounded-lg w-11/12 max-w-md mx-auto p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-balance text-[#267b40] text-center">
            Tu trago perfecto para hoy es:
          </h3>

          <span className="text-2xl font-bold mb-8">TRAGO</span>

          <Button
            className="shadow-[0_4px_0_0] shadow-[#B89B62] text-sm px-8 active:translate-y-1 active:shadow-none transition-all duration-200 mt-10 text-slate-50 bg-gradient-to-r from-[#267b40] to-[#2F9D5C] hover:to-[#267b40] hover:from-[#309A50]"
            variant="secondary"
            size="lg"
          >
            <Link href="/">Volver al Menú</Link>
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
