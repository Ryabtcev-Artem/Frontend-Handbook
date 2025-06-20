import VsCode from "../../../components/VsCode/VsCode.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type CurryProps = {}
export default function Curry(props: CurryProps) {
  const {} = props
  return (
    <section className={'topic container'}>
      <h2>Каррирование (Currying)</h2>
      <p>
        <strong>Каррирование</strong> — это техника трансформации функции с несколькими аргументами
        в последовательность вызовов функций, которые принимают аргументы по одному или несколькими за раз,
        и возвращают новые функции, ожидающие остальные аргументы.
      </p>

      <p>
        В классическом понимании каррирования каждая функция принимает ровно один аргумент,
        но в практике JavaScript часто используют более гибкий подход — функции могут принимать сразу несколько аргументов,
        а затем возвращают новую функцию, ожидающую оставшиеся.
      </p>

      <p>
        Это позволяет вызывать функцию в любом удобном стиле:
        <code>fn(a)(b)(c)</code>, <code>fn(a, b)(c)</code>, <code>fn(a)(b, c)</code> или обычным <code>fn(a, b, c)</code>.
      </p>

      <h3>Зачем использовать каррирование?</h3>
      <ul>
        <li>Создавать частично применённые функции, фиксируя часть аргументов заранее.</li>
        <li>Упрощать композицию функций и их переиспользование.</li>
        <li>Повышать читаемость и выразительность кода.</li>
      </ul>

      <h3>Пример простого каррирования</h3>
      <VsCode>{`function multiply(a) {
  return function(b) {
    return a * b;
  }
}

const double = multiply(2);
console.log(double(5)); // 10`}</VsCode>

      <h3>Гибкий карринг с несколькими аргументами за вызов</h3>
      <p>
        Рассмотрим реализацию функции каррирования, которая позволяет вызывать функцию с аргументами по частям. Такая функция может принимать любое количество аргументов на каждом этапе вызова и продолжать ожидать оставшиеся до тех пор, пока не наберётся достаточно данных:
      </p>

      <VsCode>{`function curry(fn, ...args) {
  return function(...newArgs) {
    const allArgs = [...args, ...newArgs];
    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    } else {
      return curry(fn, ...allArgs);
    }
  }
}

// Исходная функция с тремя параметрами
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));     // 6
console.log(curriedSum(1, 2)(3));     // 6
console.log(curriedSum(1)(2, 3));     // 6
console.log(curriedSum(1, 2, 3));     // 6`}</VsCode>

      <p>
        <strong>Как это работает:</strong>
      </p>

      <ul>
        <li>
          Функция <code>curry</code> принимает <code>fn</code> — оригинальную функцию, и часть аргументов <code>...args</code>, если они уже были переданы.
        </li>
        <li>
          Она возвращает новую функцию, которая ожидает ещё аргументы (<code>...newArgs</code>).
        </li>
        <li>
          Новые аргументы объединяются с уже собранными: <code>[...args, ...newArgs]</code>.
        </li>
        <li>
          Если количество собранных аргументов <code>allArgs.length</code> становится больше или равно количеству параметров оригинальной функции (<code>fn.length</code>), вызывается <code>fn(...allArgs)</code>.
        </li>
        <li>
          Иначе снова вызывается <code>curry</code>, но уже с новыми собранными аргументами. Это создаёт цепочку вызовов.
        </li>
      </ul>

      <p>
        Благодаря этому механизм работает с любыми комбинациями передачи аргументов:
      </p>

      <ul>
        <li>
          <code>curriedSum(1)(2)(3)</code> — передаётся по одному аргументу за вызов.
        </li>
        <li><code>curriedSum(1, 2)(3)</code> — сначала два, потом один.</li>
        <li><code>curriedSum(1)(2, 3)</code> — сначала один, потом два.</li>
        <li><code>curriedSum(1, 2, 3)</code> — сразу все аргументы.</li>
      </ul>

      <p>
        Каррирование полезно для создания переиспользуемых частичных функций и повышения читаемости при композиции.
      </p>


      <h3>Интересный факт</h3>
      <p>
        Каррирование названо в честь математика Хаскелла Карри. В JavaScript его можно реализовать вручную,
        либо использовать готовые решения из библиотек, например, <code>_.curry</code> из Lodash.
      </p>
      <NavButtons prev={'/js/Closures'} next={'/js/Arrow'} />
      <JsPlayground
        taskId={5}
        functionName={'multiplyCurry'}
        args={[
          ['2', '3', '4'],
          ['1', '2'],
          ['5'],
          ['2', '2', '2', '2'],
        ]}
        answers={[
          '24',
          '2',
          '5',
          '16',
        ]}
        defaultCode={`function multiplyCurry(...args) {

}`}
        title={'Задача: Свой карри для перемножения'}
        description={`Реализуйте функцию multiplyCurry, которая может принимать любое количество чисел на каждом этапе вызова, 
накапливать их и возвращать произведение всех чисел, когда вызвана без аргументов.

Пример:
const mul = multiplyCurry();
mul(2)(3)(4)(); // 24
mul(1, 2)(1)(); // 2
mul(5)();       // 5
mul(2)(2, 2)(2)(); // 16

Функция должна быть гибкой — принимать аргументы как по одному, так и группами. Финальный вызов без аргументов завершает цепочку и возвращает результат.`}
        examples={[
          'multiplyCurry()(2)(3)(4)() // 24',
          'multiplyCurry()(1, 2)(1)() // 2',
          'multiplyCurry()(5)() // 5',
          'multiplyCurry()(2)(2, 2)(2)() // 16',
        ]}
      />
      <NavButtons prev={'/js/Closures'} next={'/js/Arrow'} />
    </section>
  )
}