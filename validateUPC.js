/**
 * Example:
UPC codes are a set of 12 numbers unique to a product. The last digit of the UPC code is called a check digit. This allows the scanner to perform an internal algorithm that constitutes the accuracy of the barcode content. Here is how the check digit is calculated for the other 11 digits, using the code 6 3938200039 3 in this example;

(Step 1) Add together the value of all of the digits in odd positions (digits 1, 3, 5, 7, 9 and 11).  [6 + 9 + 8 + 0 + 0 + 9 = 32];
(Step 2) Multiply that number by 3.  [32 * 3 = 96];
(Step 3) Add together the value of all of the digits in even positions (digits 2, 4, 6, 8 and 10).  [3 + 3 + 2 + 0 + 3 = 11];
(step 4) Add this sum to the value in step 2.  [96 + 11 = 107];
(Step 5) Take the number in Step 4. To create the check digit, determine the number that, when added to the number in step 4, is a multiple of 10.  [107 + 3 = 110];
The check digit is therefore 3.

Assignment:

Verify whether or not the UPC code “8 7283272832 4” is a valid code. Return true if the UPC code is valid, or false if the UPC code is not valid. Please also include your code. 
 */

/**
 * Assumptions:
 *   - The UPC to check is given as a string of numbers
 *   - If the number is already a multiple of 10 at step 5, the check digit should be 0
 *  
 */

const checkUPC = (upc) => {
   // Strip string of spaces and create an array of the numbers
     //NOTE:  it's still an Array of chars, hence parseInt 
     const upcArray = upc.replace(/\s/g, '').split('');
    
   //Initial Checks 
    // if the upc array length is less than 12, it is not valid.
    if (upcArray.length !== 12){
        return false;
    }
   
   //Add Odd Digits & Add Even Digits 
       //(Combining Step 1 and Step 3)
   //Running time: roughly O(n)

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < upcArray.length - 1; i++){
         // account for the difference in array index and digits (+1)
          if ((i+1) % 2 == 0){
               //Even, add to sumEven
               sumEven += parseInt(upcArray[i]);
          }else{
              //Odd, add to sumOdd
               sumOdd += parseInt(upcArray[i]);
          }
    }

    //Step 2: Multiply sumOdd by 3 
      sumOdd *= 3;

    //Step 4: Add sumEven and new sumOdd together
     let sum = sumEven + sumOdd;  
      
    //Step 5: Here we are not creating a check digit, but finding if the current 12 digit is correct.
       // check if the sum is a muliple of 10.
     let check = 10 - (sum % 10)
     
     //using the assumption that at this point 
     return  check == upcArray[upcArray.length - 1]
}

/**
 * Manual tests
 * - initially didn't cater for different data types
 * - only did strings at first 
 */
console.log(checkUPC('872832728324'));
console.log(checkUPC('6 3938200039 3'));
console.log(checkUPC('0 0000 0000 00 0'));

/**
 * MY Mistakes:
 *  - initial mistake was adding the 12 digit in the summations
 *  - added boundary check later
 *  - Initially used trim() instead of replace - Stupid!! lol
 *  
 */
