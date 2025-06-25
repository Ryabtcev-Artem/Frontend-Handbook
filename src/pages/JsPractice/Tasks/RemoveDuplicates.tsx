import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function RemoveDuplicates() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={6}
        title="Удаление дубликатов из массива"
        description="Напишите функцию, которая принимает массив и возвращает новый массив без дубликатов. Порядок элементов должен сохраняться. Например, removeDuplicates([1,2,2,3,1]) → [1,2,3]. Попробуйте реализовать через Set, цикл или другие способы."
        validationMode="function"
        functionName="removeDuplicates"
        defaultCode={`function removeDuplicates(arr) { 
  
}`}
        testCases={[
          {
            input: [[1, 2, 2, 3, 1]],
            expected: [1, 2, 3],
            description: 'Удаляет дубликаты из [1,2,2,3,1]'
          },
          {
            input: [[5, 5, 5, 5]],
            expected: [5],
            description: 'Все элементы одинаковые'
          },
          {
            input: [[1, 2, 3, 4]],
            expected: [1, 2, 3, 4],
            description: 'Нет дубликатов'
          },
          {
            input: [[]],
            expected: [],
            description: 'Пустой массив'
          },
          {
            input: [[0, false, 0, false, true]],
            expected: [0, false, true],
            description: 'Смешанные типы: 0, false, true'
          },
          {
            input: [[1, 2, 2, 3, 1]],
            expected: [1, 2, 3],
            description: 'Числа с дубликатами'
          }
        ]}
      />

      <NavButtons
        prev={'/js-practice/is-prime'}
        next={'/js-practice/reverse-string'}
      />
    </section>
  )
}