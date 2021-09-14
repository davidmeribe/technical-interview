/**
 * 
Example:
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
 * MY Mistakes:
 *  - initial mistake was adding the 12 digit in the summations
 *  - added boundary check later
 *  - Initially used .trim() instead of .replace() - Stupid!! lol
 *  
 * =========
 * Iterations:
 *   - Initially only handled strings that were passed in.
 *   - now adding the ability to check numbers (still converts it to strings)
 *   
 *   - can convert the array of strings(char) to an array of numbers:
 *      - but the cost of running => arrayOfNumbers = arrayString.map(Number) is almost equal to the
 *      cost of running parseInt on each digit
 */
