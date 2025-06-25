import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function MaxMinInArray() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={3}
        title="Максимум и минимум в массиве"
        description="В этой задаче вам предстоит найти самое большое и самое маленькое число в массиве. Например, в [1, 5, -3, 9] — минимум -3, максимум 9. Напишите функцию, которая возвращает массив из двух чисел: [min, max].
Попробуйте решить разными способами: через цикл, встроенные методы массива, либо рекурсивно. Math.min / Math.max использовать не нужно — реализуйте логику вручную."
        validationMode="function"
        functionName="minMax"
        defaultCode={`function minMax(arr) { 
  
}`}
        testCases={[
          {
            input: [[1, 5, -3, 9]],
            expected: [-3, 9],
            description: 'Обычный массив с положительными и отрицательными числами'
          },
          {
            input: [[42]],
            expected: [42, 42],
            description: 'Один элемент — минимум и максимум совпадают'
          },
          {
            input: [[0, 0, 0]],
            expected: [0, 0],
            description: 'Все значения одинаковые'
          },
          {
            input: [[100, -100, 50, 0]],
            expected: [-100, 100],
            description: 'Широкий диапазон'
          },
          {
            input: [[3, 2, 1, 0, -1, -2]],
            expected: [-2, 3],
            description: 'От положительных к отрицательным'
          }
        ]}
      />

      <NavButtons
        prev={'/js-practice/is-palindrome'}
        next={'/js-practice/count-vowels'}
      />
    </section>
  )
}