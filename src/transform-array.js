const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const answerArr = [];

  arr.forEach((element, index, array) => {
    if (answerArr[index - 1] === "skipped") {
      return;
    }

    switch (element) {
      case "--double-next":
        if (index < arr.length && array[index + 1]) {
          answerArr.push(array[index + 1]);
        }
        break;

      case "--double-prev":
        if (array[index - 1]) {
          answerArr.push(array[index - 1]);
        }
        break;

      case "--discard-next":
        answerArr.push("skipped");
        answerArr.push("skipped");
        break;

      case "--discard-prev":
        if (index >= 1) {
          answerArr.splice(index - 1, 1);
        }
        break;

      default:
        if (!answerArr[index]) {
          answerArr.push(element);
        }
        break;
    }
  });

  return answerArr.filter((v) => v !== "skipped");
}


module.exports = {
  transform
};
