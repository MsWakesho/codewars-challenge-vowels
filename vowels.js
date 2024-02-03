function countVowels(str){

    // We have to first establish the array of the vowels to be counted.
    const vowels =['a','e','i', 'o', 'u'];


    // The purpose for this is to convert the input to lowercase as per challenge and to handle the case sensitivity.
    const lowercaseStr = str.toLowerCase();


    // The purpose for this is to initialize a count variable to keep track of the number of vowels in the input 

    let count = 0 ;


//   We use "for...of " loop to iterate through each character "char" in the "lowercaseStr" string.

    for(let char of lowercaseStr){


// Within the loop,we use the "includes()" method on the vowels array to check if the current character "char" is included in the array of vowels, if the character is a vowel,we increment the "count" variable by 1.


        if(vowels.includes(char)){
          count++;
        }
    }

// After looping through all the characters in the string,we return the total count of the vowels in the character provided in the input string.
    return count;
}


const results = countVowels ('Hey Beautiful Lady');
console.log(results)