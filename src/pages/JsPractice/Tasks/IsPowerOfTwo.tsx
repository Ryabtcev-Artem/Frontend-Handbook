import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsPowerOfTwo() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={29}
        title="Проверка степени двойки (Is Power Of Two)"
        description="Напишите функцию, которая определяет, является ли число степенью двойки."
        validationMode="function"
        functionName="isPowerOfTwo"
        defaultCode={`function isPowerOfTwo(n) {
  
}`}
        testCases={[
          { input: [1], expected: true, description: '2^0 = 1' },
          { input: [2], expected: true, description: '2^1 = 2' },
          { input: [3], expected: false, description: '3 не степень двойки' },
          { input: [16], expected: true, description: '2^4 = 16' },
          { input: [0], expected: false, description: '0 не степень двойки' },
        ]}
      />
      <NavButtons prev={'/js-practice/flatten-array'} next={'/js-practice/countdown-timer'} />
    </section>
  )
} 