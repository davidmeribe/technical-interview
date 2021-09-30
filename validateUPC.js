
/**
 * Initial Assumptions:
 *   - The UPC to check is given as a string of numbers
 *   - If the number is already a multiple of 10 at step 5, the check digit should be 0
 *   - Anything that isn't a number or string will return false.
 */

const checkUPC = (upc) => {
    let workingUPC = upc; //to avoid mutating.
  
    if (typeof upc === 'number'){
        //it's  a number
         workingUPC = upc.toString();
    }
    else if(typeof upc !== 'string'){
        return false;
    }

    const upcArray = workingUPC.replace(/\s/g, '').split('');
  
    if (upcArray.length !== 12){
        return false;
    }
   
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < upcArray.length - 1; i++){
          if ((i+1) % 2 == 0){
               sumEven += parseInt(upcArray[i]);
          }else{
               sumOdd += parseInt(upcArray[i]);
          }
    }
    sumOdd *= 3;
    let sum = sumEven + sumOdd;  

    let check = 10 - (sum % 10);

    return  check == upcArray[upcArray.length - 1]
}

/**
 * Manual tests
 *  - Testing numbers and strings.
 */
console.log("====TESTS====");
console.log('=================');
console.log('Testing String entries:');
console.log(checkUPC('8 7283272832 4'));
console.log(checkUPC('6 3938200039 3'));
console.log(checkUPC('0 0000 0000 00 0'));
console.log('=================')
console.log('Testing number entries:');
console.log(checkUPC(872832728324));
console.log(checkUPC(639382000393))
console.log(checkUPC(0));
console.log(checkUPC(111111111111));
console.log('====================');
console.log('Testing Other Data types:')
console.log(checkUPC(true));
console.log(checkUPC(undefined));
console.log(checkUPC({upc: 123344333}))
console.log('====================');
console.log('Testing Other Extremes :')
console.log(checkUPC('123450i92345'));



/**
 * Possible Improvements?
 *  Right now running time is around O(n).
 *  Make the code deal with unexpected input?
 *   - already did that, for now only expecting numbers or strings.
 *   - Maybe with more testing, we could find some cases to handle outside of the above.
 */