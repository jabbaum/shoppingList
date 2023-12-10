let grocHolder = document.querySelector('.shoppingList');
let adderInput = document.querySelector('.inputs > input');
let adderButton = document.querySelector('.inputs>button');

function clickedAdder() {
    //to grab and clear the input to be ready for another
    if (!adderInput.value) {
        return
    }
    let newGroc = adderInput.value;
    adderInput.value = '';

    //to create all nodes needed for the groc list item
    let newGrocLi = document.createElement('li');
    let newGrocSpan = document.createElement('span');
    let newGrocDelete = document.createElement('button');
    newGrocLi.appendChild(newGrocSpan);
    newGrocLi.appendChild(newGrocDelete);
    grocHolder.appendChild(newGrocLi);
    newGrocSpan.textContent = newGroc;
    newGrocDelete.textContent = 'Delete';

    //to listen for the user to be ready to delete the groc
    newGrocDelete.addEventListener('click', ()=>newGrocLi.remove());

    //allow user to enter a new item
    adderInput.focus();

};

//to listen for the user to be ready to add the groc they entered
adderButton.addEventListener('click', clickedAdder);
adderInput.addEventListener('keydown', (e)=>{
    if(e.code==="Enter"){
    return clickedAdder()
}});