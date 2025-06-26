import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DeepClone() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={35}
        title="Глубокое копирование объекта (Deep Clone)"
        description="Напишите функцию, которая делает глубокую копию объекта (все вложенные объекты и массивы должны быть скопированы). Не используйте structuredClone."
        validationMode="function"
        functionName="deepClone"
        defaultCode={`function deepClone(obj) {
  
}`}
        testCases={[
          { input: [{a:1,b:{c:2}}], expected: {a:1,b:{c:2}}, description: 'Вложенный объект' },
          { input: [[1,2,3]], expected: [1,2,3], description: 'Массив' },
          { input: [null], expected: null, description: 'Null значение' },
          { input: [undefined], expected: undefined, description: 'Undefined значение' },
          { input: [42], expected: 42, description: 'Примитивное число' },
          { input: ['hello'], expected: 'hello', description: 'Примитивная строка' },
          { input: [true], expected: true, description: 'Примитивный boolean' },
          { input: [{a:[1,2,{b:3}],c:{d:[4,5]}}], expected: {a:[1,2,{b:3}],c:{d:[4,5]}}, description: 'Сложная структура с массивами и объектами' },
          { input: [[{a:1},{b:2}]], expected: [{a:1},{b:2}], description: 'Массив объектов' },
          { input: [{a:new Date('2023-01-01')}], expected: {a:new Date('2023-01-01')}, description: 'Объект с Date' },
          { input: [{a:new RegExp('test')}], expected: {a:new RegExp('test')}, description: 'Объект с RegExp' },
        ]}
      />
      <NavButtons prev={'/js-practice/debounce-throttle'} />
    </section>
  )
} 