// scripts/index.js
module.exports = async function main(callback) {
    try {
      // Our code will go here
      console.log("hello world")  
      // our code ends here
      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
}