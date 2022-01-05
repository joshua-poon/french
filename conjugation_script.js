'use strict';

const irrVerbConj = { 'être': ['suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'été'], 'avoir': ['ai', 'as', 'a', 'avons', 'avez', 'ont', 'eu'], 'aller': ['vais', 'vas', 'va', 'allons', 'allez', 'vont', 'allé(e) (with être)'] }

const pronounSelectors = ['.irr-je', '.irr-tu', '.irr-il', '.irr-nous', '.irr-vous', '.irr-ils', '.irr-pc']

const irrVerbs = document.querySelectorAll('.irr-verbs')

for (let i = 0; i < irrVerbs.length; i++) {
    irrVerbs[i].addEventListener('click', function () {
        const currentWord = irrVerbs[i].textContent;
        const currentConjList = irrVerbConj[currentWord]

        for (let j = 0; j < 7; j++)
            document.querySelector(pronounSelectors[j]).textContent = currentConjList[j]


    })

}