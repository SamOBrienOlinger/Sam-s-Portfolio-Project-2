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

function drawOnMainCanvas(finalPhrase) {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    canvas.style.display = 'block'; // Make sure the canvas is visible
    const ctx = canvas.getContext('2d');
  
    // Clear the canvas before drawing new content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas styles
    ctx.fillStyle = 'black'; // Canvas background
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the background

    ctx.fillStyle = 'whitesmoke'; // Text color
    ctx.font = '15px Irish Grover'; // Adjusted for custom text wrapping
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(finalPhrase, canvas.width / 2, canvas.height / 2);
  
    const shamrockImage = new Image();
    shamrockImage.onload = function() {
        ctx.drawImage(shamrockImage, 10, 10, 50, 50); // Adjust as needed
    };
    shamrockImage.src = 'assets/css/Images/green-shamrock-no-bg.png';
}

// Adjust event listeners as needed
const canvasCreate = document.getElementById('create-canvas');
canvasCreate.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    let finalPhrase = document.getElementById('finalResult').innerText.trim();
  
    drawOnMainCanvas(finalPhrase); // Call this function with the final phrase
    document.getElementById('download-link').style.display = 'block';
});

// Adjust the "Download Image" link event listener as before
document.getElementById('download-link').addEventListener('click', function() {
    console.log('we are here')
    const canvas = document.getElementById('canvas');
    // Use the original MIME type without replacement to ensure compatibility
    const image = canvas.toDataURL('image/png');
  
    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.download = 'canvas-image.png';
    link.href = image;
    document.body.appendChild(link); // Append to body to ensure visibility in the DOM
    link.click();
    document.body.removeChild(link); // Clean up by removing the element after clicking
  
    // Show social media icons for further action
    document.querySelector('.social-networks').style.display = 'block';
  });
