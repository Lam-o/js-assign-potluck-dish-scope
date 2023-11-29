// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//add two new variables
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//add event listener and create an element
addGuestButton.addEventListener ("click", function() {
    const guest = guestInput.value ;
//console.log(guest);

if (guest !== "") {
    addToList (guest);
    updateGuestCount ();
    clearInput();
}
});

//clear input box
const clearInput = function() {
    guestInput.value = "";
};

const addToList = function(guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append (listItem);
};

//limit the list
const updateGuestCount = function() {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

//create function expression assignItems no parameters
const assignItems = function() {
    const potluckItems = [
        "ham",
        "cheese",
        "apple pie",
        "oranges",
        "mango",
        "green salad",
        "ice craem",
        "banannas",
        "100kg smoked ribs",
        "barrel of monkeys",
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

//for...of loop
for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems [ randomPotluckIndex];

let listItem = document.createElement("li");
listItem.innerText = ` ${guest.innerText} is bringing ${randomPotluckItem}.`; 
assignedItems.append(listItem);

//attach splice to prevent reasigning
potluckItems.splice(randomPotluckIndex,1);
}    
};

//eventListener for assignButton
assignButton.addEventListener("click", function() {
    assignItems();

    //fix duplicate assignment
    assignButton.disabled = true;
});





