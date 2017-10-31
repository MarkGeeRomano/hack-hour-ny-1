/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;

  this.prototype.push = (val) => {
    this.storage[this.length++] = val;
  };

  this.prototype.pop = () => {
    let temp = this.storage[--this.length];
    delete this.storage[this.length];
    return temp;
  };
}
/**
* Queue Class
*/

function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
