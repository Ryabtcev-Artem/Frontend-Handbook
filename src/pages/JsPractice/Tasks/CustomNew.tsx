import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomNew() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={48}
        title="Своя реализация new (Custom New)"
        description="Напишите функцию, которая реализует поведение оператора new."
        validationMode="function"
        functionName="customNew"
        defaultCode={`function customNew(constructor, ...args) {
  
}`}
        testCases={[
          { input: [function A() {this.x = 1;}], expected: 'object', description: 'new' },
        ]}
      />
      <NavButtons prev={'/js-practice/limited-parallel'} next={'/js-practice/custom-instanceof'} />
    </section>
  )
} 