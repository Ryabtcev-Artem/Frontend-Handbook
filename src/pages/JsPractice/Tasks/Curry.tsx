import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Curry() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={27}
        title="Каррирование (Curry)"
        description="Напишите функцию curry, которая принимает функцию и возвращает каррированную версию. Например, curry((a,b,c) => a+b+c) должна позволять вызывать: curryFn(1)(2)(3) → 6."
        validationMode="function"
        functionName="curry"
        defaultCode={`function curry(fn, ...args) {
  
}`}
        testCases={[
          { input: ["(a, b, c) => a + b + c"], expected: 6, description: 'Сложение трех чисел' },
          { input: ["(a, b) => a * b"], expected: 10, description: 'Умножение двух чисел' },
          { input: ["(x) => x * 2"], expected: 6, description: 'Удвоение числа' },
          { input: ["(a, b, c, d) => a + b + c + d"], expected: 10, description: 'Сложение четырех чисел' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-reduce'} next={'/js-practice/flatten-array'} />
    </section>
  )
} 