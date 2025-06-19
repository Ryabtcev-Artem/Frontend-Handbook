import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import VsCode from "../../../components/VsCode/VsCode.tsx";

type SwitchProps = {}
export default function Switch(props: SwitchProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Switch в JavaScript</h2>

      <h3>Определение</h3>
      Оператор <code>switch</code> — это конструкция выбора, которая сравнивает одно выражение с несколькими вариантами (<code>case</code>) и выполняет код, соответствующий первому совпадению.

      <h3>Как работает</h3>
      <code>switch</code> вычисляет значение выражения один раз, затем последовательно сравнивает его с каждым значением в <code>case</code>. Как только найдено совпадение, выполняется соответствующий блок и всё, что ниже, до ближайшего <code>break</code> или конца конструкции. Если совпадений нет — выполняется блок <code>default</code>, если он есть.

      <h3>Синтаксис</h3>
      <VsCode>{`switch (выражение) {
  case значение1:
    // блок кода
    break;
  case значение2:
    // другой блок кода
    break;
  default:
    // если ни один case не подошёл
}
`}</VsCode>

      <h3>Роль break</h3>
      <code>break</code> останавливает выполнение <code>switch</code>. Без него выполнение переходит к следующему <code>case</code> — даже если он не совпадает. Это поведение называется "проваливание" (fallthrough) и может быть как полезным, так и причиной ошибок, если не учитывать его явно.

      <h3>Пример с break</h3>
      <VsCode>{`let role = 'admin';

switch (role) {
  case 'user':
    console.log('Пользователь');
    break;
  case 'admin':
    console.log('Администратор');
    break;
  default:
    console.log('Гость');
}`}
</VsCode>
      Результат: <code>Администратор</code>

      <h3>Пример без break</h3>
      <VsCode>{`let n = 2;

switch (n) {
  case 2:
    console.log('Два');
  case 3:
    console.log('Три');
  default:
    console.log('Что-то ещё');
}`}
</VsCode>
      Результат:
      <VsCode>{`Два\nТри\nЧто-то ещё`}</VsCode>
      Все блоки после совпадения выполнились из-за отсутствия <code>break</code>.

      <h3>Тип сравнения</h3>
      <code>switch</code> использует строгое сравнение — аналог <code>===</code>. Это значит, что значение и тип должны совпадать. Например, <code>'5'</code> не равно <code>5</code>.

      <h3>default</h3>
      <code>default</code> — это блок, который выполняется, если ни один <code>case</code> не совпал. Он необязателен и может располагаться в любом месте конструкции, но чаще всего его пишут в конце.

      <h3>Группировка case</h3>
      Несколько <code>case</code> можно объединить, если нужно выполнить один и тот же блок:
      <VsCode>{`let x = 0;

switch (x) {
  case -1:
  case 0:
  case 1:
    console.log('Около нуля');
    break;
  default:
    console.log('Что-то другое');
}`}
</VsCode>

      <h3>Когда использовать switch</h3>
      <code>switch</code> удобно использовать, когда:
      <ul>
        <li>нужно проверить одно и то же значение по нескольким вариантам;</li>
        <li>все варианты — конкретные значения, не диапазоны;</li>
        <li>код должен быть читаемым и структурированным (вместо длинной цепочки <code>if</code>).
        </li>
      </ul>
      В остальных случаях предпочтительнее использовать <code>if/else</code>.

      <h2>Итого</h2>
      <ul>
        <li>
          <code>switch</code> проверяет значение один раз и сравнивает его со всеми <code>case</code>.
        </li>
        <li>Сравнение происходит строго, по принципу <code>===</code>.</li>
        <li>
          <code>break</code> нужен, чтобы остановить выполнение, иначе будет "проваливание".
        </li>
        <li><code>default</code> срабатывает, если нет ни одного совпадения.
        </li>
        <li>Можно объединять <code>case</code>, если у них общий код.</li>
        <li>Используется там, где нужно структурировать выбор по фиксированным значениям.</li>
      </ul>
      <NavButtons
        prev={'/js/Operators'}
        next={'/js/Loops'}
      />
      <Test
        allTasks={[{
          question: "Что выведет следующий код?",
          code: "let x = '2';\n\nswitch (x) {\n  case 2:\n    console.log('число');\n    break;\n  case '2':\n    console.log('строка');\n    break;\n  default:\n    console.log('ничего');\n}",
          variants: ["'число'", "'строка'", "'ничего'", "'строка'\n'ничего'"],
          correct: 1,
          explanations: ["Сравнение строгое, строка '2' не равна числу 2", "Сравнение строгое, '2' === '2' → сработает этот case", "default не выполнится, так как есть совпадение", "В case '2' присутствует break, до default не доходим"],
          isCode: true
        }, {
          question: "Зачем нужен оператор break в switch?",
          code: "",
          variants: ["Чтобы перейти к следующему case", "Чтобы выйти из switch после выполнения case", "Чтобы повторно проверить условие", "Чтобы вызвать default"],
          correct: 1,
          explanations: ["break не переходит к следующему case — он завершает switch", "break завершает выполнение конструкции switch", "switch не повторяет проверку условий", "default вызывается только при отсутствии совпадений, не через break"],
          isCode: false
        }, {
          question: "Что произойдёт, если забыть break в case?",
          code: "let val = 'a';\n\nswitch (val) {\n  case 'a':\n    console.log('A');\n  case 'b':\n    console.log('B');\n}",
          variants: ["Выведется только 'A'", "Выведется только 'B'", "Выведется 'A' и 'B'", "Ничего не выведется"],
          correct: 2,
          explanations: ["break отсутствует, поэтому после 'A' продолжится выполнение следующего блока", "case 'b' выполнится только после case 'a'", "Верно: проваливание произойдёт, выполнятся оба блока", "Условие совпадёт, поэтому что-то выведется"],
          isCode: true
        }, {
          question: "Можно ли использовать выражение в case?",
          code: "let n = 10;\n\nswitch (n) {\n  case 5 + 5:\n    console.log('Десять');\n    break;\n}",
          variants: ["Нет, case принимает только константы", "Да, но только если выражение в скобках", "Да, можно использовать любые выражения", "Нет, switch работает только со строками"],
          correct: 2,
          explanations: ["В выражении можно использовать любое значение, не обязательно константу", "Скобки не влияют на синтаксис case", "Да, case может содержать выражение — оно будет вычислено, выведется 'Десять'", "switch работает с любыми типами, не только строками"],
          isCode: false
        }, {
          question: "Когда выполняется блок default?",
          code: "",
          variants: ["Если совпал хотя бы один case", "Если нет ни одного совпадения", "Всегда, если он есть"],
          correct: 1,
          explanations: ["Если совпадение найдено, default пропускается", "Верно: default выполняется только если ни один case не совпал", "default — необязательный блок, он не выполняется всегда"],
          isCode: false
        }]}
      />
      <JsPlayground
        taskId={1}
        functionName={'switchWeather'}
        args={[['"rain"'],['"sunny"'],['"default"']]}
        answers={['бери зонт','пошли загорать', 'сидим дома']}
        defaultCode={'function switchWeather(weather){\n  \n}'}
        title={'Задача: Прогноз на сегодня'}
        examples={['switchWeather("rain") // бери зонт','switchWeather("sunny") // пошли загорать', 'switchWeather("default") // сидим дома']}
        description={'В функции switchWeather вы получаете строку weather. Если в weather строка "rain", то выведите в консоль "бери зонт", если "sunny" - "пошли загорать", если что-то другое - "сидим дома". Реализуйте код, используя оператор switch.'}
      />
      <NavButtons
        prev={'/js/Operators'}
        next={'/js/Loops'}
      />
    </section>
  )
}