import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomReduce() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={26}
        title="Своя реализация reduce (Custom Reduce)"
        description="Напишите функцию, которая реализует поведение Array.prototype.reduce."
        validationMode="function"
        functionName="customReduce"
        defaultCode={`function customReduce(arr, fn, initial) {
  
}`}
        testCases={[
          { input: [[1,2,3], (a: number, b: number) => a+b, 0], expected: 6, description: 'Сумма' },
          { input: [[1,2,3], (a: number, b: number) => a*b, 1], expected: 6, description: 'Произведение' },
          { input: [[], (a: number, b: number) => a+b, 10], expected: 10, description: 'Пустой массив' },
          { input: [[5], (a: number, b: number) => a+b, 100], expected: 105, description: 'Один элемент' },
          { input: [[1,2,3,4], (a: number, b: number) => a-b, 10], expected: 0, description: 'Вычитание' },
          { input: [['a','b','c'], (a: string, b: string) => a+b, '' ], expected: 'abc', description: 'Строки' },
          { input: [[true, false, true], (a: boolean, b: boolean) => a && b, true], expected: false, description: 'Булевы значения (AND)' },
          { input: [[1,2,3,4], (a: number, b: number) => a, 0], expected: 1, description: 'Возврат только первого аргумента' },
          { input: [[1,2,3,4], (a: number, b: number) => b, 0], expected: 4, description: 'Возврат только второго аргумента' },
          { input: [[1,2,3,4], (a: number, b: number) => a + b, undefined], expected: NaN, description: 'Нет initial (undefined)' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-map'} next={'/js-practice/sum-chain'} />
    </section>
  )
} 