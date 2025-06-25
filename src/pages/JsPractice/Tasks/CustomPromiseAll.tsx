import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomPromiseAll() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={45}
        title="Своя реализация Promise.all (Custom PromiseAll)"
        description="Напишите функцию, которая реализует поведение Promise.all."
        validationMode="function"
        functionName="customPromiseAll"
        defaultCode={`function customPromiseAll(promises) {
  
}`}
        testCases={[
          { input: [[Promise.resolve(1), Promise.resolve(2)]], expected: 'promise', description: 'Promise.all' },
        ]}
      />
      <NavButtons prev={'/js-practice/promisify'} next={'/js-practice/event-emitter'} />
    </section>
  )
} 