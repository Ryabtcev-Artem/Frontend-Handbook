import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomMap() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={25}
        title="Своя реализация map (Custom Map)"
        description="Напишите функцию, которая реализует поведение Array.prototype.map."
        validationMode="function"
        functionName="customMap"
        defaultCode={`function customMap(arr, fn) {
  
}`}
        testCases={[
          { input: [[1,2,3], (x) => x*2], expected: [2,4,6], description: 'Удвоение' },
          { input: [[1,2,3], (x) => x+1], expected: [2,3,4], description: 'Прибавить 1' },
          { input: [[], (x) => x], expected: [], description: 'Пустой массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/intersection'} next={'/js-practice/custom-reduce'} />
    </section>
  )
} 