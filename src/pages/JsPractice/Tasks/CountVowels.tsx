import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function CountVowels() {
    return (
        <section className={"container"}>
            <JsPlayground
                taskId={4}
                title="Подсчёт гласных в строке"
                description="Гласные буквы — это a, e, i, o, u (и их заглавные варианты). В этой задаче вам нужно написать функцию, которая подсчитывает количество гласных в переданной строке. Например, в слове 'Hello' гласных 2. Попробуйте решить через цикл, регулярные выражения или другие способы — главное, чтобы функция корректно учитывала и заглавные, и строчные буквы."
                validationMode="function"
                functionName="countVowels"
                defaultCode={`function countVowels(str) {
   
}`}
                testCases={[
                    {
                        input: ["Hello"],
                        expected: 2,
                        description: 'Два гласных в слове "Hello"',
                    },
                    {
                        input: ["Rhythm"],
                        expected: 0,
                        description: 'Нет гласных в слове "Rhythm"',
                    },
                    {
                        input: ["AEIOUaeiou"],
                        expected: 10,
                        description: "Все гласные в верхнем и нижнем регистре",
                    },
                    {
                        input: ["Javascript"],
                        expected: 3,
                        description: 'Три гласных в слове "Javascript"',
                    },
                    { input: [""], expected: 0, description: "Пустая строка" },
                ]}
            />
            <NavButtons
                prev={"/js-practice/max-min-in-array"}
                next={"/js-practice/is-prime"}
            />
        </section>
    );
}
