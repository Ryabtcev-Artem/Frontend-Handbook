import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function SecondLargest() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={20}
        title="Второй по величине элемент"
        description="Напишите функцию, которая возвращает второй по величине элемент в массиве чисел. Если такого нет (массив слишком короткий), возвращайте null."
        validationMode="function"
        functionName="secondLargest"
        defaultCode={`function secondLargest(arr) {
  
}`}
        testCases={[
          { input: [[1, 2, 3, 4]], expected: 3, description: 'Второй максимум — 3' },
          { input: [[5, 1, 5, 3]], expected: 5, description: 'Два максимума' },
          { input: [[7]], expected: null, description: 'Один элемент' },
          { input: [[2, 2, 2]], expected: 2, description: 'Все одинаковые' },
          { input: [[]], expected: null, description: 'Пустой массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/anagrams'} next={'/js-practice/remove-item'} />
    </section>
  )
} 