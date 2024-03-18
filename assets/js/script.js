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
  "clothes with itchy labels!",
  "a severe allergy to Guinness!"
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
confirmNameButton.addEventListener('click', function () {
  const firstCurseButton = document.getElementById('firstButton');
  firstCurseButton.disabled = false; // Enable the first 'curse' button
  document.getElementById('step2').style.display = 'block'; // Show the second step
});

// Sequentially reveal each step and enable the next button
const curseButtons = document.querySelectorAll('.curse-button');
curseButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
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
    generateUniqueLink(); // Generate unique link when the final button is clicked
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

// **** SOCIAL MEDIA SHARE FUNCTIONALITY ****
function generateUniqueLink() {
    // Generate a unique link (example implementation)
    const uniqueLink = 'https://example.com/' + Math.floor(Math.random() * 10000000000000000);

    // Log the generated unique link to the console
    console.log('Generated unique link:', uniqueLink);

    // Share unique link via social media platforms
    const facebookShareLink = document.getElementById('facebook-share');
    if (facebookShareLink) {
        facebookShareLink.href = 'https://facebook.com/share?url=' + encodeURIComponent(uniqueLink);
    }

    const twitterShareLink = document.getElementById('twitter-share');
    if (twitterShareLink) {
        twitterShareLink.href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(uniqueLink);
    }

    const instagramShareLink = document.getElementById('instagram-share');
    if (instagramShareLink) {
        instagramShareLink.href = 'https://instagram.com/share?url=' + encodeURIComponent(uniqueLink);
    }

    const whatsappShareLink = document.getElementById('whatsapp-share');
    if (whatsappShareLink) {
        whatsappShareLink.href = 'whatsapp://send?text=' + encodeURIComponent(uniqueLink);
    }
}

// Assuming the HTML structure contains social media share buttons with IDs:
// facebook-share, twitter-share, instagram-share, whatsapp-share
// Adjust the IDs accordingly if they are different.

// Call the generateUniqueLink function when the final button is clicked
buttonFinal.addEventListener('click', generateUniqueLink);

// Function to draw on the main canvas
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
  
    // Your existing drawing logic here, for example:
    ctx.fillStyle = '#000'; // Black color for the text
    ctx.font = '20px Arial'; // Example font style
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(finalPhrase, canvas.width / 2, canvas.height / 2);
  
    const shamrockImage = new Image();
    shamrockImage.onload = function() {
        ctx.drawImage(shamrockImage, 10, 10, 50, 50); // Adjust as needed
    };
    shamrockImage.src = 'assets/css/Images/green-shamrock-no-bg.png';

function prepareFinalPhrase() {
  const name = document.getElementById('name').value;
  const firstPhrase = FIRST_PHRASE.innerHTML;
  const secondPhrase = SECOND_PHRASE.innerHTML;
  const thirdPhrase = THIRD_PHRASE.innerHTML;
  console.log(name)
  console.log(firstPhrase)
  console.log(secondPhrase)
  console.log(thirdPhrase)
  document.getElementById('create-canvas').style.display = 'block';
  // Store the phrases in an array
  return [name, firstPhrase, secondPhrase, thirdPhrase];
}

function drawOnMainCanvas(phrases) {
  const canvas = document.getElementById('canvas');
  if (!canvas) {
    console.error('Canvas element not found!');
    return;
  }
  canvas.style.display = 'block';

  // Define scale for high DPI screens
  const scale = window.devicePixelRatio; // Define scale based on device pixel ratio
  canvas.width = 600 * scale;
  canvas.height = 400 * scale;

  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale); // Scale the context to match the device pixel ratio

  // Clear the canvas before drawing new content
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set canvas styles
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale); // Adjust fillRect to consider scale

  const shamrockImage = new Image();
  shamrockImage.onload = function () {
    // Drawing shamrocks in the top corners at 'y = 10'
    ctx.drawImage(shamrockImage, 10, 10, 100, 100); // Top left corner
    ctx.drawImage(shamrockImage, canvas.width / scale - 110, 10, 100, 100); // Top right corner
    ctx.drawImage(shamrockImage, 10, canvas.height / scale - 110, 100, 100); // Bottom left corner
    ctx.drawImage(shamrockImage, canvas.width / scale - 110, canvas.height / scale - 110, 100, 100); // Bottom right corner
  };
  shamrockImage.src = 'assets/css/Images/green-shamrock-no-bg.png';

  const leprechaunImage = new Image();
  leprechaunImage.onload = function () {
    const newWidth = 100 * (5 / 4); // 2/3 of the original size
    const newHeight = 100 * (5 / 4);
    // Aligning the leprechaun image with the shamrocks at 'y = 10'
    ctx.drawImage(leprechaunImage, (canvas.width / scale - newWidth) / 2, 10, newWidth, newHeight);
  };
  leprechaunImage.src = 'assets/css/Images/angry-leprechaun-bg-free.png';

  // Text settings
  ctx.fillStyle = 'whitesmoke';
  ctx.font = '28px Irish Grover';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Adjust the starting y position for the text to be below the leprechaun image
  let y = 150; // Adjust based on the height of the leprechaun image

  // Draw each phrase on a new line
  for (let i = 0; i < phrases.length; i++) {
    ctx.fillText(phrases[i], canvas.width / (2 * scale), y);
    y += 32;
  }
}


// Adjust event listeners as needed
const canvasCreate = document.getElementById('create-canvas');
canvasCreate.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior
  let phrases = prepareFinalPhrase(); // Get the array of phrases
  console.log(phrases)
  drawOnMainCanvas(phrases); // Pass the array to the drawing function
  document.getElementById('download-link').style.display = 'block';
});

// Adjust the "Download Image" link event listener as before
document.getElementById('download-link').addEventListener('click', function () {
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

