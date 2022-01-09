document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-addition');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#clear-list');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


    let slider = document.getElementById("foodEnjoyment");
    let output = document.getElementById("valueDisplay");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
}

    
});







const handleNewItemFormSubmit = function (event) {
event.preventDefault();

const foodListItem = createFoodListItem(event.target);
const foodList = document.querySelector('#food-list');
output = document.getElementById("valueDisplay");
output.innerHTML = 1;


foodList.appendChild(foodListItem);

event.target.reset();
};




const createFoodListItem = function (form) {
    const foodListItem = document.createElement("li")
    foodListItem.classList.add('food-list-item')

    const foodName = document.createElement("h2")
    foodName.textContent = form.foodName.value
    foodListItem.appendChild(foodName)

    const foodTime = document.createElement("h3")
    foodTime.textContent = form.foodTime.value
    foodListItem.appendChild(foodTime)

    const foodEnjoyment = document.createElement("h3")
    foodEnjoyment.textContent = form.foodEnjoyment.value
    foodListItem.appendChild(foodEnjoyment)

    return foodListItem

}

const handleDeleteAllClick = function (event) {
    const foodList = document.querySelector('#food-list');
    foodList.innerHTML = '';
  }


