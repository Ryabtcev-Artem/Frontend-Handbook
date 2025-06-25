import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DeepTraverse() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={16}
        title="Глубокий обход объекта (Deep Traverse)"
        description="Напишите функцию, которая обходит все ключи вложенного объекта и возвращает массив всех ключей. Например, {a:1, b:{c:2}} → ['a','b','c']."
        validationMode="function"
        functionName="deepTraverse"
        defaultCode={`function deepTraverse(obj) {
  
}`}
        testCases={[
          { input: [{a:1, b:{c:2}}], expected: ['a','b','c'], description: 'Вложенный объект' },
          { input: [{x:1}], expected: ['x'], description: 'Один ключ' },
          { input: [{}], expected: [], description: 'Пустой объект' },
          { input: [{foo:{bar:{baz:1}}}], expected: ['foo','bar','baz'], description: 'Глубокая вложенность' },
          { input: [{user: {name: 'John', hobbies: ['reading', 'gaming'], address: null, settings: {theme: 'dark', notifications: false}}}], expected: ['user', 'name', 'hobbies', 'address', 'settings', 'theme', 'notifications'], description: 'Объект с массивом и null значениями' },
        ]}
      />
      <NavButtons prev={'/js-practice/every-satisfies'} next={'/js-practice/frequency-map'} />
    </section>
  )
} 