import "./Test.scss"
import VsCode from "../VsCode/VsCode.tsx";


type TestTask = {
  question: string;
  variants: string[];
  explanations: string[];
  correct: number;
  isCode: boolean;
  code?: string;
};

type TestProps = {
  allTasks: TestTask[];
};

export default function Test({allTasks}: TestProps) {
  function checkAnswer(target: HTMLElement) {
    const task = target.closest('.test__task')
    const variant = target.closest('.test__variant')
    const interaction = target.closest('.test__interaction') as HTMLElement
    const explanation = variant?.querySelector('.test__explanation') as HTMLElement
    const chosen = task?.querySelector('.chosen')
    const shownExplanation = task?.querySelector('.active') as HTMLElement
    if (chosen && chosen !== interaction) {
      chosen.classList.remove('chosen')
      chosen.classList.remove('correct')
      chosen.classList.remove('wrong')
      shownExplanation.classList.remove('active')
    }
    if (interaction.getAttribute('data-is-correct') === 'true') {
      interaction.classList.add('correct', 'chosen')
    } else {
      interaction.classList.add('wrong', 'chosen')
    }
    explanation.classList.add('active')
  }

  function onVariantClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement
    checkAnswer(target)
  }

  return (
    <div className="test">
      <h2 className={'test__title'}>Тест по уроку</h2>
      <details
        className={'test__details'}
      >
        <summary className={'test__hide'}>Скрыть тест</summary>
        {allTasks.map((task, index) => (
          <div
            key={index}
            className="test__task"
          >
            <h3 className="test__question">{task.question}</h3>
            {task.code && <VsCode>{task.code}</VsCode>}
            {task.variants.map((variant, i) => (
              <div
                className="test__variant"
                key={i}
              >
                <label
                  className="test__interaction"
                  data-is-correct={i === task.correct}
                  onClick={onVariantClick}
                  htmlFor={`task-${index}-variant-${i}`}
                >
                  <input
                    className="test__radio"
                    type="radio"
                    id={`task-${index}-variant-${i}`}
                    name={`task-${index}`}
                  />
                  <div
                    className={'test__variant-text'}
                  >{task.isCode ? (
                    <VsCode>
                      {variant}
                    </VsCode>
                  ) : variant}</div>
                </label>
                <p className={'test__explanation'}>Пояснение: {task.explanations[i]}</p>
              </div>
            ))}
          </div>
        ))}
      </details>
    </div>
  );
}
