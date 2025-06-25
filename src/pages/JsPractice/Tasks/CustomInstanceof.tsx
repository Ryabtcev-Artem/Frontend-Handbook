import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CustomInstanceof() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={49}
        title="Своя реализация instanceof (Custom Instanceof)"
        description="Напишите функцию, которая реализует поведение оператора instanceof."
        validationMode="function"
        functionName="customInstanceof"
        defaultCode={`function customInstanceof(obj, constructor) {
  
}`}
        testCases={[
          { input: [{}, Object], expected: true, description: 'Object' },
        ]}
      />
      <NavButtons prev={'/js-practice/custom-new'} next={'/js-practice/promise-chain'} />
    </section>
  )
} 