/**
 * () => {
 *  return 'coucou'
 * }
 * 
 * () => 'coucou'
 * _ => 'coucou'
 * 
 * name => `coucou ${name}`
 */

module.exports = {
    name: "John Doe",
    getName: function() { 
        // console.log(this);
        return this.name 
    },
    sayHello: name => `Hello ${name}`
}