import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function SumToN() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={11}
        title="Сумма чисел от 1 до N"
        description="Напишите функцию, которая возвращает сумму всех целых чисел от 1 до n включительно. Например, sumToN(5) → 15 (1+2+3+4+5). Попробуйте реализовать через цикл и рекурсию."
        validationMode="function"
        functionName="sumToN"
        defaultCode={`function sumToN(n) {
  
}`}
        testCases={[
          { input: [1], expected: 1, description: 'n = 1' },
          { input: [5], expected: 15, description: 'n = 5' },
          { input: [10], expected: 55, description: 'n = 10' },
          { input: [0], expected: 0, description: 'n = 0' },
        ]}
      />
      <NavButtons prev={'/js-practice/capitalize-words'} next={'/js-practice/reverse-array'} />
    </section>
  )
} 