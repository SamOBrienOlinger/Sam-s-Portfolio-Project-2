const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");

// **** ELEMENT DISABLE CODE ****
const NAME_ELEMENT = document.getElementById("name");

let phraseListOne = [
  "will",
  "shall",
  "is cursed to",
  "will, from this day,",
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
  "clothes with itchy labels!"
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
  document.getElementById('create-canvas').style.display = 'block';
}

function openPopupWithCanvas(finalPhrase) {
    // Open a new mini window
    const popup = window.open('', 'popup', 'width=600,height=400');

    // Add some basic HTML structure to the popup
    popup.document.write('<!DOCTYPE html><html lang="en"><head><title>Hex Canvas</title></head><body></body></html>');

    // Create a canvas element
    const canvas = popup.document.createElement('canvas');
    canvas.width = 580; // Adjust as per your requirement
    canvas.height = 380; // Adjust as per your requirement
    popup.document.body.appendChild(canvas);

    // Style the canvas (and potentially the window) here
    // For example, setting a background color or adding a CSS file
    canvas.style.background = '#fff'; // Example background color

    // Get the canvas context to draw
    const ctx = canvas.getContext('2d');

    // Set your styles for the text
    ctx.fillStyle = '#000'; // Black color for the text
    ctx.font = '20px Arial'; // Example font style
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the text on the canvas
    ctx.fillText(finalPhrase, canvas.width / 2, canvas.height / 2);

    const shamrockImage = new Image();
    shamrockImage.onload = function() {
        // Example: draw shamrock in the top-left corner of the canvas
        ctx.drawImage(shamrockImage, 10, 10, 50, 50); // Adjust position and size as needed
    };
    shamrockImage.src = 'assets/css/Images/green-shamrock-no-bg.png';
}

// Assuming you have the YouTube link event listener set up to open this popup
const canvasCreate = document.getElementById('create-canvas');
canvasCreate.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
  // Assuming 'finalPhrase' is the text you want to display on the canvas
  let finalPhrase = document.getElementById('finalResult').innerText.trim();

  openPopupWithCanvas(finalPhrase); // Call this function with the final phrase
  document.getElementById('download-link').style.display = 'block';

  // Event listener for the "Download Image" link
  document.getElementById('download-link').addEventListener('click', function() {
      // Presumably handle the image download here
      document.querySelector('.social-networks').style.display = 'block';
  });
});
