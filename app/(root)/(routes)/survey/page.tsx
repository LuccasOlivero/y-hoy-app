"use client";

import { useState } from "react";
import { questions } from "./data/survey";
import { Button } from "@/components/ui/button";

export default function Survey({ onSubmit }: { onSubmit: any }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChange = (optionId: number) => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers({ ...answers, [questionId]: optionId });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onSubmit(answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-y-2 mt-8 p-2">
        <h3 className="text-center text-3xl font-semibold text-pretty text-[#A98A4D] mb-4">
          {currentQuestion.title}
        </h3>

        {currentQuestion.options.map((option) => (
          <div key={option.id} className="w-full">
            <Button
              value={option.id}
              onClick={() => handleChange(option.id)}
              variant="secondary"
              className="bg-[#267b40] text-white rounded-md p-2 w-full"
            >
              {option.response}
            </Button>
          </div>
        ))}

        <p className="text-[#B89B62] text-sm">Me da igual</p>

        {currentQuestion.text.map((text, i) => (
          <p className="text-[#A98A4D] text-base" key={i}>
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
