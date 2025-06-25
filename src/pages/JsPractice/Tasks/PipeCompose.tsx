import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function PipeCompose() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={51}
        title="Pipe и Compose"
        description="Напишите функции pipe и compose для функционального программирования."
        validationMode="function"
        functionName="pipeCompose"
        defaultCode={`function pipe(...fns) {
  
}

function compose(...fns) {
  
}`}
        testCases={[
          { input: [x => x+1, x => x*2], expected: undefined, description: 'pipe/compose' },
        ]}
      />
      <NavButtons prev={'/js-practice/promise-chain'} next={'/js-practice/swap-variables'} />
    </section>
  )
} 