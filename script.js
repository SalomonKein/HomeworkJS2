let num = +prompt('Введіть ціле число', ' ');
let i;
let count = 0;
if (Number.isInteger(num)) {


    for (i = 0; i < num; i += 5) {

        count++;
        console.log(i);

    }
    if (count <= 1) {
        console.log('Sorry, no numbers');
    }
} else {
    do {
        num = +prompt('Введіть ціле число', ' ');
    }
    while (!Number.isInteger(num))



    for (i = 0; i < num; i += 5) {

        count++;
        console.log(i);

    }
    if (count <= 1) {
        console.log('Sorry, no numbers');
    }
}