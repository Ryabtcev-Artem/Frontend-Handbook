import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Fibonacci() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={17}
        title="Числа Фибоначчи"
        description="Числа Фибоначчи — это последовательность, в которой каждое число равно сумме двух предыдущих, начиная с 0 и 1. Например: 0, 1, 1, 2, 3, 5, 8, ... Напишите функцию, которая возвращает n-е число Фибоначчи. Попробуйте реализовать через цикл и рекурсию."
        validationMode="function"
        functionName="fibonacci"
        defaultCode={`function fibonacci(n) {
  
}`}
        testCases={[
          { input: [0], expected: 0, description: '0-е число' },
          { input: [1], expected: 1, description: '1-е число' },
          { input: [5], expected: 5, description: '5-е число' },
          { input: [7], expected: 13, description: '7-е число' },
          { input: [10], expected: 55, description: '10-е число' },
        ]}
      />
      <NavButtons prev={'/js-practice/frequency-map'} next={'/js-practice/anagrams'} />
    </section>
  )
} 