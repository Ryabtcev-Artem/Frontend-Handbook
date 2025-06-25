import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function PromiseChain() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={50}
        title="Цепочка промисов (Promise Chain)"
        description="Напишите функцию, которая выполняет цепочку промисов последовательно."
        validationMode="function"
        functionName="promiseChain"
        defaultCode={`function promiseChain(functions) {
  
}`}
        testCases={[
          {
            input: [[() => Promise.resolve(1), () => Promise.resolve(2)]],
            expected: 2,
            async: true,
            description: 'Цепочка: результат последнего промиса'
          },
          {
            input: [[
              () => Promise.resolve('a'),
              prev => Promise.resolve(prev + 'b'),
              prev => Promise.resolve(prev + 'c')
            ]],
            expected: 'abc',
            async: true,
            description: 'Цепочка: аккумуляция значений'
          }
        ]}
      />
      <NavButtons prev={'/js-practice/custom-instanceof'} next={'/js-practice/pipe-compose'} />
    </section>
  )
} 