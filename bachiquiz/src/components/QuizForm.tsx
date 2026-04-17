"use client";

import Image from "next/image";
import { useState } from "react";
import { questions } from "@/data/questions";
import ResultCard from "./ResultCard";

export default function QuizForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const question = questions[currentQuestion];
  const selectAnswer = answers[question.id]

  function handleSelect(optionIndex: number) {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionIndex,
    }));
  }

  

  async function handleSubmit(finalAnswers: Record<number, number>) {
    setLoading(true);

    // Convert selected answers into trait scores
    const traitTotals: Record<string, number> = {};

    questions.forEach((q) => {
      const selectedIndex = answers[q.id];
      if (selectedIndex === undefined) return;

      const effects = q.options[selectedIndex].effects;

      Object.entries(effects).forEach(([trait, value]) => {
        traitTotals[trait] = (traitTotals[trait] || 0) + (value || 0);
      });
    });

    const res = await fetch("/api/quiz-result", {
      method: "POST",
      body: JSON.stringify({ answers: traitTotals }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  function handleNext(){
    if(selectAnswer === undefined) return;

    if(currentQuestion < questions.length - 1){
        setCurrentQuestion((prev) => prev + 1);
    } else{
        handleSubmit(answers);
    }
  }

  if (result) {
    return (
      <div>
        <ResultCard result={result} />
        <button
            onClick={() => {
                setResult(null);
                setAnswers({});
                setCurrentQuestion(0);
            }}
        >Try Again</button>
      </div>
    );
  }

  return (
    <div>
        <h3 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 mb-6 ">
           {currentQuestion + 1} / {questions.length}
        </h3>

        

        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 mb-6 ">{question.text} </h2>

        {question.options.map((opt, index) => (
        <label
          key={index}
          className={`block cursor-pointer p-4 transition-all ${
            selectAnswer === index
              ? "border-blue-600 bg-red-200 shadow-sm"
              : "border-red-300 bg-red hover:border-red-400 hover:bg-red-50"
         }`}
        >
        <input
          type="radio"
          name={`question-${question.id}`}
          checked={selectAnswer === index}
          onChange={() => handleSelect(index)}
          className="hidden"
        />

        <span className="text-base font-medium text-gray-800">
          {opt.text}
        </span>
        </label>
      ))}
      
        <button
            onClick={handleNext}
            disabled={selectAnswer == undefined || loading}
            style={{marginTop: "1rem"}}
            className={`block cursor-pointer p-4 transition-all ${
              "border-red-300 bg-red hover:border-red-400 hover:bg-red-50"
         }`}
        >
          
          {currentQuestion === questions.length -1
                ? "Finish"
                : "Next"}
        </button>

      {loading && <p>Calculating...</p>}
      {question.image && (
            <div style={{marginBottom: "1rem"}} >
                <Image 
                    src = {question.image.src}
                    alt = {question.text}
                    width={500}
                    height={500}
                    style={{borderRadius: "12px", objectFit: "cover"}}
                    className="object-cover"
                />
            </div>
        )}
    </div>
    
  );
}