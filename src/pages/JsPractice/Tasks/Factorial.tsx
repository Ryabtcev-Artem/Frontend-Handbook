import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Factorial() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={8}
        title="Вычисление факториала"
        description="Факториал числа n (обозначается n!) — это произведение всех натуральных чисел от 1 до n включительно. Например, 5! = 1×2×3×4×5 = 120. Напишите функцию, которая принимает неотрицательное целое число и возвращает его факториал. 0! по определению равен 1. Попробуйте реализовать через цикл и рекурсию."
        validationMode="function"
        functionName="factorial"
        defaultCode={`function factorial(n) {
  
}`}
        testCases={[
          { input: [0], expected: 1, description: '0! = 1' },
          { input: [1], expected: 1, description: '1! = 1' },
          { input: [5], expected: 120, description: '5! = 120' },
          { input: [7], expected: 5040, description: '7! = 5040' },
          { input: [10], expected: 3628800, description: '10! = 3628800' },
        ]}
      />
      <NavButtons prev={'/js-practice/reverse-string'} next={'/js-practice/is-empty'} />
    </section>
  )
} 