if (document.querySelector('.anketa__js-counter')) {
	const yellowColor = '#ffc815';
	const greenColor = '#a3cd3b';
	const blueColor = '#0093d7';
	const arrowNeedle = document.querySelector('.anketa__js-arrow');
	const approvedImg = document.querySelector('.anketa__approved-img');
	const checkboxes = document.querySelectorAll('.checkbox');
	const counterOut = document.querySelector('.anketa__js-counter');
	let skills = [];
	let sum = 0;

	const sumSkills = (arr) => {
		let result = 0;
		for (let i = 0; i < arr.length; i++) {
			result += arr[i];
		}

		return result;
	};

	const calculationsSkill = (elem) => {
		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].disabled = true;
			setTimeout(() => {
				checkboxes[i].disabled = false;
			}, 425);
		}

		if (sum < 0) {
			return;
		}

		let interval = setInterval(() => {
			let sumSkillsStop = 0;

			if (elem.target.checked) {
				sum += 1;
				sumSkillsStop = sumSkills(skills);
			} else {
				sum -= 1;
				sumSkillsStop = skills.length > 0 ? sumSkills(skills) : 0;
			}

			if (sum <= 320) {
				counterOut.style.color = yellowColor;
			} else if (sum >= 321 && sum <= 670) {
				counterOut.style.color = greenColor;
			} else if (sum >= 671) {
				counterOut.style.color = blueColor;
			}
			if (sum === sumSkillsStop) {
				clearInterval(interval);
			}
			let degValue = 285 + sum * 180 / 1008;
			arrowNeedle.style.transform = `rotate(${degValue}deg)`;
			counterOut.innerHTML = sum;
		}, 5);
	};

	const checkSkill = (elem) => {
		if (elem.target.checked) {
			skills[skills.length] = 84;
			calculationsSkill(elem);
		} else {
			skills.pop();
			calculationsSkill(elem);
		}
		if (skills.length > 5) {
			approvedImg.classList.add('active');
		} else {
			approvedImg.classList.remove('active');
		}
	};

	checkboxes.forEach((item) => {
		item.addEventListener('change', checkSkill);
	});
}
