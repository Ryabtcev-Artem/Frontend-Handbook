import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type LoopsProps = {}
export default function Loops(props: LoopsProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Циклы в JavaScript</h2>

      <h3>Что такое цикл</h3>
      <p>Цикл — это конструкция, которая выполняет блок кода несколько раз, пока выполняется заданное условие.</p>

      <h3>Зачем нужны циклы</h3>
      <p>Циклы избавляют от повторяющегося кода. Вместо копирования одних и тех же строк — одна структура, которая всё делает за тебя.</p>

      <h3>Основные типы циклов</h3>
      <ul>
        <li>
          <strong>for</strong> — когда заранее известно, сколько повторов нужно.
        </li>
        <li>
          <strong>while</strong> — когда условие должно быть проверено перед каждой итерацией.
        </li>
        <li>
          <strong>do...while</strong> — когда хотя бы одна итерация должна быть выполнена.
        </li>
        <li>
          <strong>for...of</strong> — перебирает значения массивов, строк, Set и других итерируемых структур.
        </li>
        <li><strong>for...in</strong> — перебирает ключи объекта.</li>
      </ul>

      <h3>Цикл <code>for</code></h3>
      <p>Цикл с счётчиком. Обычно используется, когда знаешь, сколько раз нужно повторить действие.</p>
      <VsCode>
        {`for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0
// 1
// 2`}
      </VsCode>

      <h3>Цикл <code>while</code></h3>
      <p>Цикл, который повторяет блок, пока условие истинно. Условие проверяется до начала каждой итерации.</p>
      <VsCode>
        {`let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}
// 3
// 2
// 1`}
      </VsCode>

      <h3>Цикл <code>do...while</code></h3>
      <p>Выполняется минимум один раз, даже если условие ложно.</p>
      <VsCode>
        {`let count = 0;
do {
  console.log(count);
} while (count !== 0);
// 0`}
      </VsCode>

      <h3>Цикл <code>for...of</code></h3>
      <p>Удобен для перебора элементов массива, строки или других итерируемых объектов.</p>
      <VsCode>
        {`const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item);
}
// a
// b
// c`}
      </VsCode>

      <h3>Цикл <code>for...in</code></h3>
      <p>Перебирает ключи объекта. Не стоит использовать для массивов — порядок не гарантируется.</p>
      <VsCode>
        {`const user = { name: 'Alex', age: 30 };
for (const key in user) {
  console.log(key, user[key]);
}
// name Alex
// age 30`}
      </VsCode>

      <h3>Операторы <code>break</code> и <code>continue</code></h3>
      <ul>
        <li><code>break</code> — полностью останавливает цикл.</li>
        <li>
          <code>continue</code> — пропускает текущую итерацию и переходит к следующей.
        </li>
      </ul>
      <VsCode>
        {`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// 0
// 1
// 3
// 4`}
      </VsCode>

      <h3>Когда использовать что</h3>
      <ul>
        <li>
          <strong>for</strong> — если нужен счётчик и понятен диапазон повторов.
        </li>
        <li>
          <strong>while</strong> — когда важно проверять условие перед каждой итерацией.
        </li>
        <li>
          <strong>do...while</strong> — если хотя бы одна итерация точно должна быть.
        </li>
        <li><strong>for...of</strong> — когда важно значение, а не индекс.</li>
        <li><strong>for...in</strong> — для обхода ключей объекта.</li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li>Циклы нужны, чтобы не повторять вручную одинаковые действия в коде.</li>
        <li>
          <code>for</code> — лучший выбор, когда знаешь, сколько повторений будет.
        </li>
        <li>
          <code>while</code> и <code>do...while</code> — когда условие управления находится в процессе выполнения.
        </li>
        <li><code>for...of</code> — для значений коллекций.</li>
        <li><code>for...in</code> — аккуратно, только для объектов.</li>
        <li>
          <code>break</code> и <code>continue</code> дают гибкость управления потоком цикла.
        </li>
      </ul>
      <NavButtons prev={'/js/Switch'} next={'/js/FunctionTypes'} />
      <Test
        allTasks={[
          {
            question: "Что делает оператор break в цикле?",
            variants: [
              "Прерывает текущую итерацию и переходит к следующей",
              "Полностью завершает выполнение цикла",
              "Пропускает цикл, если условие ложно",
              "Удаляет последний элемент из массива внутри цикла"
            ],
            explanations: [
              "Это поведение относится к оператору continue.",
              "Оператор break полностью завершает цикл, вне зависимости от условия.",
              "Так себя ведёт if, а не break.",
              "Оператор break не связан с изменением массива."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Какой будет результат выполнения этого кода?",
            code:
              `let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}`,
            variants: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
            explanations: [
              "Цикл начинается с i = 0, и завершается, когда i достигает 3.",
              "В этом случае i = 0, так что 3 не входит.",
              "Третья итерация не произойдёт, потому что условие i < 3.",
              "Будет три итерации, начиная с 0."
            ],
            correct: 0,
            isCode: true
          },
          {
            question: "Что делает цикл for...of?",
            variants: [
              "Перебирает ключи объекта",
              "Перебирает значения итерируемого объекта",
              "Создаёт бесконечный цикл",
              "Выполняет код, пока условие не станет ложным"
            ],
            explanations: [
              "Это делает for...in, а не for...of.",
              "for...of предназначен для перебора значений массивов, строк и других итерируемых объектов.",
              "Бесконечный цикл можно получить, только если задать такое условие вручную.",
              "Это описание обычного while."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что будет результатом выполнения?",
            code:
              `const arr = ['a', 'b', 'c'];
for (let i in arr) {
  console.log(i);
}`,
            variants: ["a b c", "0 1 2", "undefined undefined undefined", "abc"],
            explanations: [
              "for...in перебирает индексы, а не значения.",
              "Именно так: индексы массива — это строки '0', '1', '2'.",
              "Значения определены, такого не будет.",
              "Это просто слияние символов, но не результат данного кода."
            ],
            correct: 1,
            isCode: true
          },
          {
            question: "Что выведет следующий код?",
            code:
              `let result = '';
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  result += i;
}
console.log(result);`,
            variants: ["12345", "1245", "135", "123"],
            explanations: [
              "Цифра 3 пропущена, а значит её не будет в строке.",
              "continue пропускает 3, всё остальное добавляется.",
              "Тут нет условий для пропуска 2 и 4.",
              "Цикл продолжается до 5 включительно, так что будет больше цифр."
            ],
            correct: 1,
            isCode: true
          },
          {
            question: "Для чего использовать цикл do...while?",
            variants: [
              "Если нужно выполнить блок кода хотя бы один раз",
              "Для перебора всех элементов массива",
              "Чтобы избежать вложенности условий",
              "Когда не известны условия завершения"
            ],
            explanations: [
              "do...while гарантирует хотя бы одно выполнение, даже если условие ложно.",
              "Для этого больше подходит for или for...of.",
              "do...while — это не про структуризацию кода.",
              "Условие всегда нужно указывать, иначе получится бесконечный цикл."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Чем отличается цикл for от while?",
            variants: [
              "for не использует условия",
              "while работает только с числами",
              "for удобен, когда известно количество итераций",
              "while всегда выполняется хотя бы один раз"
            ],
            explanations: [
              "Цикл for как раз начинается с условия.",
              "Тип данных не имеет значения для условия.",
              "for — хорош, когда знаем точное число повторов.",
              "Это справедливо для do...while, не для while."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Что произойдёт при выполнении кода?",
            code:
              `let i = 0;
while (true) {
  if (i === 3) break;
  i++;
}
console.log(i);`,
            variants: ["0", "3", "4", "undefined"],
            explanations: [
              "i инкрементируется, пока не станет равен 3.",
              "break срабатывает при i === 3, значит цикл завершится, и i станет 3.",
              "i++ происходит до сравнения, но условие break — строго на 3.",
              "i определена и равна 3 после выхода из цикла."
            ],
            correct: 1,
            isCode: true
          },
          {
            question: "Какой цикл корректно перебирает значения массива?",
            code:
              `const colors = ['red', 'green', 'blue'];`,
            variants: [
              "for (const i in colors) {\n  console.log(i);\n}",
              "for (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}",
              "for (let i = 0; i <= colors.length; i++) {\n  console.log(colors[i]);\n}",
            ],
            explanations: [
              "Это выведет индексы, а не значения.",
              "Это классический способ корректного перебора значений по индексу.",
              "<= приведёт к попытке доступа к undefined на последней итерации.",
            ],
            correct: 1,
            isCode: true
          }
        ]}
      />
      <JsPlayground
        taskId={2}
        functionName={'countEven'}
        args={[
          [[1, 2, 3, 4, 5, 6]],
          [[10, 15, 20]],
          [[7, 9, 11]],
        ]}
        answers={[3, 2, 0]}
        defaultCode={'function countEven(numbers){\n  \n}'}
        title={'Задача: Считаем чётные числа'}
        examples={[
          'countEven([1, 2, 3, 4, 5, 6]) // 3',
          'countEven([10, 15, 20]) // 2',
          'countEven([7, 9, 11]) // 0'
        ]}
        description={
          'В функции countEven вам передаётся массив чисел numbers. Нужно сосчитать, сколько в этом массиве чётных чисел, и вернуть это количество. Используйте любой цикл: for, for...of или while.'
        }
      />
      <NavButtons prev={'/js/Switch'} next={'/js/FunctionTypes'} />
    </section>
  )
}