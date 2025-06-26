import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function IsPowerOfTwo() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={29}
        title="Проверка степени двойки (Is Power Of Two)"
        description="Напишите функцию, которая определяет, является ли число степенью двойки. Все числа без плавающей точки."
        validationMode="function"
        functionName="isPowerOfTwo"
        defaultCode={`function isPowerOfTwo(n) {
  
}`}
        testCases={[
          { input: [1], expected: true, description: '2^0 = 1' },
          { input: [2], expected: true, description: '2^1 = 2' },
          { input: [3], expected: false, description: '3 не степень двойки' },
          { input: [4], expected: true, description: '2^2 = 4' },
          { input: [5], expected: false, description: '5 не степень двойки' },
          { input: [8], expected: true, description: '2^3 = 8' },
          { input: [9], expected: false, description: '9 не степень двойки' },
          { input: [16], expected: true, description: '2^4 = 16' },
          { input: [31], expected: false, description: '31 не степень двойки' },
          { input: [32], expected: true, description: '2^5 = 32' },
          { input: [0], expected: false, description: '0 не степень двойки' },
          { input: [1024], expected: true, description: '2^10 = 1024' },
          { input: [2048], expected: true, description: '2^11 = 2048' },
          { input: [4095], expected: false, description: '4095 не степень двойки' },
          { input: [-2], expected: false, description: 'Отрицательное число' },
          { input: [-8], expected: false, description: 'Отрицательное число' },
          { input: [0.5], expected: false, description: 'Дробное число' },
          { input: [64], expected: true, description: '2^6 = 64' },
          { input: [128], expected: true, description: '2^7 = 128' },
          { input: [256], expected: true, description: '2^8 = 256' },
          { input: [512], expected: true, description: '2^9 = 512' },
          { input: [Number.MAX_SAFE_INTEGER], expected: false, description: 'Очень большое число' },
          { input: [NaN], expected: false, description: 'NaN' },
          { input: [null], expected: false, description: 'null' },
          { input: [undefined], expected: false, description: 'undefined' },
        ]}
      />
      <NavButtons prev={'/js-practice/flatten-array'} next={'/js-practice/countdown-timer'} />
    </section>
  )
} 