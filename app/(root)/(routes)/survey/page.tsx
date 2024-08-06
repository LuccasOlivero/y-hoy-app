"use client";

import { useState } from "react";
import { questions } from "./data/survey";
import { Button } from "@/components/ui/button";

export default function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChange = (optionId: number) => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers({ ...answers, [questionId]: optionId });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (questions.length === currentQuestionIndex + 1) return; // TODO: modal window with the results
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-y-2 mt-8 p-2">
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
      </div>

      <p className="absolute bottom-0 left-0 text-[#267b40] text-sm w-full text-center pb-2">
        Vover al menu completo
      </p>
    </>
  );
}
