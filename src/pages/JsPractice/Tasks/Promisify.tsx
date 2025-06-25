import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Promisify() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={44}
        title="Промисификация (Promisify)"
        description="Напишите функцию, которая преобразует функцию с колбэком в функцию, возвращающую Promise."
        validationMode="function"
        functionName="promisify"
        defaultCode={`function promisify(fn) {
  
}`}
        testCases={[
          { input: [function(cb: (x: number) => void) { cb(5); }], expected: 'function', description: 'Промисификация' },
        ]}
      />
      <NavButtons prev={'/js-practice/retry-function'} next={'/js-practice/custom-promise-all'} />
    </section>
  )
} 