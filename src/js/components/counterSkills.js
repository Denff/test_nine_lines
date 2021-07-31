if (document.querySelector('.anketa__js-counter')) {
  
    
    const yellowColor = '#ffc815';
    const greenColor = '#a3cd3b';
    const blueColor = '#0093d7';
    const arrowNeedle =  document.querySelector('.anketa__js-arrow');


    const ch = document.querySelectorAll('.checkbox');
    const counterOut = document.querySelector('.anketa__js-counter')
    let arr_1 = [];
    let sumOut = 0;


    const plusFunc = () => {

        for(let i in ch) {
            ch[i].disabled = true;   
            setTimeout(()=> {
                ch[i].disabled = false;
            }, 420);
        }

        let interval = setInterval(() => {
            sumOut = sumOut + 1;

            let s = arr_1.reduce((a, b) => a+b);

            if (sumOut === s) {
                clearInterval(interval);
            }
            counterOut.innerHTML = sumOut;
        }, 5); 

    }
    const minusFunc = () => {

            for(let i in ch) {
                ch[i].disabled = true;
                setTimeout(()=> {
                    ch[i].disabled = false;
                }, 420);
            }

            let interval = setInterval(() => {
                sumOut = sumOut - 1;

                let s;
                arr_1.length ? s = arr_1.reduce((a, b) => a+b) : s = 0;

                if (  sumOut === s ) {
                    clearInterval(interval);
                }

                counterOut.innerHTML = sumOut;
            }, 5); 
    }


    const checkFunc = (elem) => {
        
        if(elem.target.checked) {

            arr_1[arr_1.length] = 84;
            plusFunc();

        } else {
            arr_1.pop();
            minusFunc();
        }
    
        return arr_1;
    }

    const changeCheckState = ch.forEach((item) => {
        item.addEventListener('change', (e) => {

            checkFunc(e);

        });
    });




}
// arrowNeedle.style.transform = 'rotate(' + (285 + ((i * 180) / 1000)) + 'deg)';
            // if (i <= 320) {
            //     counterDiv.style.color=yellowColor;
            // }
            // else if (i >= 321 && i <= 670) {
            //     counterDiv.style.color=greenColor;
            // }
            // else if (i >= 671) {
            //     counterDiv.style.color=blueColor;
            // }

            // if (i === number) {
            //     clearInterval(interval);
            // }


