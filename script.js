const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let currCard = flashcards[currentIndex];
    let cardDiv = document.getElementById("flashcard");
    if(showingTerm) {
        cardDiv.textContent = currCard.term;
    } else {
        cardDiv.textContent = currCard.definition;
    }
    
    // showingTerm = true;
}

// The rest of the code you will write is apart of event listeners

document.getElementById('flashcard').addEventListener('click', ()=>{ 
    showingTerm = showingTerm? false : true;
    displayCard();
});
document.getElementById('prev-btn').addEventListener('click', ()=> {
    if(currentIndex === 0) {
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }
    displayCard();
});
document.getElementById('next-btn').addEventListener('click', ()=> {
    if(currentIndex === flashcards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    displayCard();
});
document.getElementById('add-card-btn').addEventListener('click', ()=> {
    console.log("add card");
    let newTerm = document.getElementById('new-term').value;
    let newDef = document.getElementById('new-definition').value;

    flashcards.push({ term: newTerm, definition: newDef });
    currentIndex = flashcards.length - 1;
    displayCard();

});

// This line will display the card when the page is refreshed
window.onload = displayCard;