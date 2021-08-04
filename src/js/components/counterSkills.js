if (document.querySelector('.anketa__js-counter')) {
    
    const yellowColor = '#ffc815';
    const greenColor = '#a3cd3b';
    const blueColor = '#0093d7';
    const arrowNeedle =  document.querySelector('.anketa__js-arrow');
    const approvedImg = document.querySelector('.anketa__approved-img');
    const ch = document.querySelectorAll('.checkbox');
    const counterOut = document.querySelector('.anketa__js-counter');
    let arr_1 = [];
    let sumOut = 0;

    const sumArrElements = (arr) => {
        let result = 0;
        for (i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }

    const plusFunc = () => {

        for(let i in ch) {
            ch[i].disabled = true;   
            setTimeout(()=> {
                ch[i].disabled = false;
            }, 425);
        }

        let interval = setInterval(() => {
            sumOut = sumOut + 1;
            let s = sumArrElements(arr_1);

            if (sumOut <= 320) {
                counterOut.style.color=yellowColor;
            }
            else if (sumOut >= 321 && sumOut <= 670) {
                counterOut.style.color=greenColor;
            }
            else if (sumOut >= 671) {
                counterOut.style.color=blueColor;
            }

            if (sumOut === s) {
                clearInterval(interval);
            }

            arrowNeedle.style.transform = 'rotate(' + (285 + ((sumOut * 180) / 1008)) + 'deg)';
            counterOut.innerHTML = sumOut;
        }, 5); 

    }
    const minusFunc = () => {

        for(let i in ch) {
            ch[i].disabled = true;
            setTimeout(()=> {
                ch[i].disabled = false;
            }, 425);
        }

        if (sumOut > 0) {

            let interval = setInterval(() => {
                sumOut = sumOut - 1;
    
                let s;
                arr_1.length ? s = sumArrElements(arr_1) : s = 0;
    
                if (sumOut <= 320) {
                    counterOut.style.color=yellowColor;
                }
                else if (sumOut >= 321 && sumOut <= 670) {
                    counterOut.style.color=greenColor;
                }
                else if (sumOut >= 671) {
                    counterOut.style.color=blueColor;
                }
    
                if (  sumOut === s ) {
                    clearInterval(interval);
                }
    
                arrowNeedle.style.transform = 'rotate(' + (285 + ((sumOut * 180) / 1008)) + 'deg)';
                counterOut.innerHTML = sumOut;
            }, 5); 
        }
    }

    const checkFunc = (elem) => {
        
        if(elem.target.checked) {

            arr_1[arr_1.length] = 84;
            plusFunc();

        } else {
            arr_1.pop();
            minusFunc();
        }
        
        if (arr_1.length > 6) {
            approvedImg.classList.add('active');
        } else {
            if(approvedImg.classList.contains('active')) {
                approvedImg.classList.remove('active');
            }
        }
    }

    const changeCheckState = ch.forEach((item) => {
        item.addEventListener('change', (e) => {
            checkFunc(e);
        });
    });
}
