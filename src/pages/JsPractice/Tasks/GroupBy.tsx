import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function GroupBy() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={22}
        title="Группировка объектов по значению свойства"
        description={`Напишите функцию, которая принимает массив объектов и строку — имя свойства. 
Функция должна вернуть объект, где ключи — это значения указанного свойства, а значения — массивы объектов с этим значением.
Если у объекта нет такого свойства, он должен попасть в группу с ключом "undefined".

Пример:
groupBy([{type:'a'},{type:'b'},{type:'a'},{foo:1}], 'type')
// Результат:
{
  a: [{type:'a'},{type:'a'}],
  b: [{type:'b'}],
  undefined: [{foo:1}]
}
`}
        validationMode="function"
        functionName="groupBy"
        defaultCode={`function groupBy(arr, key) {
  // Верните объект с группами по значению свойства key
}`}
        testCases={[
          {
            input: [[{type:'a'},{type:'b'},{type:'a'},{foo:1}], 'type'],
            expected: {
              a: [{type:'a'},{type:'a'}],
              b: [{type:'b'}],
              undefined: [{foo:1}]
            },
            description: 'Группировка по type, есть объект без type'
          },
          {
            input: [[{age:1},{age:2},{age:1},{name:'a'},{name:'b'}], 'age'],
            expected: {
              1: [{age:1},{age:1}],
              2: [{age:2}],
              undefined: [{name:'a'},{name:'b'}]
            },
            description: 'Группировка по age, есть объекты без age'
          },
          {
            input: [[], 'type'],
            expected: {},
            description: 'Пустой массив'
          },
          {
            input: [[{foo:1},{bar:2}], 'baz'],
            expected: { undefined: [{foo:1},{bar:2}] },
            description: 'Нет ни у кого свойства baz'
          }
        ]}
      />
      <NavButtons prev={'/js-practice/remove-item'} next={'/js-practice/valid-brackets'} />
    </section>
  )
} 