import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CompareArrays() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={13}
        title="Сравнение массивов"
        description="Напишите функцию, которая сравнивает два массива и возвращает true, если они равны по длине и содержимому (элементы на одинаковых позициях совпадают), и false в противном случае."
        validationMode="function"
        functionName="compareArrays"
        defaultCode={`function compareArrays(a, b) {
  
}`}
        testCases={[
          { input: [[1,2,3], [1,2,3]], expected: true, description: 'Одинаковые массивы' },
          { input: [[1,2,3], [3,2,1]], expected: false, description: 'Разный порядок' },
          { input: [[1,2], [1,2,3]], expected: false, description: 'Разная длина' },
          { input: [[], []], expected: true, description: 'Пустые массивы' },
        ]}
      />
      <NavButtons prev={'/js-practice/reverse-array'} next={'/js-practice/swap-first-last'} />
    </section>
  )
} 