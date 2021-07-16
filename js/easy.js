
/*
* Complete the 'funWithAnagrams' function below.
* The function is expected to return a STRING_ARRAY.
* The function accepts STRING_ARRAY text as parameter.

* remove all but the first occurance of an anagram. keep any that are not anagrams. sort in ascending alphabetical order. 

*Constraints
0 <= 0 <= 1000
0 <= m <= n
1 <= length of text[1] <= 1000
each string text[i] is made up of characters in the range ascii[a-z]
*/
/* 
1. loop over text and collect a frequency count of each string. 
2. loop again and if counts of two str are the same, then splice the subsequent el at that index. 
3. continue until end of arr.
4. sort array in ascending order
*/

// how to detect if the whole object matches another whole object? boolean. 
function funWithAnagrams(text) {
    if (text.length < 1) return [];
    let dict = text.map(el => el.split('').reduce((acc,c) => ((acc[c] = acc[c] + 1 || 1), acc), {}));   
    
    let i = 0;
    let lookAhead = i + 1;
    while (i < text.length - 1){
        let str1 = text[i];
        let str2 = text[lookAhead]
        let obj1 = dict[i];
        let obj2 = dict[lookAhead]
        let same = true; // are chars in both the same?
        if (str1.length === str2.length){
        // looping through chars in each string
            for (let char in obj1){
                // if string dictionaries don't have the same chars
                if(!(char in obj2)){
                    same = false;
                }
                // if frequency of chars in strings are not the same
                if (obj1[char] !== obj2[char]){
                    same = false;
                }
            }            
            // if not same, check next obj. else splice subsequent el
            if (!same && lookAhead === text.length - 1){            
                i++;
                lookAhead = i + 1;  
            } else if(same && lookAhead === text.length -1){
                text.pop();
                dict.pop();
                i++;
                lookAhead = i + 1;            
            } else if (same) {
                text.splice(lookAhead,1);
                dict.splice(lookAhead,1);
            } else if (!same){            
            lookAhead++;  
            }               
        } else {
            if (lookAhead === text.length-1){
                i++
                lookAhead = i + 1;                
            } else {
                lookAhead++;
            }
        }
    }    
    return text.sort((a,b) => a > b ? 1 : -1);    
}

console.log(funWithAnagrams(['code', 'aaagmnrs','anagrams','doce']), ['aaagmnrs','code'])