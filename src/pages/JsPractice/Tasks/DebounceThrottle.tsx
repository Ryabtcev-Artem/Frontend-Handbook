import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DebounceThrottle() {
    return (
        <section className={"container"}>
            <h2>Debounce</h2>
            <p>
                Данную задачу можно решить на сайте leetcode.com{" "}
                <a
                    href="https://leetcode.com/problems/debounce/"
                    target="_blank"
                >
                    Debounce
                </a>
            </p>
            <NavButtons
                prev={"/js-practice/debounce-throttle"}
                next={"/js-practice/deep-clone"}
            />
        </section>
    );
}
