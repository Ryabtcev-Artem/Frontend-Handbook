import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function EventEmitter() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={46}
        title="EventEmitter"
        description="Напишите класс EventEmitter с методами on, off, emit."
        validationMode="function"
        functionName="eventEmitter"
        defaultCode={`class EventEmitter {
  
}`}
        testCases={[
          { input: [], expected: 'object', description: 'Экземпляр' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-promise-all'} next={'/js-practice/limited-parallel'} />
    </section>
  )
} 