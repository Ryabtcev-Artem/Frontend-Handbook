import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function LimitedParallel() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={47}
        title="Ограниченный параллелизм (Limited Parallel)"
        description="Напишите функцию, которая выполняет не более N промисов одновременно."
        validationMode="function"
        functionName="limitedParallel"
        defaultCode={`function limitedParallel(tasks, limit) {
  
}`}
        testCases={[
          { input: [[], 2], expected: [], description: 'Пусто' },
        ]}
      />
      <NavButtons prev={'/js-practice/event-emitter'} next={'/js-practice/custom-new'} />
    </section>
  )
} 