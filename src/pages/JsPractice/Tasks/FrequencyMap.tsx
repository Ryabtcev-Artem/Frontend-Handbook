import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function FrequencyMap() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={18}
        title="Частотная карта символов"
        description="Напишите функцию, которая принимает строку и возвращает объект, где ключ — символ, а значение — сколько раз он встречается в строке. Например, frequencyMap('aab') → {a: 2, b: 1}."
        validationMode="function"
        functionName="frequencyMap"
        defaultCode={`function frequencyMap(str) {
  
}`}
        testCases={[
          { input: ['aab'], expected: {a:2, b:1}, description: 'Два a, один b' },
          { input: ['abcabc'], expected: {a:2, b:2, c:2}, description: 'Все по два' },
          { input: [''], expected: {}, description: 'Пустая строка' },
          { input: ['x'], expected: {x:1}, description: 'Один символ' },
        ]}
      />
      <NavButtons prev={'/js-practice/deep-traverse'} next={'/js-practice/fibonacci'} />
    </section>
  )
} 