import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CapitalizeWords() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={10}
        title="Заглавные буквы в каждом слове"
        description="Напишите функцию, которая преобразует первую букву каждого слова в строке в заглавную. Например, 'hello world' → 'Hello World'."
        validationMode="function"
        functionName="capitalizeWords"
        defaultCode={`function capitalizeWords(str) {
  
}`}
        testCases={[
          { input: ['hello world'], expected: 'Hello World', description: 'Два слова' },
          { input: ['javaScript is fun'], expected: 'JavaScript Is Fun', description: 'Смешанный регистр' },
          { input: [''], expected: '', description: 'Пустая строка' },
          { input: ['a'], expected: 'A', description: 'Один символ' },
        ]}
      />
      <NavButtons prev={'/js-practice/is-empty'} next={'/js-practice/sum-to-n'} />
    </section>
  )
} 