import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function ValidBrackets() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={23}
        title="Проверка скобок (Valid Brackets)"
        description="На вход подается строка, содержащая скобки. Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке. Скобки могут быть круглые (), квадратные [] и фигурные. Скобки расставлены правильно, если каждая открывающая скобка имеет соответствующую закрывающую скобку и они расположены в правильном порядке."
        validationMode="function"
        functionName="validBrackets"
        defaultCode={`function validBrackets(str) {
  
}`}
        testCases={[
          { input: ['()'], expected: true, description: 'Одна пара' },
          { input: ['([])'], expected: true, description: 'Вложенные' },
          { input: ['([)]'], expected: false, description: 'Неправильный порядок' },
          { input: ['((())'], expected: false, description: 'Не хватает закрывающей' },
          { input: [''], expected: true, description: 'Пустая строка' },
          { input: ['{}[]()'], expected: true, description: 'Несколько разных пар' },
          { input: ['{[()]}'], expected: true, description: 'Все типы скобок вложены' },
          { input: ['{[(])}'], expected: false, description: 'Вложенные, но порядок нарушен' },
          { input: ['[({})]'], expected: true, description: 'Вложенные, правильный порядок' },
          { input: ['['], expected: false, description: 'Одна открывающая скобка' },
          { input: [']'], expected: false, description: 'Одна закрывающая скобка' },
          { input: ['([{}])()[]'], expected: true, description: 'Сложная правильная последовательность' },
          { input: ['([{}]))'], expected: false, description: 'Лишняя закрывающая скобка' },
          { input: ['(((())))'], expected: true, description: 'Много вложенных круглых скобок' },
          { input: ['{[}]'], expected: false, description: 'Неправильное закрытие' },
        ]}
      />
      <NavButtons prev={'/js-practice/group-by'} next={'/js-practice/intersection'} />
    </section>
  )
} 