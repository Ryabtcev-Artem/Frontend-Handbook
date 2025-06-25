import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function BindCallApply() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={37}
        title="bind, call, apply"
        description="Напишите свои реализации методов bind, call и apply для функций."
        validationMode="function"
        functionName="bindCallApply"
        defaultCode={`function myBind(fn, context, ...args) {
  
}

function myCall(fn, context, ...args) {
  
}

function myApply(fn, context, args) {
  
}`}
        testCases={[
          { input: [function() {return this.x;}, {x: 5}], expected: 5, description: 'bind' },
        ]}
      />
      <NavButtons prev={'/js-practice/hoisting-quiz'} next={'/js-practice/closure-task'} />
    </section>
  )
} 