import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function HoistingQuiz() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={36}
        title="Викторина по hoisting (Hoisting Quiz)"
        description="Напишите, что выведет код, и объясните почему."
        validationMode="function"
        functionName="hoistingQuiz"
        defaultCode={`// Пример:
// console.log(a);
// var a = 5;
`}
        testCases={[
          { input: [], expected: undefined, description: 'console.log(a); var a = 5;' },
        ]}
      />
      <NavButtons prev={'/js-practice/deep-clone'} next={'/js-practice/bind-call-apply'} />
    </section>
  )
} 