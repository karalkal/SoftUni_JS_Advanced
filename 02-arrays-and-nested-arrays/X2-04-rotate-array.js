//the last element should become the first, upon rotation. 
function rotateArr(arr, times) {
    for (let i=1; i <= times; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}


rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15)