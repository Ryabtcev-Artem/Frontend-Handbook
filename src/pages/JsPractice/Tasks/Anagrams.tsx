import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Anagrams() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={19}
        title="Анаграммы"
        description="Анаграммы — это слова, составленные из одних и тех же букв. Например, 'listen' и 'silent'. Напишите функцию, которая определяет, являются ли две строки анаграммами друг друга. Постарайтесь решить задачу без использования includes, split или sort."
        validationMode="function"
        functionName="areAnagrams"
        defaultCode={`function areAnagrams(str1, str2) {
  
}`}
        testCases={[
          { input: ['listen', 'silent'], expected: true, description: 'listen и silent' },
          { input: ['hello', 'world'], expected: false, description: 'hello и world' },
          { input: ['evil', 'vile'], expected: true, description: 'evil и vile' },
          { input: ['a', 'a'], expected: true, description: 'Одинаковые буквы' },
          { input: ['a', 'b'], expected: false, description: 'Разные буквы' },
        ]}
      />
      <NavButtons prev={'/js-practice/fibonacci'} next={'/js-practice/second-largest'} />
    </section>
  )
} 