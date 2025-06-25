import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function ReverseArray() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={12}
        title="Реверс массива"
        description="Напишите функцию, которая принимает массив и возвращает новый массив с элементами в обратном порядке. Например, [1,2,3] → [3,2,1]. Не используйте встроенный reverse()."
        validationMode="function"
        functionName="reverseArray"
        defaultCode={`function reverseArray(arr) {
  
}`}
        testCases={[
          { input: [[1,2,3]], expected: [3,2,1], description: 'Три элемента' },
          { input: [[5]], expected: [5], description: 'Один элемент' },
          { input: [[]], expected: [], description: 'Пустой массив' },
          { input: [[1,2,3,4,5]], expected: [5,4,3,2,1], description: 'Пять элементов' },
        ]}
      />
      <NavButtons prev={'/js-practice/sum-to-n'} next={'/js-practice/compare-arrays'} />
    </section>
  )
} 