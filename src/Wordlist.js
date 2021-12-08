import Loading from "./Loading.js";
import useFetch from "./useFetch.js";

const Wordlist = () => {
    const { data: words, error, isPending } = useFetch('http://localhost:8000/words');

    function handleDelete(e, id) {
        fetch('http://localhost:8000/words/' + id, {
            method: 'DELETE'
        });
        e.target.parentNode.remove();
    }

    return (
        <ul className="words">
            {error && <div className="error">{error}</div>}
            {isPending && <Loading />}
            {words && words.map(word => {
                return (
                    <li className="word-container" key={word.id}>
                        <span className="word">{word.word}</span>
                        <span className="translation">{word.translation}</span>
                        <button className="button-delete" onClick={(e) => handleDelete(e, word.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    );
}

export default Wordlist;