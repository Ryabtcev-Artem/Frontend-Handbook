import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function ReverseString() {
  return (
    <section className={'container'}>
      <JsPlayground
        taskId={7}
        title="Реверс строки"
        description="Напишите функцию, которая принимает строку и возвращает новую строку с символами в обратном порядке."
        validationMode="function"
        functionName="reverseString"
        defaultCode={`function reverseString(str) {
  
}`}
        testCases={[
          {
            input: ["hello"],
            expected: "olleh",
            description: 'Реверс строки "hello" → "olleh"'
          },
          {
            input: ["World"],
            expected: "dlroW",
            description: 'Регистр символов не должен влиять на результат'
          },
          {
            input: [""],
            expected: "",
            description: 'Реверс пустой строки → "" (пустая строка)'
          },
          {
            input: ["a"],
            expected: "a",
            description: 'reverseString("a") → "a"'
          },
          {
            input: ["12345"],
            expected: "54321",
            description: 'reverseString("12345") → "54321"'
          }
        ]}
      />

      <NavButtons
        prev={'/js-practice/remove-duplicates'}
        next={'/js-practice/factorial'}
      />
    </section>
  );
}