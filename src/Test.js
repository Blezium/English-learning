import { useState } from 'react';
import useFetch from './useFetch';
import Loading from './Loading'

const Test = () => {
    const [currentWord, setCurrentWord] = useState({});
    const [message, setMessage] = useState('');

    function chooseRandElem(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        if (currentWord !== array[0]) setCurrentWord(array[0]);
        if (currentWord === array[0]) setCurrentWord(array[1]);
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return;

        const input = document.querySelector('input.answer');
        if (input.value.trim().toLowerCase() === currentWord.translation) {
            setMessage('You are right');
            chooseRandElem(words);
        } else {
            setMessage(`(${currentWord.word} - ${currentWord.translation})`)
            chooseRandElem(words);
        }
        input.value = '';
    }


    const { data: words, error, isPending } = useFetch('http://localhost:8000/words');

    return (
        <div className="test-container">
            {error && <div className="error">{error}</div>}
            {isPending && <Loading />}
            {words?.length > 1 &&
                <>
                    <span className="asked-word">
                        {currentWord.word || chooseRandElem(words)}
                    </span>
                    <input className="answer" type="text" placeholder="Answer" onKeyDown={e => handleKeyDown(e)} />
                    <div className={`message ${message.includes('right') ? 'green' : 'red'}`}>
                        {message}
                    </div>
                </>}
            {words?.length <= 1 && 'Add a few words'}
        </div>
    );
}

export default Test;