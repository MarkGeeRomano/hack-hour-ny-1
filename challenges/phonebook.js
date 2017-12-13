/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*         
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  for (let f = 0, let b = jazbook.length - 1; f < Math.ceil((jazbook.length)/2); f++, b--) {
    if (jazbook[f][0] === name) return jazbook[f][1];
    if (jazbook[b][0] === name) return jazbook[b][1];
    if (jazbook[f][1] === name) return jazbook[f][0];
    if (jazbook[b][1] === name) return jazbook[b][0];
  }
  return false;
}
// best case: O(n/2)


// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
