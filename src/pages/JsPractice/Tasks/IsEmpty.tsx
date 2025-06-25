import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsEmpty() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={9}
        title="Проверка на пустую строку"
        description="Пустая строка — это строка, не содержащая ни одного символа, либо состоящая только из пробелов. Напишите функцию, которая возвращает true, если строка пуста или состоит только из пробелов, и false в противном случае."
        validationMode="function"
        functionName="isEmpty"
        defaultCode={`function isEmpty(str) {
  
}`}
        testCases={[
          { input: [''], expected: true, description: 'Пустая строка' },
          { input: ['   '], expected: true, description: 'Только пробелы' },
          { input: ['abc'], expected: false, description: 'Обычная строка' },
          { input: ['  a  '], expected: false, description: 'Строка с пробелами и символами' },
        ]}
      />
      <NavButtons prev={'/js-practice/factorial'} next={'/js-practice/capitalize-words'} />
    </section>
  )
} 