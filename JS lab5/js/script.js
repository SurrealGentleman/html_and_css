let calc = document.getElementById('calc');
let start = dates.start;
let end = dates.end;
let result = document.getElementById('result');
let reg = /^\d\d?[.\-/]\d\d?[.\-/](\d{2}|\d{4})$/;
let select = dates.select;
calc.addEventListener('click', function(){
    if (reg.test(start.value)){
        let day = start.value.match(/^\d\d?/);
        let month = start.value.match(/\d\d?/g)[1] - 1;
        let year = start.value.match(/\d{2}$|\d{4}$/);
        if (year<50){
            year = parseInt(year) + 2000;
        }
        else if (year<100){
            year = parseInt(year) + 1900;
        }
        let date1 = new Date(year, month, day, 5);
        if (date1.getFullYear() == year && date1.getMonth() == month && date1.getDate() == day){
            if (date1 < end.valueAsDate){
                let days = Math.round((end.valueAsDate - date1)/86400000);
                let unit = ['дней', 'день', 'дня'];
                switch(true){
                    case select[0].checked:
                        result.value = days;
                        break;
                    case select[1].checked:
                        let weekends = 0;
                        for (let i = 0; i < days; i ++){
                            if (date1.getDay() == 0 || date1.getDay() == 6){
                                weekends ++;
                            }
                            date1.setDate(date1.getDate()+1)
                        }
                        result.value = weekends;
                        break;
                    case select[2].checked:
                        let workdays = 0;
                        for (let i = 0; i < days; i ++){
                            if (date1.getDay() != 0 && date1.getDay() != 6){
                                workdays ++;
                            }
                            date1.setDate(date1.getDate()+1);
                        }
                        result.value = workdays;
                        break;
                    case select[3].checked:
                        let weeks = 0;
                        unit = ['недель', 'неделя', 'недели'];
                        let iw = 1
                        if (date1.getDay() != 1){
                            while (date1.getDay() != 1){
                                date1.setDate(date1.getDate()+1);
                                iw ++;
                            }
                        }
                        for (iw; iw <= days; iw ++){
                            date1.setDate(date1.getDate()+1)
                            if (date1.getDay() == 1){
                                weeks ++;
                            }
                        }
                        result.value = weeks;
                        break;
                    case select[4].checked:
                        let months = 0;
                        unit = ['месяцев', 'месяц', 'месяца'];
                        let im = 1
                        if (date1.getDate() != 1){
                            while (date1.getDate() != 1){
                                date1.setDate(date1.getDate()+1);
                                im ++;
                            }
                        }
                        for (im; im <= days; im ++){
                            date1.setDate(date1.getDate()+1)
                            if (date1.getDate() == 1){
                                months ++;
                            }
                        }
                        result.value = months;
                        break;
                    default:
                        alert('Выберите, что необходимо рассчитать');
                }
                switch (true){
                    case (result.value == ''):
                        break;
                    case (result.value%100 >= 11 && result.value%100 <= 14):
                        result.value += ' ' + unit[0];
                        break;
                    case (result.value%10 == 0):
                        result.value += ' ' + unit[0];
                        break;
                    case (result.value%10 == 1):
                        result.value += ' ' + unit[1];
                        break;
                    case (result.value%10 <= 4):
                        result.value += ' ' + unit[2];
                        break;
                    case (result.value%10 <= 9):
                        result.value += ' ' + unit[0];
                        break;
                }
            }
            else{
                alert("Начальная дата должна быть меньше конечной");
            }
        }
        else{
            alert("Некорректная дата");
        }
    }
    else{
        alert("Некорректная дата");
    }
})