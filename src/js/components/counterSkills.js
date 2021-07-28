if (document.querySelector('.anketa__js-counter')) {
    const time = 3000;
    let step = 1;
    let count = 0;
    const yellowColor = '#ffc815';
    const greenColor = '#a3cd3b';
    const blueColor = '#0093d7';
    const arrowNeedle =  document.querySelector('.anketa__js-arrow');

    const showNumber = (number, element) => {

        let counterDiv = document.querySelector(element);
        let i = 0;
        let timer;
        if (number === 0) {
            i = number;
            timer = 0;
            step = 0;
        }
        else {
            timer = Math.round(time/(number/step));
        }

        let interval = setInterval(() => {
            i = i + step;
            if (i <= 320) {
                counterDiv.style.color=yellowColor;
            }
            else if (i >= 321 && i <= 670) {
                counterDiv.style.color=greenColor;
            }
            else if (i >= 671) {
                counterDiv.style.color=blueColor;
            }

            if (i === number) {
                clearInterval(interval);
            }

            arrowNeedle.style.transform = 'rotate(' + (285 + ((i * 180) / 1000)) + 'deg)';
            counterDiv.innerHTML = i;
        }, 
            timer);
        console.log(timer);
        console.log(count);

    }

    showNumber(450, '.anketa__js-counter');

    // if (document.querySelectorAll('.checkbox')) {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach(item => {

        item.addEventListener('change', function() {
        
            this.checked ? sumNumber() : minusNumber();

        });
    
    });
    // }
    const sumNumber = () => {
        count += 82;
        return count;
       
    }
    const minusNumber = () => {
        count -= 82;
        if (count < 0) {
            count = 0;
        }
        return count;
    }

}

