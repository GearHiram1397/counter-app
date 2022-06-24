let data = document.getElementById('data');

// temporal
let count = 0;

let suma = document.getElementById('suma');
suma.addEventListener('click', () => {
    count = count + 1;
    data.innerHTML = count;
})

let resta = document.getElementById('resta');
resta.addEventListener('click', () => {
    count = count - 1;
    data.innerHTML = count;
})

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    count = 0;
    data.innerHTML = count;
})

let err = document.getElementById('err');
err.addEventListener('click', () => {
    count = "ERROR";
    data.innerHTML = count;
})




// let resta = document.getElementById('resta')
// resta.addEventListener('click', () => {
//     count = count - 1
//     data.innerHTML = count
// })
// let reset = document.getElementById('reset')
// reset.addEventListener('click', () => {
//     count = 0
//     data.innerHTML = count
// })