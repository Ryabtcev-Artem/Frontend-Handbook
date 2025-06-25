import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IdGenerator() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={33}
        title="Генератор id (Id Generator)"
        description="Напишите функцию-генератор, которая возвращает уникальный id при каждом вызове."
        validationMode="function"
        functionName="idGenerator"
        defaultCode={`function idGenerator() {
  
}`}
        testCases={[
          { input: [], expected: 1, description: 'Первый вызов' },
          { input: [], expected: 2, description: 'Второй вызов' },
        ]}
      />
      <NavButtons prev={'/js-practice/format-date'} next={'/js-practice/debounce-throttle'} />
    </section>
  )
} 