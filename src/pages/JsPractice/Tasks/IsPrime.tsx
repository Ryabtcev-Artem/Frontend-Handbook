import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsPrime() {

  return (
    <section className={'container'}>
      <JsPlayground
        taskId={5}
        title="Проверка на простое число"
        description="Простое число — это натуральное число больше 1, которое делится только на 1 и на само себя. В этой задаче вам нужно написать функцию, которая определяет, является ли переданное число простым. Функция должна возвращать true, если число простое, и false в противном случае."
        validationMode="function"
        functionName="isPrime"
        defaultCode={`function isPrime(num) { 
  
}`}
        testCases={[
          {
            input: [2],
            expected: true,
            description: '2 — простое число'
          },
          {
            input: [3],
            expected: true,
            description: '3 — простое число'
          },
          {
            input: [4],
            expected: false,
            description: '4 — не простое число'
          },
          {
            input: [17],
            expected: true,
            description: '17 — простое число'
          },
          {
            input: [1],
            expected: false,
            description: '1 — не простое число (по определению)'
          },
          {
            input: [0],
            expected: false,
            description: '0 — не простое число'
          },
          {
            input: [-7],
            expected: false,
            description: '-7 — не простое число (отрицательные не считаются)'
          }
        ]}
      />

      <NavButtons
        prev={'/js-practice/count-vowels'}
        next={'/js-practice/remove-duplicates'}
      />
    </section>
  )
}