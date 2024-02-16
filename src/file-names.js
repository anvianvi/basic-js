const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function getNameCandidate(name, iteration) {
  return name + `(${iteration})`;
}

function renameFiles(names) {
  const out = [];
  names.forEach((el, i, arr) => {
    let exists = out.some((e) => e === el);

    if (!exists) {
      out.push(el);
      return;
    }

    let iteration = 1;
    let newVal = getNameCandidate(el, iteration);

    while (exists) {
      newVal = getNameCandidate(el, iteration);
      exists = out.some((e) => e === newVal);

      iteration++;
    }

    out.push(newVal);
  });

  return out;
}

module.exports = {
  renameFiles
};
