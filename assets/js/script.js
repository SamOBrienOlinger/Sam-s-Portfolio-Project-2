const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");

// **** ELEMENT DISABLE CODE ****
const NAME_ELEMENT = document.getElementById("name");

let phraseListOne = [
  "will",
  "shall always",
  "is cursed to",
  "will forever",
  "is destined to",
  "is fated to",
];
let phraseListTwo = [
  "be covered in",
  "be imprisoned in",
  "be chained to",
  "be infected with",
  "be haunted by",
];
let phraseListThree = [
  "a mountain of Banshee poop!",
  "buckets of Leprechaun spittle!",
  "the Divil's fire for all eternity!",
  "a lake of boiling stout!",
  "an ocean of poison whiskey for infinity!",
  "rotten potatoes for ten years!",
];

let phraseListIndexMap = [phraseListOne, phraseListTwo, phraseListThree];
let phraseElementIndexMap = [FIRST_PHRASE, SECOND_PHRASE, THIRD_PHRASE];
let generateCurse = function (e) {
  if (!checkName()) {
    return;
  }

  let buttonIndex = parseInt(e.target.dataset.index) - 1;
  generateText(buttonIndex);

  // **** ELEMENT DISABLE CODE ****
  CURSE_BUTTONS.forEach((button) => (button.classList.add("disabled")));

  if (buttonIndex != 2) {
    CURSE_BUTTONS[buttonIndex + 1].classList.remove("disabled");
    } else {
      buttonFinal.classList.remove("disabled");
    }
};

// **** GENERATE RANDOM PHRASE FROM ARRAYS CODE ****
const CURSE_BUTTONS = Array.from(document.getElementsByClassName("curse-button"));
CURSE_BUTTONS.forEach((button) => button.addEventListener("click", generateCurse)
);

let generateText = function (index) {
  let phraseList = phraseListIndexMap[index];
  let phrase = phraseList[Math.floor(Math.random() * phraseList.length)];

  let phraseElement = phraseElementIndexMap[index];
  phraseElement.innerHTML = phrase;
};

// **** ELEMENT DISABLE CODE ****
NAME_ELEMENT.addEventListener("focusout", () =>
  CURSE_BUTTONS[0].classList.remove("disabled")
);

// Enable the first curse button when the name is confirmed
const confirmNameButton = document.getElementById('confirmName');
confirmNameButton.addEventListener('click', function() {
    const firstCurseButton = document.getElementById('firstButton');
    firstCurseButton.disabled = false; // Enable the first 'curse' button
    document.getElementById('step2').style.display = 'block'; // Show the second step
});

// Sequentially reveal each step and enable the next button
const curseButtons = document.querySelectorAll('.curse-button');
curseButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        this.disabled = true; // Disable the current button after click

        // Calculate the ID of the next step based on the current button's data-index
        const nextStepId = 'step' + (parseInt(this.getAttribute('data-index'), 10) + 2);
        const nextStep = document.getElementById(nextStepId);
        if (nextStep) {
            nextStep.style.display = 'block'; // Show the next step

            // Find the next curse button within the next step and enable it
            const nextButton = nextStep.querySelector('.curse-button');
            if (nextButton) {
                nextButton.disabled = false;
            }
        }
    });
});

// **** GENERATE FULL HEX CODE ****
const buttonFinal = document.getElementById("finalButton");
buttonFinal.addEventListener("click", (e) => {
  
  if (checkName()) {
    genHex();
  }

});

// **** ENSURE USER INPUTS TEXT TO START HEX CODE ****
function checkName() {
  if (document.getElementById("name").value !== "") {
    
    return true;
  } 

  alert("please enter your Nemesis' name");
  return false;
}

// **** BACK TO TOP AND RELOAD PAGE CODE ****
const refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", (e) => {
  document.location.reload();
});

function genHex() {
  let finalPhrase = document.getElementById("finalResult");
  let name = document.getElementById("name").value;

  finalPhrase.innerHTML = `${name} ${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
}

/// Get the YouTube link element
const youtubeLink = document.querySelector('a[aria-label="Visit our YouTube page"]');

// Add an event listener to the YouTube link
youtubeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of following the link

    // Get the final phrase from the HTML
    var finalPhraseElement = document.getElementById('finalResult');
    var finalPhrase = '';

    // Check if the element exists before accessing its innerText property
    if (finalPhraseElement) {
        finalPhrase = finalPhraseElement.innerText.trim();
    } else {
        console.error("Element with id 'finalResult' not found.");
        return; // Exit the function if the element is not found
    }

    // Create a canvas element
    var canvas = document.createElement('canvas');

    // Set canvas dimensions
    canvas.width = 400; // Width of the canvas
    canvas.height = 200; // Height of the canvas

    // Get the drawing context
    var ctx = canvas.getContext('2d');

    // Clear any previous content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set font properties
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black'; // Set text color

    // Calculate text width and height
    var textWidth = ctx.measureText(finalPhrase).width;
    var textHeight = 20; // You may need to adjust this based on your font size

    // Calculate text position to center it on the canvas
    var x = (canvas.width - textWidth) / 2;
    var y = (canvas.height - textHeight) / 2;

    // Draw the text on the canvas
    ctx.fillText(finalPhrase, x, y);

    // Append the canvas to the document body or any desired location
    document.body.appendChild(canvas);
});
