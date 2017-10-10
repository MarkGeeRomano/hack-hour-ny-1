/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

	//decided what charaters the in puts are going to be
	// () [] {}
	//hava a variable that when there is more
	//than odd numbers of parenthesis it sets the variable to false
	//let allParens=["(",")","{","}","[","]"  ];
	let allParens="(){}[]"

	let inputLeng=input.length;
	let allParenslLeng=allParens.length;
	let b=true;
	if( inputLeng<1 ) return false;

	for (let i = 0; i < inputLeng; i++) {
		input[i]
		//console.log( input[i] )
		for (let j = 0; j < allParenslLeng; j++) {
			allParens[j]
			//console.log(  allParens[j] )
			if( input.charAt(i) === allParens.charAt(j)  ){
				console.log( " input == allParens: ", input[i] );
				b? b=false: b=true;
			}
		}
	}

return b;
}

//console.log(balancedParens("123)13{}123[]"));
module.exports = balancedParens;
