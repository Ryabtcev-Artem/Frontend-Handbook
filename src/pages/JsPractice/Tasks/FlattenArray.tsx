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
          { input: [[1,[2,3],4]], expected: [1,2,3,4], description: 'Одна вложенность внутри' },
          { input: [[[1,2],[3,4]]], expected: [1,2,3,4], description: 'Два массива внутри' },
          { input: [[1,[2,[3,[4,[5]]]]]], expected: [1,2,3,4,5], description: 'Глубокая вложенность' },
          { input: [[[[[1]]]]], expected: [1], description: 'Многоуровневая вложенность одного элемента' },
          { input: [[1,[],[2,[3,[]]],4]], expected: [1,2,3,4], description: 'Пустые массивы внутри' },
          { input: [[1,'a',[true,[null,[undefined]]]]], expected: [1,'a',true,null,undefined], description: 'Разные типы значений' },
          { input: [[[[[[]]]]]], expected: [], description: 'Только пустые массивы' },
          { input: [[{a:1},[[2,3]],4]], expected: [{a:1},2,3,4], description: 'Объекты внутри массива' },
        ]}
      />
      <NavButtons prev={'/js-practice/curry'} next={'/js-practice/is-power-of-two'} />
    </section>
  )
} 