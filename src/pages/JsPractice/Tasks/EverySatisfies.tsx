import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function EverySatisfies() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={15}
        title="Проверка всех элементов массива"
        description="Напишите функцию, которая возвращает true, если все элементы массива удовлетворяют условию (например, больше нуля), и false иначе."
        validationMode="function"
        functionName="everySatisfies"
        defaultCode={`function everySatisfies(arr) {
  
}`}
        testCases={[
          { input: [[1,2,3]], expected: true, description: 'Все положительные' },
          { input: [[0,1,2]], expected: false, description: 'Есть ноль' },
          { input: [[-1,2,3]], expected: false, description: 'Есть отрицательное' },
          { input: [[]], expected: true, description: 'Пустой массив (по определению)' },
        ]}
      />
      <NavButtons prev={'/js-practice/swap-first-last'} next={'/js-practice/deep-traverse'} />
    </section>
  )
} 