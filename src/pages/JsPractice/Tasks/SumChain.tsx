import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function SumChain() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={27}
        title="Цепочка суммы (Sum Chain)"
        description="Напишите функцию, которая позволяет вызывать себя цепочкой: sum(1)(2)(3)() → 6."
        validationMode="function"
        functionName="sumChain"
        defaultCode={`function sumChain(a) {
  
}`}
        testCases={[
          { input: [1,2,3], expected: 6, description: '1+2+3' },
          { input: [5,10], expected: 15, description: '5+10' },
          { input: [], expected: 0, description: 'Пусто' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-reduce'} next={'/js-practice/flatten-array'} />
    </section>
  )
} 