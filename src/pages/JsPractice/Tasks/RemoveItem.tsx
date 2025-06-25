import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function RemoveItem() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={21}
        title="Удаление элемента из массива"
        description="Напишите функцию, которая удаляет все вхождения заданного значения из массива. Например, removeItem([1,2,3,2], 2) → [1,3]."
        validationMode="function"
        functionName="removeItem"
        defaultCode={`function removeItem(arr, value) {
  
}`}
        testCases={[
          { input: [[1,2,3,2], 2], expected: [1,3], description: 'Удалить 2' },
          { input: [[5,5,5], 5], expected: [], description: 'Удалить все' },
          { input: [[1,2,3], 4], expected: [1,2,3], description: 'Нет такого элемента' },
          { input: [[], 1], expected: [], description: 'Пустой массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/second-largest'} next={'/js-practice/group-by'} />
    </section>
  )
} 