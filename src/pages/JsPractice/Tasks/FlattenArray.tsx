import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function FlattenArray() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={28}
        title="Плоский массив (Flatten Array)"
        description="Напишите функцию, которая превращает вложенный массив в плоский. Например, [1,[2,[3]]] → [1,2,3]."
        validationMode="function"
        functionName="flattenArray"
        defaultCode={`function flattenArray(arr) {
  
}`}
        testCases={[
          { input: [[1,[2,[3]]]], expected: [1,2,3], description: 'Вложенность' },
          { input: [[1,2,3]], expected: [1,2,3], description: 'Без вложенности' },
          { input: [[]], expected: [], description: 'Пустой массив' },
        ]}
      />
      <NavButtons prev={'/js-practice/sum-chain'} next={'/js-practice/is-power-of-two'} />
    </section>
  )
} 