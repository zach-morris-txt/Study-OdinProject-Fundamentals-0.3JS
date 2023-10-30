/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */
        function troubleshooting() {
            const a = 1;
            const b = 1;

            let result;
            result = a + b; //was written as: "a" + "b"..... strings
            console.log(result);
        }
        troubleshooting();


/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */
        number = Number(prompt("enter a number"));

        function numberChecker() {
            if(number >= 10) {
                return true;
            } else {
                return false;
            }
        }
        numberChecker()


/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */
        const a = 1 + 8 //"one plus eight"
        const b = 22 * 3 //"22 times three"
        const c = 5 % 4 //"the *remainder* of 5/4"
        const d = a - 17 //"the variable 'a' minus 17"
        const e = a + b + c + d //"the sum of the previous four variables"


/**===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
*/
        // const birthYear = 1948;
        // const thisYear = 1965;
        // const firstName = "Carlos";
        // const lastName = "Stevenson";

        // const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";
        // console.log(greeting); 

//"Hello! My name is Carlos Stevenson and I am 17 years old."


/*===== Step 2: =====
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear
  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)
  3. Print greeting with console.log
*/
const firstName = "Zach"
const lastName = "Morris"
const thisYear = 2023
const birthYear = 2000
const greeting = "My name is " + firstName + " " + lastName + ", I am " + (thisYear - birthYear) + " years old."
console.log(greeting)


/*===== Step 3: =====
  4. Go back to your code and create 2 new variables: "fullName" and "age"
*/
 const fullName = firstName + " " + lastName
 const age = thisYear - birthYear