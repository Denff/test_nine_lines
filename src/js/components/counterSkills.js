if (document.querySelector('.anketa__js-counter')) {
    
    const yellowColor = '#ffc815';
    const greenColor = '#a3cd3b';
    const blueColor = '#0093d7';
    const arrowNeedle =  document.querySelector('.anketa__js-arrow');
    const approvedImg = document.querySelector('.anketa__approved-img');
    const checkboxs = document.querySelectorAll('.checkbox');
    const counterOut = document.querySelector('.anketa__js-counter');
    let skills = [];
    let sum = 0;

    const sumSkills = (arr) => {
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }

    const plusSkill = () => {

        for(let i in checkboxs) {
            checkboxs[i].disabled = true;   
            setTimeout(()=> {
                checkboxs[i].disabled = false;
            }, 425);
        }

        let interval = setInterval(() => {
            sum = sum + 1;
            let sumSkillsStop = sumSkills(skills);

            if (sum <= 320) {
                counterOut.style.color=yellowColor;
            }
            else if (sum >= 321 && sum <= 670) {
                counterOut.style.color=greenColor;
            }
            else if (sum >= 671) {
                counterOut.style.color=blueColor;
            }

            if (sum === sumSkillsStop) {
                clearInterval(interval);
            }

            arrowNeedle.style.transform = 'rotate(' + (285 + ((sum * 180) / 1008)) + 'deg)';
            counterOut.innerHTML = sum;
        }, 5); 

    }
    const minusSkill = () => {

        for(let i in checkboxs) {
            checkboxs[i].disabled = true;
            setTimeout(()=> {
                checkboxs[i].disabled = false;
            }, 425);
        }

        if (sum < 0) {
            return;
        }

        let interval = setInterval(() => {
            sum = sum - 1;

            let sumSkillsStop = 0 < skills.length ? sumSkills(skills) : 0;

            if (sum <= 320) {
                counterOut.style.color=yellowColor;
            }
            else if (sum >= 321 && sum <= 670) {
                counterOut.style.color=greenColor;
            }
            else if (sum >= 671) {
                counterOut.style.color=blueColor;
            }

            if (  sum === sumSkillsStop ) {
                clearInterval(interval);
            }

            arrowNeedle.style.transform = 'rotate(' + (285 + ((sum * 180) / 1008)) + 'deg)';
            counterOut.innerHTML = sum;
        }, 5); 
    }

    const checkSkill = (elem) => {
        
        if(elem.target.checked) {

            skills[skills.length] = 84;
            plusSkill();

        } else {
            skills.pop();
            minusSkill();
        }
        
        if (skills.length > 5) {
            approvedImg.classList.add('active');
        } else {
            if(approvedImg.classList.contains('active')) {
                approvedImg.classList.remove('active');
            }
        }
    }

    const changeCheckState = checkboxs.forEach((item) => {
        item.addEventListener('change', checkSkill);
    });
}
