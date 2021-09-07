
document.querySelector('.pop__button').addEventListener('click', function () {

	const inputName = document.querySelector('.pop__name').value;
	const inputAge = document.querySelector('.pop__age').value;

	const nameClass = document.querySelector('.pop__name');
	const ageClass = document.querySelector('.pop__age');

	if (isFinite(inputName) || inputName === '') {
		nameClass.classList.add('active');
	} else {
		nameClass.classList.remove('active');
	}

	if (isFinite(inputAge) === false || inputAge < 5 || inputAge > 100) {
		ageClass.classList.add('active');
	} else {
		ageClass.classList.remove('active');
	}

	if (nameClass.classList.contains('active') === false && ageClass.classList.contains('active') === false) {
		const pop = document.querySelector('.pop');
		pop.classList.add('none');
		const infoName = document.querySelector('.info__name');
		infoName.innerHTML = inputName;
		const infoAge = document.querySelector('.info__age');
		infoAge.innerHTML = inputAge;
	}
})

let count = 0;
document.querySelector('.button__item').addEventListener('click', function () {
	count++;
	console.log(count)
	let countRes = document.querySelector('.info__num');
	countRes.innerHTML = `${5 - (count - 1)}`;
	if (count === 6) {
		let end = document.querySelector('.button');
		end.classList.add('end');
	}

	const infoName = document.querySelector('.info__name');
	const infoAge = document.querySelector('.info__age');
	const textInfoName = infoName.innerHTML;
	const textInfoAge = infoAge.innerHTML;
	const pop = document.querySelector('.pop');
	const infoResult = document.querySelector('.info__result');
	if (textInfoName === '' && textInfoAge === '') {
		pop.classList.remove('none');
	} else {
		const wheel = document.querySelector('.lotery__img');
		function random(n, m) {
			return Math.floor(Math.random() * (m - n + 1)) + n;
		}
		let result = random(10, 5000);
		let num = result % 360;

		wheel.style.transform = `rotate(${result}deg)`;
		wheel.style.transition = 'all 3s ease 0s';

		function resultDeg() {
			if (num <= 35 || num > 335 && num < 359) {
				infoResult.innerHTML = '8% OFF Coupone';
			}
			if (num <= 95 && num > 35) {
				infoResult.innerHTML = 'GOOD LUCK Next Time';
			}
			if (num <= 155 && num > 95) {
				infoResult.innerHTML = 'GET IT FREE';
			}
			if (num <= 215 && num > 155) {
				infoResult.innerHTML = '2$ OFF Over 19$ Coupon';
			}
			if (num <= 275 && num > 215) {
				infoResult.innerHTML = '5 POINTS';
			}
			if (num <= 335 && num > 275) {
				infoResult.innerHTML = '10% OFF Coupone';
			}
		}
		setTimeout(resultDeg, 3000);
	}
	if (count === 6) {
		function resultRes() {
			const infoResult = document.querySelector('.info__result').innerHTML;
			alert(`Ваш приз: ${infoResult}, Пожалуйста нажмине забрать приз`)
		}
		setTimeout(resultRes, 5000);
	}
})



document.querySelector('.result__button').addEventListener('click', function () {
	const infoResult = document.querySelector('.info__result').innerHTML;
	const popResult = document.querySelector('.popupres__res')
	const pop = document.querySelector('.popupres');
	pop.classList.remove('none');
	popResult.innerHTML = infoResult;
	if (infoResult === '') {
		popResult.innerHTML = "Приза нет :(";
	}

})

document.querySelector('.popupres__button').addEventListener('click', function () {
	location.reload()
})
document.querySelector('.popupres').addEventListener('click', function () {
	const pop = document.querySelector('.popupres');
	pop.classList.add('none');
})
document.querySelector('.pop__button_end').addEventListener('click', function () {
	location.reload()
})
