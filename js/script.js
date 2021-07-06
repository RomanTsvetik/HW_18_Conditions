
let age = +prompt(`Введите число`);

if (isNaN(age)) {
    console.log(`Введенные данные некорректны`);
}
else if (age % 100 > 4 && age % 100 < 20) {
    console.log(age + ' лет');
}
else {
    if (age % 10 == 1) {
        console.log(age + ' год'); 
    }
    else if (age % 10 >= 2 && age % 10 <= 4) {
        console.log(age + ' года');
    }
    else {
    console.log(age + ' лет');
    }
}
