import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function ClosureTask() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={38}
        title="Замыкания (Closure)"
        description="Напишите функцию, которая возвращает другую функцию и использует переменные из внешней области видимости."
        validationMode="function"
        functionName="closureTask"
        defaultCode={`function closureTask(x) {
  
}`}
        testCases={[
          { input: [5], expected: 5, description: 'Пример замыкания' },
        ]}
      />
      <NavButtons prev={'/js-practice/bind-call-apply'} next={'/js-practice/memoization'} />
    </section>
  )
} 