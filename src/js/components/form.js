if (document.querySelector('.field-input')) {
	const input = document.querySelectorAll('.field-input');

	input.forEach((item) => {
		item.addEventListener('focus', function() {
			this.classList.add('active');
		});

		item.addEventListener('blur', function() {
			if (this.value === '') {
				this.classList.remove('active');
			}
		});
	});
}
