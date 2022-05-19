function find2smallest(arr) {
    arr.sort((a, b) => a-b);
    console.log(arr[0] + ' ' + arr[1]);
}

find2smallest([30, 15, 50, 5])