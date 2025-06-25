import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Memoization() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={39}
        title="Мемоизация (Memoization)"
        description="Напишите функцию memoize, которая кеширует результаты вызова другой функции."
        validationMode="function"
        functionName="memoization"
        defaultCode={`function memoize(fn) {
  
}`}
        testCases={[
          { input: [(x: number) => x*2], expected: undefined, description: 'memoize' },
        ]}
      />
      <NavButtons prev={'/js-practice/closure-task'} next={'/js-practice/swap-variables'} />
    </section>
  )
} 