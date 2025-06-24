import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsPrime() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={5}
        title="Проверка простого числа"
        description="Простое число — это натуральное число больше 1, которое нацело делится только на 1 и на само себя. Например, 2, 3, 5, 7, 11 — простые числа, а 4, 6, 8, 9 — составные. Напишите функцию, которая проверяет, является ли переданное число простым. Функция должна возвращать true для простых чисел и false для составных."
        functionName="isPrime"
        defaultCode={`function isPrime(num) { 
   
}`}
        examples={[
          'isPrime(2)',
          'isPrime(3)',
          'isPrime(4)',
          'isPrime(17)',
          'isPrime(25)',
          'isPrime(1)',
          'isPrime(0)',
          'isPrime(-5)'
        ]}
        answers={[
          [true],
          [true],
          [false],
          [true],
          [false],
          [false],
          [false],
          [false]
        ]}
      />

      <NavButtons
        prev={'/js-practice/count-vowels'}
        next={'/js-practice/swap-variables'}
      />
    </section>
  )
}