function filterBy(arr, type) {

    let retArr = [];
    let idx;

    for (idx = 0; idx < arr.length; idx++) {
        if (typeof arr[idx] !== type) {
            retArr[retArr.length] = arr[idx];
        }
    }
    return retArr;
}

let testArr = ['hello', 'world', 23, '23', null];

console.log(filterBy(testArr, "string"));


// Teoretical question:
// Explain in your own words how the forEach loop works.
    // ForEach is an Array method that we can use to execute a function on each element in an array.
    // It can only be used on Arrays, Maps, and Sets.
    //     Example:
    // const arr = ['book', 'pen', 'pencil'];
    // arr.forEach(element => {
    //     console.log(element);
    // });
    // // book
    // // pen
    // // pencil