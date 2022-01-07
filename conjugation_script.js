'use strict';

//verb irregular conjugations

const irrVerbConj = { 'être': ['to be', 'suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'été'], 'avoir': ['to have', 'ai', 'as', 'a', 'avons', 'avez', 'ont', 'eu'], 'aller': ['to go', 'vais', 'vas', 'va', 'allons', 'allez', 'vont', 'allé(e) (with être)'], 'faire': ['to do, make', 'fais', 'fais', 'fait', 'faisons', 'faites', 'font', 'fait'],'vouloir':['to want, wish','veux','veux','veut','voulons','voulez','veulent','voulu' ]}

const pronounSelectors = ['.irr-eng', '.irr-je', '.irr-tu', '.irr-il', '.irr-nous', '.irr-vous', '.irr-ils', '.irr-pc']

const irrVerbs = document.querySelectorAll('.irr-verbs')

for (let i = 0; i < irrVerbs.length; i++) {
    irrVerbs[i].addEventListener('click', function () {
        const currentWord = irrVerbs[i].textContent;
        const currentConjList = irrVerbConj[currentWord]

        for (let j = 0; j < pronounSelectors.length; j++)
            document.querySelector(pronounSelectors[j]).textContent = currentConjList[j]


    })

}
