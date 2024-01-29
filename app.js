const incButton = document.querySelector('.increment-button');
const decButton = document.querySelector('.decrement-button');

let number = 0;

const increment = () => {
	console.log(number++);
}

incButton.addEventListener('click', increment);

const decrement = () => {
	if (number <= -1){
		return
	}
	console.log(number--);
}

decButton.addEventListener('click', decrement)