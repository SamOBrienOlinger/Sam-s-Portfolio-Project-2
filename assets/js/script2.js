// document.addEventListener('DOMContentLoaded', () => {
//     const nameInput = document.getElementById("name");
//     const confirmNameButton = document.getElementById("confirmName");
//     const curseButtons = Array.from(document.getElementsByClassName("curse-button"));
//     const buttonFinal = document.getElementById("finalButton");
//     const sections = document.querySelectorAll('.sections');
    
//     // Initially hide all sections except the first and disable all buttons
//     sections.forEach((sec, index) => sec.classList.toggle('hidden', index !== 0));
//     curseButtons.forEach(button => button.disabled = true);

//     nameInput.addEventListener('input', () => {
//         confirmNameButton.disabled = !nameInput.value.trim();
//     });

//     confirmNameButton.addEventListener('click', () => {
//         if (nameInput.value.trim()) {
//             const firstCurseSection = sections[1]; // This assumes the first curse section is right after the name input section.
//             firstCurseSection.classList.remove('hidden');
//             fadeIn(firstCurseSection, 500); // This smoothly transitions the section to visibility.
//             confirmNameButton.disabled = true; // Optionally disable the confirm button after it's used.
//             const firstCurseButton = curseButtons[0]; // Directly reference the first curse button.
//             firstCurseButton.disabled = false; // Enable the first curse button.
//             console.log('First curse button should now be enabled.');
//         } else {
//             showModalError("Please enter your Nemesis' name");
//         }
//     });

//     curseButtons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             generateCurse(index);
//             const nextSection = sections[index + 2]; // +2 to skip over the name confirmation section
//             if (nextSection) {
//                 nextSection.classList.remove('hidden');
//                 fadeIn(nextSection, 500);
//                 const nextButton = nextSection.querySelector('.curse-button');
//                 if (nextButton) nextButton.disabled = false;
//             } else {
//                 buttonFinal.disabled = false;
//                 fadeIn(buttonFinal, 500);
//             }
//             button.disabled = true; // Disable the button after use
//         });
//     });

//     buttonFinal.addEventListener('click', genHex);
// });

// function generateCurse(index) {
//     const phraseLists = [
//         ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"],
//         ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"],
//         ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "an ocean of poison whiskey for infinity!", "rotten potatoes for ten years!"]
//     ];
//     const results = ['firstResult', 'secondResult', 'thirdResult'];
//     const resultElement = document.getElementById(results[index]);
//     const phrases = phraseLists[index];
//     const phrase = phrases[Math.floor(Math.random() * phrases.length)];
//     resultElement.innerHTML = phrase;
// }

// function genHex() {
//     if (!checkName()) {
//         showModalError("Please enter your Nemesis' name");
//         return;
//     }
//     const name = document.getElementById("name").value;
//     const finalResult = document.getElementById('finalResult');
//     finalResult.innerHTML = `${name} ${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
// }

// function fadeIn(element, duration) {
//     element.style.opacity = 0;
//     let start = null;

//     function step(timestamp) {
//         if (!start) start = timestamp;
//         const progress = timestamp - start;
//         element.style.opacity = Math.min(progress / duration, 1);
//         if (progress < duration) {
//             window.requestAnimationFrame(step);
//         }
//     }
//     window.requestAnimationFrame(step);
// }

document.addEventListener('DOMContentLoaded', function () {
    const whatDiv = document.querySelector('.l-what');
    const whoDiv = document.querySelector('.l-who');
    const whereDiv = document.querySelector('.l-where');
    const whyDiv = document.querySelector('.l-why');
    const whenDiv = document.querySelector('.l-when');

    whatDiv.addEventListener('click', function () {
        const dropDiv = document.querySelector('.what-drop');
        if (dropDiv.style.display === 'none') {
            dropDiv.style.display = 'block';
        } else {
            dropDiv.style.display = 'none';
        }
    });

    whoDiv.addEventListener('click', function () {
        const dropDiv = document.querySelector('.who-drop');
        if (dropDiv.style.display === 'none') {
            dropDiv.style.display = 'block';
        } else {
            dropDiv.style.display = 'none';
        }
    });

    whereDiv.addEventListener('click', function () {
        const dropDiv = document.querySelector('.where-drop');
        if (dropDiv.style.display === 'none') {
            dropDiv.style.display = 'block';
        } else {
            dropDiv.style.display = 'none';
        }
    });

    whyDiv.addEventListener('click', function () {
        const dropDiv = document.querySelector('.why-drop');
        if (dropDiv.style.display === 'none') {
            dropDiv.style.display = 'block';
        } else {
            dropDiv.style.display = 'none';
        }
    });

    whenDiv.addEventListener('click', function () {
        const dropDiv = document.querySelector('.when-drop');
        if (dropDiv.style.display === 'none') {
            dropDiv.style.display = 'block';
        } else {
            dropDiv.style.display = 'none';
        }
    });
});