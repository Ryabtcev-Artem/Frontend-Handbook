import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Intersection() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={24}
        title="Пересечение массивов (Intersection)"
        description="Напишите функцию, которая возвращает массив общих элементов для двух массивов. Порядок не важен."
        validationMode="function"
        functionName="intersection"
        defaultCode={`function intersection(arr1, arr2) {
  
}`}
        testCases={[
          { input: [[1,2,3], [2,3,4]], expected: [2,3], description: 'Общие элементы' },
          { input: [[1,2], [3,4]], expected: [], description: 'Нет общих' },
          { input: [[], [1,2]], expected: [], description: 'Один пустой' },
          { input: [[1,1,2], [1,2,2]], expected: [1,2], description: 'Дубликаты' },
        ]}
      />
      <NavButtons prev={'/js-practice/valid-brackets'} next={'/js-practice/custom-map'} />
    </section>
  )
} 