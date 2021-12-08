import { useState } from 'react';

const AddWord = () => {
    const [report, setReport] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        const wordInput = e.target.querySelector('#word');
        const translationInput = e.target.querySelector('#translation');
        
        if (wordInput.value.trim().length > 15 || wordInput.value.trim().length <= 2) {
            setReport('The word is too long or too short');
            return;
        }
        if (translationInput.value.trim().length > 15 || translationInput.value.trim().length <= 2) {
            setReport('The translation is too long or too short');
            return;
        }
        
        
        const finalObject = {word: wordInput.value.trim().toLowerCase(), translation: translationInput.value.trim().toLowerCase()};
        wordInput.value = '';
        translationInput.value = '';

        fetch('http://localhost:8000/words', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalObject)
        })
            .then(() => {
                setReport('Successfully added')
            })

        console.log( wordInput, translationInput )
    }

    return (
        <div className="adding-container">
            <form className="adding-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="word">Word:</label>
                <br />
                <input id="word" autoComplete="off" type="text" />
                <br />
                <label htmlFor="translation">Translation:</label>
                <br />
                <input id="translation" autoComplete="off" type="text" />
                <br/>
                <input className="submit" type="submit" value="submit"/>
                <div className="report">{ report }</div>
            </form>
        </div>
    );
}

export default AddWord;