let sentence = 'hi, i am a frontend developer';
let words = sentence.split(' ');
let final = [];
for(let i=0;i<words.length;i++){
    let word = words[i];
   let res = word[0].toUpperCase()+ word.slice(1);
   final.push(res);

}
console.log(final.join(' '));

// Capitalize the first letter of each word
let capitalizedWords = words.map(word => {
    if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
});
console.log(capitalizedWords.join(' '))


// use replace method 
let res  =sentence.replace(/\b\w/g, char => char.toUpperCase())
console.log(res);



let wordss = words.map(word => {
    return word;
});
console.log(wordss.join(' '))


///

function capitalizeFirstLetterOfEachWord(sentence) {
    let result = '';
    let capitalizeNext = true; // Flag to determine if the next character should be capitalized

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === ' ') {
            capitalizeNext = true; // Next non-space character should be capitalized
            result += char;
        } else if (capitalizeNext) {
            result += char.toUpperCase(); // Capitalize the character
            capitalizeNext = false; // Reset the flag
        } else {
            result += char; // Add character as is
        }
    }

    return result;
}

// Example usage
const sentence1 = 'hi, i am a frontend developer';
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence1);
console.log(capitalizedSentence); // Outputs: "Hi, I Am A Frontend Developer"
