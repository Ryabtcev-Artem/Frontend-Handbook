import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsPalindrome() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={2}
        title="Проверка палиндрома"
        description="Палиндром — это строка, которая читается одинаково слева направо и справа налево. Например: 'racecar' или 'А роза упала на лапу Азора'. Напишите функцию, которая определяет, является ли переданная строка палиндромом. Решений несколько — попробуйте решить разными способами: разворот строки, цикл, регулярные выражения или даже рекурсия. Не забудьте учесть регистр и пробелы!"
        validationMode="function"
        functionName="isPalindrome"
        defaultCode={`function isPalindrome(str) { 
  
}`}
        testCases={[
          {
            input: ['racecar'],
            expected: true,
            description: 'Обычный палиндром'
          },
          {input: ['hello'], expected: false, description: 'Не палиндром'},
          {
            input: ['A man a plan a canal Panama'],
            expected: true,
            description: 'С пробелами и заглавными'
          },
          {input: [''], expected: true, description: 'Пустая строка'},
          {input: ['a'], expected: true, description: 'Один символ'}
        ]}
      />
      <NavButtons
        prev={'/js-practice/swap-variables'}
        next={'/js-practice/max-min-in-array'}
      />
    </section>
  )
}