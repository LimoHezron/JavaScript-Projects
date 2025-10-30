// Finding the  max Number
/*let arr = [4,7,8,9,40,56]
let FindMaxNumber = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(FindMaxNumber(arr));*/

// Finding the number of vowels in a string

let str = "Background home, was burnt yesterday"
function countVowels() {
    let count = 0;
    let vowels = 'aeiou'
    let letters = str.toLowerCase().split("").map(letters !== "")
    for(let i = 0; i < letters.length; i++){
        if(vowels.includes(letters[i])){
            count ++
        }
    }
    console.log(letters)
    console.log(count)
}
countVowels();