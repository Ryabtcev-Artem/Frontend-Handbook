import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Nums() {
  

  return (
    <section className={'topic container'}>
      <h2>Числа в JavaScript: как они работают</h2>

      <h3>В JavaScript есть только один тип числа</h3>
      <p>В отличие от многих языков, где есть целые (int) и дробные (float) числа, в JavaScript — один тип: <code>number</code>.</p>
      <p>Он основан на IEEE 754 (широко используемый стандарт, описывающий формат представления чисел с плавающей точкой) и представляет **все числа** (в том числе дробные) в 64-битном формате с плавающей точкой.</p>

      <VsCode>{`const a = 10;
const b = 3.14;
const c = -0.5;`}</VsCode>

      <p>Все эти переменные — одного и того же типа: <code>number</code>.</p>

      <h3>Особые значения</h3>
      <p>Тип <code>number</code> включает несколько специальных значений:</p>
      <ul>
        <li><code>Infinity</code> — положительная бесконечность</li>
        <li><code>-Infinity</code> — отрицательная бесконечность</li>
        <li><code>NaN</code> — "Not-a-Number", результат невалидной математической операции</li>
      </ul>

      <VsCode>{`console.log(1 / 0);     // Infinity
console.log(-1 / 0);    // -Infinity
console.log(0 / 0);     // NaN
console.log("abc" * 2); // NaN`}</VsCode>

      <h3>NaN — заразное значение</h3>
      <p>Если вы проводите любую арифметику с <code>NaN</code>, результат всегда будет <code>NaN</code>.</p>

      <VsCode>{`const result = NaN + 5; // NaN
const total = Math.sqrt(-1); // NaN`}</VsCode>

      <h3>Сравнение NaN с NaN — ложь</h3>
      <p>Да, это звучит странно: <code>NaN === NaN</code> возвращает <code>false</code>. Чтобы проверить, является ли значение NaN, используйте <code>Number.isNaN()</code>.</p>

      <VsCode>{`console.log(NaN === NaN);           // false
console.log(Number.isNaN(NaN)); // true`}</VsCode>

      <h3>Округление и дроби</h3>
      <p>JavaScript работает с дробями — но не идеально. Некоторые числа округляются странно из-за особенностей двоичного представления.</p>

      <VsCode>{`console.log(0.1 + 0.2); // 0.30000000000000004`}</VsCode>

      <p>Чтобы округлять числа, используйте:</p>
      <ul>
        <li><code>Math.floor()</code> — вниз</li>
        <li><code>Math.ceil()</code> — вверх</li>
        <li><code>Math.round()</code> — до ближайшего</li>
        <li><code>toFixed(n)</code> — до <code>n</code> знаков после запятой (строка!)</li>
      </ul>

      <VsCode>{`const n = 2.345;
n.toFixed(2); // '2.35'`}</VsCode>

      <h3>Проверка: число ли это?</h3>
      <p>Функция <code>typeof</code> вернёт <code>"number"</code> даже для <code>NaN</code> и <code>Infinity</code> — потому что они всё ещё относятся к числовому типу.</p>

      <VsCode>{`typeof NaN;      // 'number'
typeof Infinity; // 'number'`}</VsCode>

      <h3>BigInt — другой тип</h3>
      <p>Для очень больших целых чисел, которые выходят за пределы безопасного диапазона <code>Number.MAX_SAFE_INTEGER</code>, существует тип <code>BigInt</code>.</p>

      <VsCode>{`const big = 1234567890123456789012345678901234567890n;
typeof big; // 'bigint'`}</VsCode>

      <h2>Итого</h2>
      <ul>
        <li>В JavaScript все числа относятся к одному типу: <code>number</code>.</li>
        <li>Числа включают специальные значения: <code>Infinity</code>, <code>-Infinity</code>, <code>NaN</code>.</li>
        <li><code>NaN</code> нельзя сравнивать напрямую — используйте <code>Number.isNaN()</code>.</li>
        <li>Сложение дробей не всегда точно — это особенность IEEE 754.</li>
        <li>Для больших целых чисел используйте <code>BigInt</code>.</li>
      </ul>
      <NavButtons prev={'/js/PrimitiveMethods'} next={'/js/Strings'} />
      <Test allTasks={[
        {
          question: "Какое поведение у Math.round()?",
          variants: [
            "Округляет вверх независимо от дробной части",
            "Округляет к ближайшему целому, .5 — вверх",
            "Округляет вниз при .5",
            "Округляет всегда до чётного"
          ],
          explanations: [
            "Math.round округляет по правилам математики, а не всегда вверх.",
            "Math.round(1.5) → 2, Math.round(1.4) → 1 — .5 округляется вверх.",
            "Math.round не округляет .5 вниз.",
            "В JS нет правила округления до чётного, это поведение других языков."
          ],
          correct: 1,
          isCode: false
        },
        {
          question: "Что будет результатом выполнения?",
          code: "console.log(Math.max(5, '9', undefined, null));",
          variants: [
            '"9"',
            "NaN",
            "9",
            "5"
          ],
          explanations: [
            "Math.max возвращает число, не строку. '9' преобразуется в 9.",
            "undefined вызывает NaN только при прямой передаче Math.max(undefined), но тут есть другие сравнимые значения.",
            "'9' преобразуется в число, null — в 0, undefined — NaN, но NaN игнорируется.",
            "5 меньше, чем 9 (после преобразования '9' → 9)."
          ],
          correct: 2,
          isCode: true
        },
        {
          question: "Что делает Math.trunc()?",
          variants: [
            "Округляет число вниз",
            "Округляет к ближайшему целому",
            "Удаляет дробную часть числа",
            "Всегда округляет в сторону нуля"
          ],
          explanations: [
            "Math.floor округляет вниз, но trunc — не всегда.",
            "Math.round округляет к ближайшему, а не trunc.",
            "Math.trunc обрезает дробную часть без округления.",
            "Правильно, но неконкретно. Лучше указать, что дробная часть удаляется."
          ],
          correct: 2,
          isCode: false
        },
        {
          question: "Что вернёт вызов Math.sqrt(-4)?",
          code: "console.log(Math.sqrt(-4));",
          variants: [
            "2",
            "NaN",
            "-2",
            "Ошибка выполнения"
          ],
          explanations: [
            "Квадратный корень из -4 — не действительное число, в JS это не поддерживается.",
            "Math.sqrt() не может вернуть корень из отрицательного — результат NaN.",
            "JS не возвращает отрицательные корни.",
            "JS не выдаёт исключения при корне из отрицательного, просто NaN."
          ],
          correct: 1,
          isCode: true
        }
      ]} />
      <NavButtons prev={'/js/PrimitiveMethods'} next={'/js/Strings'} />
    </section>
  )
}
