import React from "react";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CountVowels() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={4}
        title="Простое ли число?"
        description="Простое число — это натуральное число больше 1, которое имеет ровно два положительных делителя: 1 и само себя. Например, числа 2, 3, 5, 7, 11 являются простыми, а 4, 6, 8, 9 — составными. Напишите функцию, которая проверяет, является ли переданное число простым. Функция должна возвращать true для простых чисел и false для составных чисел и чисел меньше 2."
        functionName="isPrime"
        defaultCode={`function isPrime(num) { 
   
}`}
        examples={[
          "isPrime(2)",
          "isPrime(3)",
          "isPrime(4)",
          "isPrime(17)",
          "isPrime(25)",
          "isPrime(1)",
          "isPrime(0)",
          "isPrime(-5)"
        ]}
        answers={[
          [true],
          [true],
          [false],
          [true],
          [false],
          [false],
          [false],
          [false]
        ]}
      />


      <NavButtons
        prev={'/js-practice/max-min-in-array'}
        next={'/js-practice/count-vowels'}
      />
    </section>
  )
}