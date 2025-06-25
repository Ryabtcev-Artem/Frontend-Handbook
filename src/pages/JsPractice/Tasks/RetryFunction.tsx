import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function RetryFunction() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={43}
        title="Повтор функции (Retry Function)"
        description="Напишите функцию, которая повторяет вызов другой функции до успешного результата или достижения лимита попыток."
        validationMode="function"
        functionName="retryFunction"
        defaultCode={`function retry(fn, attempts) {
  
}`}
        testCases={[
          { input: [() => true, 3], expected: true, description: 'Успех с первой попытки' },
          { input: [() => { throw new Error(); }, 2], expected: undefined, description: 'Неудача' },
        ]}
      />
      <NavButtons prev={'/js-practice/async-loop'} next={'/js-practice/promisify'} />
    </section>
  )
} 