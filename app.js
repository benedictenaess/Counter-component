const incButton = document.querySelector('.increment-button');
const decButton = document.querySelector('.decrement-button');
const numberContainer = document.querySelector('.display-number');

let number = 0;

const increment = () => {
	number++;
	numberContainer.textContent = number;
}

incButton.addEventListener('click', increment);

const decrement = () => {
	if (number <= 0){
		return
	}
	number--
	numberContainer.textContent = number;
}

decButton.addEventListener('click', decrement)

