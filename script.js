/*1) Создать массив, длина которого строится от числа, которое введет пользователь (предложить пользователю ввести число).
    Заполнить массив числами (порядковый номер элемента массива).
2) Создать массив, длина которого строится от числа, которое введет пользователь (предложить пользователю ввести число).
    Заполнить массив числами (порядковый номер элемента массива в квадрате).
3) Создать массив, длина которого строится от числа, которое введет пользователь (предложить пользователю ввести число).
    Заполнить массив числами, где на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку
    от деления своего номера на 5.
4) Создать массив из случайных целых чисел от 0 до n, где n вводит пользователь.
5) Определить, содержит ли массив данное число x
6) Найти количество четных чисел в массиве.
7) Найдите сумму четных чисел массива.
8) Найдите сумму чисел массива, которые стоят на четных индексах.
9) Найдите наибольший элемент массива.
10) Определите, есть ли в массиве повторяющиеся элементы и отобразить их.
11) Удалить в массиве все числа, которые повторяются более двух раз.
12) Создать многомерный массив 5х5 и заполнить случайными целыми числами.
    По результату матрицы, нужно взять числа по диагонали и вывести в одномерный массив.
13) Создать массив 5х5 и подсчитать сумму двух диагоналей.*/

function task_1(n) {
    var arr = [n];
    for (var i = 0; i <= n; i++){
        arr[i] = i;
    }
    return alert(arr);
}
function task_2(n) {
    var arr = [n];
    for (var i = 0; i <= n; i++){
        arr[i] = i*i;
    }
    return alert(arr);
}
function task_3(n) {
    var arr = new Array(n);
    for (var i = 0; i < n; i++){
       if(i % 2 == 0){
            arr[i] = 1;
            console.log('Четный индекс (просто записываем 1) = 1');
        }
        else {
            arr[i] = i % 5;
            console.log('Не четный индекс (остаток от деления на 5) = ' + arr[i]);
        }
    }
    return alert(arr);
}
function task_4(n) {
    var arr = [n];
    for (var i = 0; i <= n; i++){
        arr[i] = Math.floor(Math.random() * (n - 0 + 1)) + 0;
    }
    return alert(arr);
}
function task_5(x) {
    var arr = [123, 454, 1, 875, 954];
    var length = arr.length;
    for (var i = 0; i <= length; i++){
        if(Number(x) == arr[i]){
            return alert('Массив содержит число ' + x + ' под индексом ' + i);
        }
    }
    alert('Массив не содержит такого числа!');
}
function task_6() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 124];
    var length = arr.length;
    var t = 0;
    for (var i = 0; i <= length; i++){
        if(arr[i] % 2 == 0){
            t++;
        }
    }
    alert('Количество четных цифер в массиве: ' + t);
}
function task_7() {
    var arr = [1, 2, 3, 4, 5, 6];
    var length = arr.length;
    var t = 0;
    for (var i = 0; i <= length; i++){
        if(arr[i] % 2 == 0){
            t += arr[i];
        }
    }
    alert('Сумма четных цифер в массиве: ' + t);
}
function task_8() {
    var arr = [1, 2, 2, 3, 4, 5, 6, 8];
    var length = arr.length;
    var t = 0;
    for (var i = 0; i <= length; i++){
        if((arr[i] % 2 == 0) && (i % 2 == 0)){
            t += arr[i];
        }
    }
    alert('Сумма четных цифер находящихся под четными индексами в массиве: ' + t);
}
function task_9() {
    var arr = [21, 28, 2, 35, 40, 5, 666, 8, 888];
    var length = arr.length;
    var max = arr[0];
    for (var i = 0; i <= length; i++){
        if (arr[i] > arr[0]) {
            max = arr[i];
        }
    }
    alert('Наибольший элемент массива: ' + max);
}
function task_10() {
    var arr = [21, 2, 35, 40, 2, 5, 5, 5, 666, 5, 888, 888, 2, 21];
    console.log('Изначальный массив: ' + arr);
    var arr1 = [];
    arr.sort();
    console.log('Отсортированый массив: ' + arr);
    var length = arr.length;

    for (var i = 0; i < length; i++){
        if (arr[i] == arr[i+1]) {
            arr1.push(arr[i]);
        }
    }
    alert('Повторяющиеся элементы в массиве: ' + arr1);
    console.log('Повторяющиеся элементы в массиве: ' + arr1);
}
function task_11() {
    var arr = [21, 2, 2, 35, 40, 5, 5, 5, 666, 5, 888, 2, 2];
    console.log('Не отсортированый массив:' + arr);
    var resObj = {};
    var length = arr.length;
    for (var i = 0; i < length; i++){
        var t = arr[i];
        resObj[t] = true;
    }

    alert('Обновленный массив с удаленными повторяющимися больше 3-х раз элементнами: ' + Object.keys(resObj));
    console.log('Обновленный массив с удаленными повторяющимися больше 3-х раз элементнами: ' + Object.keys(resObj));
}
function task_12() {
    //это первый вариант. скорее всего не правильный, но получилось прикольно)
    var arr = [];
    for(var i = 0; i < 5; i++){
        arr[i] = [];
        for(var j = 0; j < 5; j++){
            arr[i][j] = [];
            for(var k = 0; k < 5; k++){
                arr[i][j][k] = [];
                for(var l = 0; l < 5; l++){
                    arr[i][j][k][l] = randNum();
                }
            }
        }
    }
    console.log(arr);
    alert(arr);

    //Это попытка вывести диагональ по первому варианту))
    /*    for(var i=0; i < 5; i++) {
            for(var j=0; j < 5; j++) {
                for(var k=0; k < 5; k++) {
                    for(var l=0; l < 5; l++){
                        if(i == j == k == l){
                            console.log(arr[i][j][k][l]);
                        }
                    }
                }
            }
        }*/
// второй вариант, правильный
    var arr1 = new Array(5);
    var arrRes = [];
    var length = arr1.length;
    for(var x = 0; x < length; x++){
        arr1[x] = new Array(randNum(), randNum(), randNum(), randNum(), randNum());
    }
    console.log(arr1);
    alert(arr1);
// вывод диагонали в одномерный массив
    for (var y=0; y < 5; y++){
        for (var z=0; z < 5; z++){
            if (y==z){
                arrRes [z] = arr1[y][z];
            }
        }
    }
    console.log(arrRes);

}
function task_13() {
    var arr = new Array(5);
    var arrRes = 0;
    var arrRes1 = 0;
    var t = 0;
    var t2 = 0;
    var arrResult = [];
    var length = arr.length;
    for(var x = 0; x < length; x++){
        arr[x] = new Array(randNum(), randNum(), randNum(), randNum(), randNum());
    }
    console.log(arr);

    for (var y=0; y < 5; y++){
        for (var z=0; z < 5; z++){
            if (y==z){
                arrRes += arr[y][z];
                t = arr[y][z]; //возможно имелась ввиду сумма элементов между собой в диагоналях?

            }
            if(y == 4-z){
                arrRes1 += arr[y][z];
                t2 = arr[y][z]; //возможно имелась ввиду сумма элементов между собой в диагоналях?
            }
        }
        arrResult [y] = t + t2;
    }
    console.log('Сумма элементов первой диагонали: ' + arrRes);
    console.log('Сумма элементов второй диагонали: ' + arrRes1);
    console.log('Сумма 2-х диагоналей: ' + (arrRes+arrRes1));
    //alert('Сумма 2-х диагоналей: ' + (arrRes+arrRes1));
    console.log('Сумма элементов между собой в диагоналях: ' + (arrResult));
}

function randNum() {
    return Math.floor(Math.random()*100);
}
