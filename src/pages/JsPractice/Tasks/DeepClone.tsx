import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DeepClone() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={35}
        title="Глубокое копирование объекта (Deep Clone)"
        description="Напишите функцию, которая делает глубокую копию объекта (все вложенные объекты и массивы должны быть скопированы)."
        validationMode="function"
        functionName="deepClone"
        defaultCode={`function deepClone(obj) {
  
}`}
        testCases={[
          { input: [{a:1,b:{c:2}}], expected: {a:1,b:{c:2}}, description: 'Вложенный объект' },
          { input: [[1,2,3]], expected: [1,2,3], description: 'Массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/debounce-throttle'} next={'/js-practice/hoisting-quiz'} />
    </section>
  )
} 