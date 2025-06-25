import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CountdownTimer() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={30}
        title="Таймер обратного отсчёта (Countdown Timer)"
        description="Напишите функцию, которая реализует таймер обратного отсчёта до нуля. Функция принимает число секунд и вызывает callback каждую секунду."
        validationMode="function"
        functionName="countdownTimer"
        defaultCode={`function countdownTimer(seconds, callback) {
  
}`}
        testCases={[
          { input: [3, () => {}], expected: undefined, description: '3 секунды' },
          { input: [0, () => {}], expected: undefined, description: '0 секунд' },
        ]}
      />
      <NavButtons prev={'/js-practice/is-power-of-two'} next={'/js-practice/custom-sort'} />
    </section>
  )
} 