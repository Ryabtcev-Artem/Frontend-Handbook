import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function OnceFunction() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={41}
        title="Функция once (Once Function)"
        description="Напишите функцию, которая позволяет вызвать другую функцию только один раз."
        validationMode="function"
        functionName="onceFunction"
        defaultCode={`function once(fn) {
  
}`}
        testCases={[
          { input: [() => 5], expected: 5, description: 'Первый вызов' },
          { input: [() => 5], expected: undefined, description: 'Второй вызов' },
        ]}
      />
      <NavButtons prev={'/js-practice/memoization'} next={'/js-practice/async-loop'} />
    </section>
  )
} 