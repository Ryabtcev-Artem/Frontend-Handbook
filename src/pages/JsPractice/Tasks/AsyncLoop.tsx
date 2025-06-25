import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function AsyncLoop() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={42}
        title="Асинхронный цикл (Async Loop)"
        description="Напишите функцию, которая выполняет асинхронные операции в цикле последовательно."
        validationMode="function"
        functionName="asyncLoop"
        defaultCode={`async function asyncLoop(arr, asyncFn) {
  
}`}
        testCases={[
          { input: [[1,2,3], async (x: number) => x], expected: undefined, description: 'Асинхронный цикл' },
        ]}
      />
      <NavButtons prev={'/js-practice/once-function'} next={'/js-practice/retry-function'} />
    </section>
  )
} 