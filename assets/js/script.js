//function for inputting name

//function for maths.random to use 3 arrays to give three results

function gentextOne() {
    
    let phraseListOne = ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"];

    let firstPhrase = document.getElementById('firstResult');

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}

gentextOne()


//function needed for two more buttons

function gentextTwo() {
    
    let phraseListTwo = ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"];

    let secondPhrase = document.getElementById('secondResult');

    secondPhrase.innerHTML = phraseListTwo[Math.floor(Math.random()*phraseListTwo.length)];
}

gentextTwo()

function gentextThree() {
    
    let phraseListThree = ["Banshee poop", "Leprechaun spittle", "the Divil's fire", "boiling stout", "poison whiskey", "rotten potatoes"];

    let thirdPhrase = document.getElementById('thirdResult');

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

gentextThree()

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays

//function needed that takes the three results and adds them together

function genHex() {


    let finalPhrase = document.getElementById('finalResult');

    let curse1 = [firstPhrase.innerHTML];
    let curse2 = [secondPhrase.innerHTM];
    let curse3 = [thirdPhrase.innerHTML];

    finalPhrase.innerHTML = curse1.concat(" ", curse2, " ", curse3);
}

genHex()



/*
    let sentence = document.getElementById('sentence');
    let curse1 = [firstPhrase.innerHTML];
    let curse2 = [secondPhrase.innerHTM];
    let curse3 = [thirdPhrase.innerHTML];

    let result = curse1.concat(" ", curse2, " ", curse3);

    sentence.innerHTML = result;
}

fullPhrase()



/*
    
        let hex = (firstPhrase, secondPhrase, thirdPhrase) 

        return firstPhrase+secondPhrase+thirdPhrase;   
    }

    add()
 */   


//function needed to reload or reset the page


