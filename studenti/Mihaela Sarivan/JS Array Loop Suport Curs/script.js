// Tipăriți toate numerele pare de la 0 la 10

const numbers1 = [0, 2, 5, 8, 9, 11, 12];
const evens = [];
for (let i = 0; i < numbers1.length; i++) {
    const num = numbers1[i];

    if (num % 2 === 0) {
        evens.push(num);
    }
}

console.log(evens);


// Calculați suma numerelor dintr-un șir de numere 

let numbers2 = [5, 25, 33, 19];
let sum = 0;

for ( let i = 0; i < numbers2.length; i++ ) {
   sum += numbers2[i];
}

console.log(sum)

// Creați o funcție care inversează un șir de numere

const numbers = [11, 1, 21, 7];
console.log(numbers);

numbers.reverse();
console.log(numbers);

// Returnează numărul de vocale dintr-un șir de caractere (string) 

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
   {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
     vcount += 1;
    }
 
  }
  return vcount;
}
console.log(vowel_count("Eu mananc capsuni"));

