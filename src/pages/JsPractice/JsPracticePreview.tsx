import {Link} from "react-router-dom";
import auto from "../../images/JsPracticeImages/Preview/auto.svg"
import hard from "../../images/JsPracticeImages/Preview/hard.svg"
import insane from "../../images/JsPracticeImages/Preview/insane.svg"
import insanedemon from "../../images/JsPracticeImages/Preview/insanedemon.webp"
export default function JsPracticePreview() {
  return (
    <section className="chapter">
      <div className="chapter__blocks container">

        <h3 className="chapter__block-title diff-title">Базовый уровень</h3>
        <img
          className={'diff-icon'}
          src={auto}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/js-practice/swap-variables">Swap variables</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/js-practice/is-palindrome">Is palindrome</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/js-practice/max-min-in-array">Max min in array</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.4</div>
            <Link to="/js-practice/count-vowels">Count vowels</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.5</div>
            <Link to="/js-practice/is-prime">Is prime</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.6</div>
            <Link to="/js-practice/remove-duplicates">Remove duplicates</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.7</div>
            <Link to="/js-practice/reverse-string">Reverse string</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.8</div>
            <Link to="/js-practice/factorial">Factorial</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.9</div>
            <Link to="/js-practice/is-empty">Is empty</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.10</div>
            <Link to="/js-practice/capitalize-words">Capitalize words</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/js-practice/sum-to-n">Sum to n</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/js-practice/reverse-array">Reverse array</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/js-practice/compare-arrays">Compare arrays</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/js-practice/swap-first-last">Swap first last</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.5</div>
            <Link to="/js-practice/every-satisfies">Every satisfies</Link></div>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Средний уровень</h3>
        <img
          className={'diff-icon'}
          src={hard}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/js-practice/deep-traverse">Deep traverse</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/js-practice/frequency-map">Frequency map</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.3</div>
            <Link to="/js-practice/fibonacci">Fibonacci</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.4</div>
            <Link to="/js-practice/anagrams">Anagrams</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.5</div>
            <Link to="/js-practice/second-largest">Second largest</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.6</div>
            <Link to="/js-practice/remove-item">Remove item</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.7</div>
            <Link to="/js-practice/group-by">Group by</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.8</div>
            <Link to="/js-practice/valid-brackets">Valid brackets</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.9</div>
            <Link to="/js-practice/intersection">Intersection</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.10</div>
            <Link to="/js-practice/custom-map">Custom map</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/js-practice/custom-reduce">Custom reduce</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/js-practice/sum-chain">Sum chain</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.3</div>
            <Link to="/js-practice/flatten-array">Flatten array</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.4</div>
            <Link to="/js-practice/is-power-of-two">Is power of two</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.5</div>
            <Link to="/js-practice/countdown-timer">Countdown timer</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.6</div>
            <Link to="/js-practice/custom-sort">Custom sort</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.7</div>
            <Link to="/js-practice/format-date">Format date</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.8</div>
            <Link to="/js-practice/id-generator">Id generator</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.9</div>
            <Link to="/js-practice/debounce-throttle">Debounce throttle</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.10</div>
            <Link to="/js-practice/deep-clone">Deep clone</Link></div>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Продвинутый уровень</h3>
        <img
          className={'diff-icon'}
          src={insane}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/js-practice/hoisting-quiz">Hoisting quiz</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.2</div>
            <Link to="/js-practice/bind-call-apply">Bind call apply</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.3</div>
            <Link to="/js-practice/closure-task">Closure task</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.4</div>
            <Link to="/js-practice/memoization">Memoization</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.5</div>
            <Link to="/js-practice/once-function">Once function</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.6</div>
            <Link to="/js-practice/async-loop">Async loop</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.7</div>
            <Link to="/js-practice/retry-function">Retry function</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.8</div>
            <Link to="/js-practice/promisify">Promisify</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.9</div>
            <Link to="/js-practice/custom-promise-all">Custom promise all</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.10</div>
            <Link to="/js-practice/event-emitter">Event emitter</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.1</div>
            <Link to="/js-practice/limited-parallel">Limited parallel</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.2</div>
            <Link to="/js-practice/custom-new">Custom new</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.3</div>
            <Link to="/js-practice/custom-instanceof">Custom instanceof</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.4</div>
            <Link to="/js-practice/promise-chain">Promise chain</Link></div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.5</div>
            <Link to="/js-practice/pipe-compose">Pipe compose</Link></div>
        </div>
      </div>
    </section>
  );
}
