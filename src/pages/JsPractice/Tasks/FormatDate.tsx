import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function FormatDate() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={32}
        title="Форматирование даты (Format Date)"
        description="Напишите функцию, которая форматирует дату в строку вида 'DD.MM.YYYY'."
        validationMode="function"
        functionName="formatDate"
        defaultCode={`function formatDate(date) {
  
}`}
        testCases={[
          { input: [new Date('2023-01-01')], expected: '01.01.2023', description: '1 января 2023' },
          { input: [new Date('1999-12-31')], expected: '31.12.1999', description: '31 декабря 1999' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-sort'} next={'/js-practice/id-generator'} />
    </section>
  )
} 