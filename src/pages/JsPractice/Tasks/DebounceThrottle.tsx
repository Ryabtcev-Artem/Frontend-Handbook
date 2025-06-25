import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DebounceThrottle() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={34}
        title="Debounce и Throttle"
        description="Напишите две функции: debounce и throttle. Первая вызывает callback только после паузы, вторая — не чаще, чем раз в заданный интервал."
        validationMode="function"
        functionName="debounceThrottle"
        defaultCode={`function debounce(fn, delay) {
  
}

function throttle(fn, interval) {
  
}`}
        testCases={[
          { input: [() => {}, 100], expected: undefined, description: 'debounce' },
          { input: [() => {}, 200], expected: undefined, description: 'throttle' },
        ]}
      />
      <NavButtons prev={'/js-practice/id-generator'} next={'/js-practice/deep-clone'} />
    </section>
  )
} 