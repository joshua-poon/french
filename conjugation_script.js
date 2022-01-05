'use strict';

const irr_verb_conjugations = { 'etre': ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], 'avoir': ['ai', 'as', 'a', 'avons', 'avez', 'ont'] }

const pronoun_selectors = [document.querySelector('.irregular-je'), document.querySelector('.irregular-tu'), document.querySelector('.irregular-il'), document.querySelector('.irregular-nous'), document.querySelector('.irregular-vous'), document.querySelector('.irregular-ils')]

console.log(pronoun_selectors[0])

const irr_conjugation = function () {
    console.log(irregular[i])
}

const irrEtre = document.querySelector('.irr-etre');
const irrAvoir = document.querySelector('.irr-avoir')

const irregular = [irrEtre, irrAvoir]
for (let i = 0; i < irregular.length; i++)
    irregular[i].addEventListener('click',
        function () {
            const current_word = irregular[i].textContent
            const current_conjugation_list = irr_verb_conjugations[current_word]

            for (let j = 0; j < 6; j++)
                pronoun_selectors[j].textContent = current_conjugation_list[j];

        })

