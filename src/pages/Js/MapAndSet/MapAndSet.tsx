import VsCode from "../../../components/VsCode/VsCode.tsx"
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function MapAndSet() {
  

  return (
    <section className={'topic container'}>
      <h2>Map и Set в JavaScript</h2>

      <h3>Map</h3>
      <p><b>Map</b> — структура данных, которая хранит пары ключ-значение. В отличие от обычных объектов, ключи могут быть любого типа: объект, функция, примитив и т.д.</p>

      <VsCode>{`const map = new Map();
const objKey = {id: 1};
map.set(objKey, "данные");
console.log(map.get(objKey)); // "данные"`}</VsCode>

      <p>Основные методы <code>Map</code>:</p>
      <ul>
        <li><code>set(key, value)</code> — добавляет пару ключ-значение. Возвращает сам Map.</li>
        <li><code>get(key)</code> — возвращает значение по ключу или <code>undefined</code>.</li>
        <li><code>has(key)</code> — проверяет наличие ключа (true/false).</li>
        <li><code>delete(key)</code> — удаляет пару по ключу. Возвращает true/false.</li>
        <li><code>clear()</code> — удаляет все пары.</li>
        <li><code>size</code> — количество элементов.</li>
      </ul>

      <p>Map сохраняет порядок добавления ключей:</p>
      <VsCode>{`const map = new Map();
map.set("a", 1);
map.set("b", 2);
for (let [key, value] of map) {
  console.log(key, value);
}
// a 1
// b 2`}</VsCode>

      <p>Map поддерживает итерацию:</p>
      <ul>
        <li><code>map.keys()</code>, <code>map.values()</code>, <code>map.entries()</code></li>
        <li><code>{`map.forEach((value, key) => { ... })`}</code></li>
      </ul>

      <h3>Set</h3>
      <p><b>Set</b> — структура, хранящая <b>только уникальные значения</b>. Порядок добавления сохраняется.</p>
      <VsCode>{`const set = new Set();
set.add(1);
set.add(2);
set.add(1);
console.log(set); // Set(2) {1, 2}`}</VsCode>

      <p>Основные методы <code>Set</code>:</p>
      <ul>
        <li><code>add(value)</code> — добавляет значение. Возвращает сам Set.</li>
        <li><code>has(value)</code> — проверяет наличие значения.</li>
        <li><code>delete(value)</code> — удаляет значение. Возвращает true/false.</li>
        <li><code>clear()</code> — очищает коллекцию.</li>
        <li><code>size</code> — количество элементов.</li>
      </ul>

      <p>Set также поддерживает итерации:</p>
      <ul>
        <li><code>set.values()</code>, <code>set.keys()</code>, <code>set.entries()</code></li>
        <li><code>{`set.forEach(value => { ... })`}</code></li>
      </ul>

      <h3>Примеры сравнения</h3>
      <p>Map допускает любой тип ключей, в отличие от объектов:</p>
      <VsCode>{`const obj = Record<string, never>;
const map = new Map();
map.set(obj, "значение");
console.log(map.get(obj)); // "значение"`}</VsCode>

      <p>Set удобен для удаления дублей:</p>
      <VsCode>{`const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]`}</VsCode>

      <h3>Особенности</h3>
      <ul>
        <li><code>Map</code> полезен, когда ключи — не строки.</li>
        <li><code>Set</code> — для хранения уникальных значений и быстрой проверки их наличия.</li>
        <li>Оба поддерживают <code>forEach</code> и итерации <code>for...of</code>.</li>
        <li><code>Map</code> и <code>Set</code> — не заменяют объекты и массивы, а дополняют их.</li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li><code>Map</code> — коллекция пар <b>любой_тип</b>: значение, с сохранением порядка и итерацией.</li>
        <li><code>Set</code> — уникальные значения с быстрым доступом и поддержкой итераций.</li>
        <li>Подходят для продвинутых структур данных, кешей, списков без повторов и т.д.</li>
      </ul>
      <NavButtons prev={'/js/Arrays'} next={'/js/SettimeoutAndSetinterval'} />
    </section>
  )
}
