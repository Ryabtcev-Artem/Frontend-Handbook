import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type PromisesProps = {}
export default function Promises(props: PromisesProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Promises</h2>

      <h3>Что такое Promise</h3>
      <p>
        <strong>Promise</strong> — это встроенный объект в JavaScript, представляющий результат асинхронной операции, который может быть доступен сейчас, позже или никогда.
      </p>
      <p>
        Другими словами, это обёртка над значением, которое появится в будущем.
      </p>

      <h3>Зачем нужны Promise</h3>
      <p>
        Без Promise асинхронный код становится вложенным и трудночитаемым (так называемый "callback hell"). Promise помогает писать асинхронный код линейно и понятно.
      </p>

      <h3>Состояния Promise</h3>
      <ul>
        <li><strong>pending</strong> — ожидание: начальное состояние</li>
        <li><strong>fulfilled</strong> — успешно выполнен</li>
        <li><strong>rejected</strong> — завершён с ошибкой</li>
      </ul>

      <h3>Как создать Promise</h3>
      <p>
        Используется конструктор <code>new Promise</code>, который принимает функцию с двумя аргументами — <code>resolve</code> и <code>reject</code>:
      </p>
      <VsCode>{`const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Готово");
  } else {
    reject("Ошибка");
  }
});`}</VsCode>

      <h3>Как использовать Promise</h3>
      <p>
        Promise предоставляет методы <code>.then</code>, <code>.catch</code> и <code>.finally</code> для обработки результата:
      </p>
      <VsCode>{`fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Завершено"));`}</VsCode>

      <h3>Цепочка then</h3>
      <p>
        Метод <code>then</code> возвращает новый Promise, что позволяет строить цепочки асинхронных операций:
      </p>
      <VsCode>{`getUser()
  .then(getOrders)
  .then(showOrders)
  .catch(handleError);`}</VsCode>

      <h3>Promise.all</h3>
      <p>
        Позволяет ждать несколько Promise одновременно. Возвращает один Promise, который выполнится, когда выполнятся все переданные.
      </p>
      <VsCode>{`Promise.all([fetchA(), fetchB()])
  .then(([resultA, resultB]) => {
    console.log(resultA, resultB);
  });`}</VsCode>

      <h3>Promise.race</h3>
      <p>
        Возвращает результат первого завершившегося Promise (успех или ошибка).
      </p>
      <VsCode>{`Promise.race([slow(), fast()])
  .then(console.log);`}</VsCode>

      <h2>Итого</h2>
      <ul>
        <li>
          <strong>Promise</strong> — объект для работы с результатами асинхронных операций.
        </li>
        <li>Имеет 3 состояния: pending, fulfilled, rejected.</li>
        <li>Создаётся через <code>new Promise(resolve, reject)</code>.</li>
        <li>Обработка через <code>.then</code>, <code>.catch</code>, <code>.finally</code>.
        </li>
        <li>Цепочки then помогают писать понятный асинхронный код.</li>
        <li>
          <code>Promise.all</code> и <code>Promise.race</code> — для управления несколькими промисами.
        </li>
      </ul>
      <Test
        allTasks={[
          {
            question: 'Какое состояние имеет Promise сразу после создания?',
            variants: ['"pending"', '"fulfilled"', '"rejected"', '"resolved"'],
            explanations: [
              'Начальное состояние любого Promise — ожидание (pending), пока не выполнится или не отклонится.',
              'Fulfilled — состояние после успешного выполнения, но не сразу после создания.',
              'Rejected — состояние после ошибки, также не сразу после создания.',
              'Resolved — не состояние Promise, а термин, означающий «выполненный или отклонённый».'
            ],
            correct: 0,
            isCode: false,
          },
          {
            question: 'Что вернёт этот код?',
            code: `const p = new Promise((resolve) => resolve(42));
p.then(value => value * 2);`,
            variants: [
              'Promise { <pending> }',
              'Promise { 84 }',
              'undefined',
              '84'
            ],
            explanations: [
              'Promise уже выполнен (resolved), но сам then возвращает новый Promise в состоянии pending.',
              'Неправильно: Promise не содержит значение напрямую, а обёрнут в объект.',
              'then возвращает Promise, а не конкретное значение или undefined.',
              'then колбэк возвращает 84, но возвращаемое значение — новый Promise, а не число напрямую.'
            ],
            correct: 0,
            isCode: true,
          },
          {
            question: 'Чем отличается методы Promise.all и Promise.race?',
            variants: [
              '"Promise.all ждёт все промисы, Promise.race ждёт первый завершившийся (успех или ошибка)"',
              '"Promise.all возвращает первый выполненный промис, Promise.race — все промисы"',
              '"Promise.all обрабатывает только успешные промисы, Promise.race — только ошибки"',
              '"Promise.all и Promise.race делают одно и то же"'
            ],
            explanations: [
              'Promise.all ждёт, пока все промисы завершатся успешно, Promise.race — возвращает результат первого завершившегося, будь то успех или ошибка.',
              'Это противоположно реальному поведению методов.',
              'Оба метода обрабатывают и успех, и ошибку, но с разной логикой ожидания.',
              'Это неверно, методы имеют разные цели.'
            ],
            correct: 0,
            isCode: false,
          },
          {
            question: 'Что произойдет, если внутри then вернуть другой Promise?',
            code: `Promise.resolve(1)
  .then(() => Promise.resolve(2))
  .then(value => console.log(value));`,
            variants: [
              'В консоль выведется 1',
              'В консоль выведется Promise',
              'В консоль выведется 2',
              'В консоль ничего не выведется'
            ],
            explanations: [
              'Первый then возвращает Promise с 2, поэтому следующий then получает уже 2.',
              'then автоматически распаковывает вложенные промисы, не выводя сам объект.',
              'Правильный ответ — значение разрешённого внутреннего Promise передаётся дальше.',
              'Выполнение цепочки then происходит, поэтому вывод будет.'
            ],
            correct: 2,
            isCode: false,
          }
        ]}
      />
      <NavButtons prev={'/js/SettimeoutAndSetinterval'} next={'/js/Fetch'} />
    </section>
  )
}