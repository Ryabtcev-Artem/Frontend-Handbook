import VsCode from '../../../components/VsCode/VsCode.tsx';
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Modules() {
  

  return (
    <section className={'topic container'}>
      <h2>Модули в Node.js: CommonJS и ES Modules</h2>

      <p>
        В JavaScript модули позволяют разбивать код на отдельные части, которые можно подключать и использовать повторно. В Node.js существуют две основные системы модулей:
      </p>

      <h3>CommonJS (CJS)</h3>
      <p>
        Это классическая система модулей в Node.js, которая использовалась с самых первых версий. В CommonJS модули экспортируются и импортируются с помощью функций <code>module.exports</code> и <code>require()</code>.
      </p>
      <VsCode>{`// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require('./math');
console.log(add(2, 3)); // 5`}</VsCode>
      <p>
        CommonJS загружает модули синхронно, что хорошо подходит для серверной среды с файловой системой.
      </p>

      <h3>ES Modules (ESM)</h3>
      <p>
        Это современный стандарт модулей, который появился в JavaScript и поддерживается в браузерах и последних версиях Node.js. Здесь используются ключевые слова <code>import</code> и <code>export</code>.
      </p>
      <VsCode>{`// math.js
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.js';
console.log(add(2, 3)); // 5`}</VsCode>
      <p>
        ES Modules поддерживают статический анализ кода и позволяют оптимизировать загрузку модулей. В Node.js для использования ESM нужно либо:
      </p>
      <ul>
        <li>Переименовать файлы в <code>.mjs</code>, либо</li>
        <li>В файле <code>package.json</code> указать <code>"type": "module"</code></li>
      </ul>

      <h3>Что использовать сейчас?</h3>
      <p>
        ES Modules — это будущее JavaScript и Node.js. Современные проекты рекомендуют переходить на ESM, так как они лучше интегрируются с экосистемой фронтенда, поддерживают tree shaking и обеспечивают более удобный и понятный синтаксис. Поэтому в этом разделе мы будем использовать только ESM.
      </p>
      <p>
        Однако, многие популярные библиотеки и старый код до сих пор используют CommonJS, поэтому в реальных проектах часто приходится работать с обеими системами.
      </p>
      <p>
        В Node.js можно даже смешивать оба формата, но с некоторыми ограничениями и особенностями.
      </p>

      <h2>Итого</h2>
      <ul>
        <li><strong>CommonJS</strong> — классический, простой, синхронный, широко используется в Node.js.</li>
        <li><strong>ES Modules</strong> — современный стандарт, поддерживается в браузерах и Node.js, асинхронный и оптимизированный.</li>
        <li>Для новых проектов лучше использовать ES Modules, особенно если есть фронтенд часть на современном JS.</li>
      </ul>
      <NavButtons prev={'/nodeJs/BlockingAndNonBlockingIo'} next={'/nodeJs/FileSystem'} />
    </section>
  )
}
