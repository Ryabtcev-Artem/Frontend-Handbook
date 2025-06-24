import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import VsCode from "../../../components/VsCode/VsCode.tsx";

export default function Transformation() {
  

  return (
    <section className={'topic container'}>
      <h2>Преобразование типов в JavaScript</h2>

      <p>
        <strong>Преобразование типов</strong> — это процесс, при котором значение одного типа неявно или явно превращается в значение другого типа.
      </p>

      <h3>Явное преобразование</h3>
      <p>
        Происходит, когда разработчик намеренно приводит значение к нужному типу с помощью функций или операторов.
      </p>
      <p>
        Примеры:
      </p>
      <VsCode>
String(123)         // "123"<br />
Number("42")        // 42<br />
Boolean("")         // false<br />
(+"3.14")           // 3.14
      </VsCode>

      <h3>Неявное преобразование</h3>
      <p>
        Происходит автоматически, когда JavaScript ожидает значение определённого типа, но получает другого.
      </p>
      <p>Чаще всего возникает при операциях с разными типами.</p>
      <VsCode>
"5" + 2             // "52" — число преобразуется в строку<br />
"5" - 2             // 3 — строка преобразуется в число<br />
true + 1           // 2 — true становится 1<br />
null + 1           // 1 — null становится 0
      </VsCode>

      <h3>Falsy-значения</h3>
      <p>
        Некоторые значения при приведении к логическому типу становятся <code>false</code>. Их называют <strong>falsy</strong>.
      </p>
      <p>Полный список:</p>
      <VsCode>
false<br />
0, -0<br />
"" (пустая строка)<br />
null<br />
undefined<br />
NaN
      </VsCode>

      <h3>Truthy-значения</h3>
      <p>
        Все остальные значения считаются <strong>truthy</strong> — при преобразовании в логическое значение становятся <code>true</code>.
      </p>
      <p>Пример:</p>
      <VsCode>
"0", "false", [], {`{}`}, function() {} → все это truthy
      </VsCode>

      <h3>Особенности оператора +</h3>
      <p>
        Если один из операндов — строка, то второй тоже приводится к строке, и происходит конкатенация.
      </p>
      <VsCode>
"hello" + 5     // "hello5"<br />
true + "1"      // "true1"
      </VsCode>
      <p>
        В остальных арифметических операциях (например, <code>-</code>, <code>*</code>) операнды приводятся к числам.
      </p>

      <h3>Object → Primitive</h3>
      <p>
        Когда объект участвует в выражении, его преобразуют к примитиву. Сначала вызывается метод <code>valueOf()</code>, затем <code>toString()</code>, если первый не дал примитив.
      </p>
      <VsCode>
[1, 2] + 3      // "1,23"<br />
        {`{}`} + 1         // "[object Object]1"
      </VsCode>

      <h3>NaN</h3>
      <p>
        Значение <code>NaN</code> (Not-a-Number) появляется при некорректных числовых операциях.
      </p>
      <VsCode>
Number("abc")     // NaN<br />
undefined + 1     // NaN
      </VsCode>
      <p>
        Особенность: <code>NaN !== NaN</code>. Чтобы проверить — используй <code>Number.isNaN()</code>.
      </p>

      <h3>Сравнение == и ===</h3>
      <p>
        <code>==</code> (нестрогое равенство) выполняет преобразование типов перед сравнением. <code>===</code> (строгое равенство) сравнивает без преобразований.
      </p>
      <VsCode>
0 == false         // true<br />
"" == 0            // true<br />
null == undefined  // true<br />
0 === false        // false
      </VsCode>

      <h3>Тонкости</h3>
      <ul>
        <li><code>null == undefined</code> → <strong>true</strong>, но <code>null === undefined</code> → <strong>false</strong></li>
        <li><code>typeof NaN</code> → "number"</li>
        <li><code>typeof function() {}</code> → "function"</li>
        <li><code>[] == false</code> → <strong>true</strong> (объект → "" → 0)</li>
        <li><code>[] == ![]</code> → <strong>true</strong> (неочевидное поведение)</li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li>Преобразования бывают явные (ручные) и неявные (автоматические).</li>
        <li>Строка с <code>+</code> приводит другой операнд к строке. Остальные операторы — к числу.</li>
        <li>Falsy-значения: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>.</li>
        <li><code>==</code> сравнивает с приведением типов. <code>===</code> — без него.</li>
        <li><code>typeof</code> может вернуть неожиданные значения: <code>"object"</code> для <code>null</code>, <code>"function"</code> для функций, <code>"number"</code> для <code>NaN</code>.</li>
        <li>При участии объектов в выражении они преобразуются к примитивам.</li>
        <li><code>NaN</code> никогда не равен самому себе.</li>
      </ul>
      <NavButtons prev={'/js/Primitives'} next={'/js/Operators'} />
      <Test allTasks={[
        {
          question: 'Что будет результатом выражения "5" + 2?',
          variants: ['7', '"52"', 'NaN', '"5 2"'],
          explanations: [
            'При + со строкой второй операнд приводится к строке и происходит конкатенация.',
            'Результат — строка "52", число 2 превращается в строку.',
            'NaN появляется только при неверных числовых операциях, здесь их нет.',
            'Пробела между "5" и "2" нет, поэтому "5 2" не выводится.'
          ],
          correct: 1,
          isCode: true,
          code: '"5" + 2'
        },
        {
          question: 'Какое значение вернёт выражение Boolean("")?',
          variants: ['true', 'false', 'undefined'],
          explanations: [
            'Пустая строка считается falsy и преобразуется в false.',
            'false — именно это значение возвращает Boolean от пустой строки.',
            'undefined не появляется в результате Boolean().'
          ],
          correct: 1,
          isCode: true,
          code: 'Boolean("")'
        },
        {
          question: 'Что произойдёт при вычислении выражения null + 1?',
          variants: ['1', 'NaN', 'null1'],
          explanations: [
            'null при арифметике преобразуется к 0, 0 + 1 = 1.',
            'NaN появляется при некорректных числовых операциях, здесь корректно.',
            'null не превращается в строку в этом случае, поэтому "null1" не получится.'
          ],
          correct: 0,
          isCode: true,
          code: 'null + 1'
        },
        {
          question: 'Что выведет выражение true + "1"?',
          variants: ['"true1"', '2', '"11"'],
          explanations: [
            'Если один из операндов строка, происходит конкатенация, true становится строкой "true".',
            '2 получаем при числовом сложении, здесь оператор + со строкой.',
            '"11" получился бы, если бы true было преобразовано в число 1 перед сложением со строкой "1".'
          ],
          correct: 0,
          isCode: true,
          code: 'true + "1"'
        },
        {
          question: 'Какое значение будет у выражения [] == false?',
          variants: ['true', 'false', 'TypeError'],
          explanations: [
            'Объект [] преобразуется к пустой строке "", которая затем приводится к 0, равно false.',
            'false было бы при строгом сравнении ===.',
            'TypeError не возникает при сравнении объектов и примитивов.'
          ],
          correct: 0,
          isCode: true,
          code: '[] == false'
        },
        {
          question: 'Что вернёт выражение Number("abc")?',
          variants: ['NaN', '0', 'undefined', 'TypeError'],
          explanations: [
            '"abc" не может быть преобразовано в число, поэтому результат NaN.',
            '0 получается при преобразовании пустой строки, но не здесь.',
            'undefined — отдельное значение, не возвращается функцией Number.',
            'TypeError не бросается при Number("abc"), просто возвращается NaN.'
          ],
          correct: 0,
          isCode: true,
          code: 'Number("abc")'
        },
        {
          question: 'Что будет результатом выражения "" == 0?',
          variants: ['true', 'false', 'TypeError'],
          explanations: [
            'Пустая строка преобразуется к числу 0, поэтому равенство true.',
            'false было бы при строгом сравнении ===.',
            'TypeError не возникает при сравнении примитивов.'
          ],
          correct: 0,
          isCode: true,
          code: '"" == 0'
        },
        {
          question: 'Что вернёт выражение [1,2] + [3,4]?',
          variants: ['"1,23,4"', '"[1,2][3,4]"', 'NaN', 'Ошибка'],
          explanations: [
            'Оба массива приводятся к строкам "1,2" и "3,4", происходит конкатенация.',
            'Такого результата не будет, потому что + не объединяет массивы, а приводит к строкам.',
            'NaN не получается при строковом сложении.',
            'Ошибка не выбрасывается при сложении массивов.'
          ],
          correct: 0,
          isCode: true,
          code: '[1,2] + [3,4]'
        },
        {
          question: 'Что вернёт выражение typeof NaN?',
          variants: ['"number"', '"NaN"', '"undefined"', '"object"'],
          explanations: [
            'NaN считается числом в JavaScript, поэтому typeof возвращает "number".',
            '"NaN" — не валидный тип в JavaScript.',
            '"undefined" возвращается для необъявленных переменных.',
            '"object" возвращается для объектов и null.'
          ],
          correct: 0,
          isCode: true,
          code: 'typeof NaN'
        },
        {
          question: 'Что вернёт выражение null == undefined?',
          variants: ['true', 'false', 'null', 'undefined'],
          explanations: [
            'null и undefined равны при нестрогом сравнении ==.',
            'false было бы при строгом сравнении ===.',
            'Операторы сравнения возвращают boolean, не исходные значения.',
            'undefined — отдельное значение, не результат сравнения.'
          ],
          correct: 0,
          isCode: true,
          code: 'null == undefined'
        }
      ]} />
      <NavButtons prev={'/js/Primitives'} next={'/js/Operators'} />
    </section>
  )
}
