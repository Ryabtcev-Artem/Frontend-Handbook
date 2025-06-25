import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomSort() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={31}
        title="Своя реализация sort (Custom Sort)"
        description="Напишите функцию, которая реализует поведение Array.prototype.sort для чисел."
        validationMode="function"
        functionName="customSort"
        defaultCode={`function customSort(arr) {
  
}`}
        testCases={[
          { input: [[3,1,2]], expected: [1,2,3], description: 'Сортировка' },
          { input: [[1]], expected: [1], description: 'Один элемент' },
          { input: [[]], expected: [], description: 'Пустой массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/countdown-timer'} next={'/js-practice/format-date'} />
    </section>
  )
} 