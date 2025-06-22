import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";
type StringsProps = {}
export default function Strings(props: StringsProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Строки в JavaScript: методы, поведение и нюансы</h2>

      <h3>Строка — примитив, но с методами</h3>
      <p>
        Тип <code>string</code> — это примитив. Однако при работе с ним вы можете вызывать методы, как будто это объект.
      </p>
      <p>
        Под капотом JavaScript временно оборачивает строку в объект <code>String</code>, давая доступ к методам.
      </p>

      <h3>Основные методы для работы со строками</h3>

      <h4>1. Длина строки: <code>.length</code></h4>
      <VsCode>{`'hello'.length // 5`}</VsCode>

      <h4>2. Доступ по индексу</h4>
      <VsCode>{`const str = 'JavaScript';
str[0];  // 'J'
str.at(-1); // 't' — поддержка отрицательных индексов`}</VsCode>

      <h4>3. Изменение регистра</h4>
      <VsCode>{`'hi'.toUpperCase(); // 'HI'
'BYE'.toLowerCase(); // 'bye'`}</VsCode>

      <h4>4. Поиск подстроки</h4>
      <VsCode>{`'hello'.includes('ell'); // true
'hello'.startsWith('he'); // true
'hello'.endsWith('o'); // true`}</VsCode>

      <h4>5. Поиск позиции</h4>
      <VsCode>{`'hello'.indexOf('l'); // 2
'hello'.lastIndexOf('l'); // 3`}</VsCode>

      <h4>6. Обрезка пробелов</h4>
      <VsCode>{`'  trim me  '.trim();       // 'trim me'
'  start'.trimStart(); // 'start'
'end   '.trimEnd();    // 'end'`}</VsCode>

      <h4>7. Извлечение подстроки</h4>
      <VsCode>{`'JavaScript'.slice(0, 4);    // 'Java'
'JavaScript'.substring(4, 10); // 'Script' Отличается от slice тем, что не поддерживает отрицательные индексы
'JavaScript'.slice(-6);        // 'Script'`}</VsCode>

      <h4>8. Замена</h4>
      <VsCode>{`'apple'.replace('p', '*');     // 'a*ple'
'apple'.replaceAll('p', '*'); // 'a**le'`}</VsCode>

      <h4>9. Повтор строки</h4>
      <VsCode>{`'ha'.repeat(3); // 'hahaha'`}</VsCode>

      <h4>10. Разделение и объединение</h4>
      <VsCode>{`'a,b,c'.split(','); // ['a', 'b', 'c']
['x', 'y'].join('-');   // 'x-y'`}</VsCode>

      <h3>Unicode, длина и эмодзи</h3>
      <p>
        Некоторые символы, например эмодзи, могут занимать 2 ячейки <code>length</code>:
      </p>
      <VsCode>{`'💡'.length; // 2
[...'💡'].length; // 1`}</VsCode>
      <p>
        Чтобы корректно работать с такими символами, используйте <code>[...str]</code> или <code>Array.from(str)</code>.
      </p>

      <h3>Шаблонные строки (Template literals)</h3>
      <VsCode>{`const name = 'Artem';
\`Hello, \${name}!\` // 'Hello, Artem!'`}</VsCode>
      <p>
        Позволяют вставлять переменные и переносы строк без конкатенации.
      </p>

      <h3>Вывод</h3>
      <ul>
        <li>Строки — это примитивы с доступом к методам через временную обёртку.</li>
        <li>Большинство методов не мутируют строку, а возвращают новую.</li>
        <li>Для точной работы с символами Unicode предпочтительно использовать <code>split('')</code>, <code>[...str]</code> и подобные техники.</li>
        <li>Шаблонные строки — современный и удобный способ форматирования.</li>
      </ul>
      <NavButtons prev={'/js/Nums'} next={'/js/Arrays'} />
      <Test allTasks={[
        {
          question: "Что вернёт выражение?",
          variants: ["Script", "Scrip", "cript", "Error"],
          explanations: [
            "Символ с индексом 4 включается, 10 — не включается. Получаем 'Script'.",
            "Остановка на 9-м символе дала бы 'Scrip', но указано 10.",
            "Начало с 5, а не 4, дало бы 'cript'.",
            "slice() не выбрасывает исключений при выходе за пределы строки.",
          ],
          correct: 0,
          isCode: true,
          code: `'JavaScript'.slice(4, 10);`
        },
        {
          question: "Какой результат у slice с отрицательным индексом?",
          variants: ["Script", "ript", "Scrip", "Java"],
          explanations: [
            "Отрицательный индекс -6 означает 6 символов с конца. Получаем 'Script'.",
            "Начало с -5 дало бы 'ript'.",
            "'Scrip' получается при slice(4, 9).",
            "'Java' было бы с начала до 4.",
          ],
          correct: 0,
          isCode: true,
          code: `'JavaScript'.slice(-6);`
        },
        {
          question: "Чем отличается substring от slice при обратном порядке индексов?",
          variants: [
            "substring меняет местами индексы, slice — нет",
            "slice меняет местами индексы, substring — нет",
            "Обе функции возвращают пустую строку",
            "Обе функции выбрасывают исключение"
          ],
          explanations: [
            "substring(8, 3) будет как substring(3, 8), а slice(8, 3) вернёт пустую строку.",
            "slice не меняет порядок, а substring — меняет.",
            "slice действительно вернёт '', но substring — нет.",
            "Обе работают безопасно, не выбрасывают исключений.",
          ],
          correct: 0,
          isCode: false
        },
        {
          question: "Что вернёт этот код?",
          variants: ["a", "va", "ava", "undefined"],
          explanations: [
            "slice(1,2) — извлекается только 1 символ под индексом 1.",
            "slice(1,3) дало бы 'va'.",
            "slice(0,3) дало бы 'ava'.",
            "slice никогда не возвращает undefined.",
          ],
          correct: 0,
          isCode: true,
          code: `'JavaScript'.slice(1, 2);`
        }
      ]} />
      <NavButtons prev={'/js/Nums'} next={'/js/Arrays'} />
    </section>
  )
}
