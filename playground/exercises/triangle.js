


/*
Write a loop that makes seven calls to console.log to output the fol- lowing triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
It may be useful to know that you can find the length of a string by writing .length after it.
let abc = "abc"; console.log(abc.length); // → 3
 */

// for ( let x = 1; x <= 7; x++ ) {
//     for (let y = 1; y <= x; y++) {
//         process.stdout.write('#');
//     }
//     console.log();
// }

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz " for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/


// for (let x = 1; x <= 100; x++) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log(`${x}: FizzBuzz`);
//         continue;
//     }
//
//     if (x % 3 === 0) {
//         console.log(`${x}: Fizz`)
//     } else if ( x % 5 === 0 && x % 3 !== 0) {
//         console.log(`${x}: Buzz`)
//     }
// }
