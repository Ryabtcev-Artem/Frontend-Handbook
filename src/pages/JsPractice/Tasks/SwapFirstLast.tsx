import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function SwapFirstLast() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={14}
        title="Обмен первого и последнего элемента массива"
        description="Напишите функцию, которая меняет местами первый и последний элементы массива. Если массив состоит из одного элемента или пуст, возвращайте его без изменений."
        validationMode="function"
        functionName="swapFirstLast"
        defaultCode={`function swapFirstLast(arr) {
  
}`}
        testCases={[
          { input: [[1,2,3,4]], expected: [4,2,3,1], description: 'Четыре элемента' },
          { input: [[5]], expected: [5], description: 'Один элемент' },
          { input: [[]], expected: [], description: 'Пустой массив' },
          { input: [[7,8]], expected: [8,7], description: 'Два элемента' },
        ]}
      />
      <NavButtons prev={'/js-practice/compare-arrays'} next={'/js-practice/every-satisfies'} />
    </section>
  )
} 