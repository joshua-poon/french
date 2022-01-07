'use strict';

//verb irregular conjugations

const irrVerbConj = { 'être': ['to be', 'suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'été'], 'avoir': ['to have', 'ai', 'as', 'a', 'avons', 'avez', 'ont', 'eu'], 'aller': ['to go', 'vais', 'vas', 'va', 'allons', 'allez', 'vont', 'allé(e) (with être)'], 'faire': ['to do, make', 'fais', 'fais', 'fait', 'faisons', 'faites', 'font', 'fait'],'vouloir':['to want, wish','veux','veux','veut','voulons','voulez','veulent','voulu'],'pouvoir':['can, to be able to','peux','peux','peut','pouvons','pouvez','peuvent','pu'],'savoir':['to know','sais','sais','sait','savons','savez','savent','su'],'prendre':['to take','prends','prends','prend','prenons','prenez','prennent','pris'],'devoir':['to have to,must','dois','dois','doit','devons','devez','doivent','dû'],'falloir':['to need, it is necessary','','','faut','','','','fallu'],'parler':['to speak,to talk','parle','parles','parle','parlons','parlez','parlent','parlé'],'finir':['to finsh','finis','finis','finit','finissons','finissez','finissent','fini'],'vendre':['to sell','vends','vends','vend','vendons','vendez','vendent','vendu'],'venir':['to come','viens','viens','vient','venons','venez','viennent','venu(e) with être'],'voir':['to see','vois','vois','voit','voyons','voyez','voient','vu'],'sortir':['to go out','sors','sors','sort','sortons','sortez','sortent',''],'partir':['to leave','pars','pars','part','partons','partez','partent',''],'dormir':['to sleep','dors','dors','dort','dormons','dormez','dorment','dormi'],'mettre':['to put (on)','mets','mets','met','mettons','mettez','mettent','mis'],'dire':['to say, to tell','dis','dis','dit','disons','dites','disent','dit'],'lire':['to read','lis','lis','lit','lisons','lisez','lisent','lu'],'écrire':['to write','écris','écris','écrit','écrivons','écrivez','écrivent','écrit'],'boire':['to drink','bois','bois','boit','buvons','buvez','boivent','bu'],'espérer':['to hope','espère','espères','espère','espérons','espérez','espèrent',''],'ouvrir':['to open','ouvre','ouvres','ouvre','ouvrons','ouvrez','ouvrent','ouvert'],'servir':['to serve','sers','sers','sert','servons','servez','servent','servi'],'se coucher':['to go to bed','me couche','te couches','se couche','nous couchons','vous couchez','se couchent','']
                
                    }

const pronounSelectors = ['.irr-eng', '.irr-je', '.irr-tu', '.irr-il', '.irr-nous', '.irr-vous', '.irr-ils', '.irr-pc']

const irrVerbs = document.querySelectorAll('.irr-verbs')

for (let i = 0; i < irrVerbs.length; i++) {
    irrVerbs[i].addEventListener('click', function () {
        const currentWord = irrVerbs[i].textContent;
        const currentConjList = irrVerbConj[currentWord]

        for (let j = 0; j < 8; j++)
            document.querySelector(pronounSelectors[j]).textContent = currentConjList[j]


    })

}
