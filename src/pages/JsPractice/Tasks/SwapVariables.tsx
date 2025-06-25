import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function SwapVariables() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={1}
        title="Обмен значений переменных"
        description="Поменяйте местами значения двух переменных без использования третьей переменной. Задачу желательно решить с помощью деструктуризации."
        validationMode="function"
        functionName="swap"
        defaultCode={`function swap(a, b) {
  
}`}
        testCases={[
          {input: [5, 10], expected: [10, 5], description: 'Обмен чисел'},
          {input: ['x', 'y'], expected: ['y', 'x'], description: 'Обмен строк'},
          {
            input: [true, false],
            expected: [false, true],
            description: 'Обмен булевых значений'
          },
          {
            input: [null, undefined],
            expected: [undefined, null],
            description: 'Обмен null и undefined'
          },
          {
            input: [[1, 2], [3, 4]],
            expected: [[3, 4], [1, 2]],
            description: 'Обмен массивов'
          }
        ]}
      />
      <NavButtons
        prev={'/js-practice'}
        next={'/js-practice/is-palindrome'}
      />
    </section>
  )
}