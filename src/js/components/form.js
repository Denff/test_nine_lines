
if (document.querySelector('.field-input')) {
	const input = document.querySelectorAll('.field-input');
	const approvedImg = document.querySelector('.anketa__approved-img');


	input.forEach((item) => {
		item.addEventListener('focus', function() {
			this.classList.add('active');
		});
        item.addEventListener('blur', function() {
  
            if (this.value == "") {
                this.classList.remove('active');
            }

		});

	});
	const jsCounter = document.querySelector('.anketa__js-counter');
	// const IsApproveImg = () => {
		if ( !approvedImg.classList.contains('active') && jsCounter.value > 400) {
			approvedImg.classList.add('active');
		}
	// }


	// setTimeout(IsApproveImg, 2000);



// нужно добавлять класс active к этой картинке, когда все поля заполнены.
// ('.anketa__approved-img')

// это поля в верстке
// .field
// 	input.field-input(type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required)
// 	label.field-label имя
// .field
// 	input.field-input(type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required)
// 	label.field-label дата рождения
// .field
// 	input.field-input(type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required)
// 	label.field-label город
// .field
// 	input.field-input(type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required)
// 	label.field-label контактные данные



















}




