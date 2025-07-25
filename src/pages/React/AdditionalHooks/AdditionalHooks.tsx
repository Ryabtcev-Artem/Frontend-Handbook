import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function AdditionalHooks() {

  return (
    <section className={'topic container'}>
      <h2>Дополнительные хуки в React</h2>

      <p>
        Дополнительные хуки — это встроенные функции React, которые решают специфические задачи, не охваченные базовыми хуками вроде <code>useState</code> и <code>useEffect</code>.
      </p>

      <p>
        Они не обязательны, но сильно упрощают жизнь, когда вам нужно, например, получить доступ к DOM-элементу, следить за контекстом или запомнить значение между рендерами.
      </p>

      <h3>useMemo</h3>
      <p><strong>useMemo</strong> — это хук, которые принимает функцию callback и массив зависимостей. По сути он кэширует результат выполнения функции
      и при новых вызовах будет возвращать его из кэша. React будет заново вызывать эту функцию только если изменятся зависимости.
      </p>

      <VsCode>{`const sortedList = useMemo(() => {
  return heavySort(data)
}, [data])`}</VsCode>

      <p>
        Это помогает избежать лишней нагрузки при тяжёлых вычислениях. Если <code>data</code> не изменилась — результат <code>heavySort</code> просто вернётся из памяти.
      </p>
      <p>Важно понимать, что использовать useMemo везде это плохая практика. Данный хук довольно тяжелый, операции
         поиска в кэше, сравнения зависимостей и т.д. — требовательные. Его нужно использовать, когда вы видите частые
        ререндеры, в которых каждый раз происходят сложные операции, к примеру сортировка или фильтр большого массива.
      </p>
      <h3>useCallback</h3>

      <p>
        <code>useCallback</code> похож на <code>useMemo</code>, но он запоминает саму функцию, а не результат её выполнения.
      </p>

      <VsCode>{`const handleClick = useCallback(() => {
  doSomething()
}, [])`}</VsCode>

      <p>
        Полезно, когда вы передаёте колбэк вниз по дереву компонентов, и не хотите, чтобы он каждый раз создавался заново.
      </p>

      <h3>useContext</h3>

      <p>
        <code>useContext</code> позволяет получать данные из ближайшего <code>Context.Provider</code>, минуя все промежуточные уровни.
      </p>

      <VsCode>{`const user = useContext(UserContext)`}</VsCode>

      <p>
        Контекст — это способ «протащить» данные, вроде текущего пользователя или темы оформления, через всю структуру компонентов без постоянной передачи через <code>props</code>.
      </p>

      <h3>useReducer</h3>

      <p>
        <code>useReducer</code> — альтернатива <code>useState</code> для более сложной логики управления состоянием.
      </p>

      <VsCode>{`const [state, dispatch] = useReducer(reducer, initialState)`}</VsCode>

      <p>
        Работает как Redux: есть «редьюсер» — чистая функция, которая по действию меняет состояние. Подходит для форм, сложных UI-сценариев или когда одно состояние зависит от другого.
      </p>

      <h2>Итого</h2>

      <ul>
        <li>
          <b>useRef</b> — даёт ссылку на DOM или хранит данные без перерендера.
        </li>
        <li><b>useMemo</b> — кэширует результат функции.</li>
        <li><b>useCallback</b> — кэширует саму функцию.</li>
        <li>
          <b>useContext</b> — получает данные из контекста без лишнего «прокидывания».
        </li>
        <li><b>useReducer</b> — управляет сложным состоянием как Redux.</li>
      </ul>
      <NavButtons prev={'/react/UseRef'} next={'/react/Forms'} />
    </section>
  )
}