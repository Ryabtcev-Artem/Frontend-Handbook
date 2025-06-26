import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CountdownTimer() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={30}
        title="Таймер обратного отсчёта (Countdown Timer)"
        description={`Реализуйте функцию countdownTimer(seconds, callback), которая каждую секунду вызывает callback с оставшимися секундами, начиная с переданного числа и до 1. Если seconds = 0, callback не вызывается.`}
        validationMode="function"
        functionName="countdownTimer"
        defaultCode={`function countdownTimer(seconds, callback) {
  
}`}
        testCases={[
          { input: [3, () => {}], expected: undefined, description: '3 секунды' },
          { input: [0, () => {}], expected: undefined, description: '0 секунд' },
          { input: [1, () => {}], expected: undefined, description: '1 секунда' },
          { input: [5, () => {}], expected: undefined, description: '5 секунд' },
        ]}
      />
      <NavButtons prev={'/js-practice/is-power-of-two'} next={'/js-practice/custom-sort'} />
    </section>
  )
} 