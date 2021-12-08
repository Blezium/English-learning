import { useState } from 'react';
import AddWord from "./AddWord.js";
import Wordlist from "./Wordlist.js";


const Vocabulary = () => {
    const [isAddingMode, setIsAddingMode] = useState(false);

    function handleInput(e) {
        let words = document.querySelectorAll('.word-container');
        let searchInput = document.querySelector('.search-word');

        words.forEach(element => {
            let isLookingFor = false;
            for (let i = 0; i <= 1; i++) {
                if (element.children[i].innerText.includes(searchInput.value.trim())) isLookingFor = true;
            }
            isLookingFor ? element.style.display = "" : element.style.display = "none";
        });
    }

    return (
        <div className="vocabulary">
            <div className="vocabulary-upper">
                {!isAddingMode &&
                    <input className="search-word" placeholder="search" type="text" onInput={e => handleInput(e)} />
                }

                <button className="change-mode" onClick={() => setIsAddingMode(!isAddingMode)} >
                    {isAddingMode ? 'Check words' : 'Add'}
                </button>
            </div>
            <div className="vocabulary-lower">
                {isAddingMode ? <AddWord /> : <Wordlist />}
            </div>
        </div>
    );
}

export default Vocabulary;