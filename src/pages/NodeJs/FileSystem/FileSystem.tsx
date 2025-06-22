import VsCode from '../../../components/VsCode/VsCode.tsx';
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type FileSystemProps = {}
export default function FileSystem(props: FileSystemProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Модуль <code>fs</code> в Node.js (File System)</h2>

      <p>
        Модуль <code>fs</code> — это встроенный глобальный модуль Node.js для работы с файловой системой. С его помощью можно читать, создавать, изменять и удалять файлы и каталоги.
      </p>

      <h3>Подключение модуля</h3>
      <p>Для начала нужно импортировать модуль:</p>
      <VsCode>{`import fs from 'fs';`}</VsCode>

      <h3>Чтение файлов</h3>
      <p>Есть два основных способа чтения файлов:</p>
      <ul>
        <li><strong>Синхронное (блокирующее)</strong> — программа ждёт завершения операции</li>
        <li><strong>Асинхронное (неблокирующее)</strong> — операция запускается, а программа продолжает работу</li>
      </ul>
      <VsCode>{`// Синхронное чтение
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

// Асинхронное чтение
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`}</VsCode>

      <h3>Запись файлов</h3>
      <p>Записать данные в файл можно так:</p>
      <VsCode>{`// Синхронная запись
fs.writeFileSync('file.txt', 'Привет, файл!');

// Асинхронная запись
fs.writeFile('file.txt', 'Привет, файл!', err => {
  if (err) throw err;
  console.log('Файл сохранён');
});`}</VsCode>

      <h3>Создание и удаление файлов и папок</h3>
      <p>Пример создания и удаления файлов и каталогов:</p>
      <VsCode>{`// Создать папку
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Папка создана');
});

// Удалить файл
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('Файл удалён');
});

// Удалить папку (должна быть пустой)
fs.rmdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Папка удалена');
});`}</VsCode>

      <h3>Проверка существования файла или папки</h3>
      <VsCode>{`fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'Файл не существует' : 'Файл существует');
});`}</VsCode>

      <h3>Полезные методы модуля <code>fs</code></h3>
      <ul>
        <li><code>fs.readFile / fs.readFileSync</code> — чтение файла</li>
        <li><code>fs.writeFile / fs.writeFileSync</code> — запись файла</li>
        <li><code>fs.appendFile / fs.appendFileSync</code> — добавление данных в конец файла</li>
        <li><code>fs.unlink / fs.unlinkSync</code> — удаление файла</li>
        <li><code>fs.mkdir / fs.mkdirSync</code> — создание папки</li>
        <li><code>fs.rmdir / fs.rmdirSync</code> — удаление папки</li>
        <li><code>fs.readdir / fs.readdirSync</code> — чтение содержимого папки</li>
        <li><code>fs.stat / fs.statSync</code> — получение информации о файле или папке</li>
      </ul>

      <p>
        Модуль <code>fs</code> мощный и гибкий, он позволяет создавать различные инструменты для работы с файлами и каталогами в Node.js.
      </p>
      <NavButtons prev={'/nodeJs/Modules'} next={'/nodeJs/HttpServer'}/>
    </section>
  )
}
