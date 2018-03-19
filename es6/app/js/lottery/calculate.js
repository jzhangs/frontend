class Calculate {

  /**
   * [computeCount]
   * @param {number} active current number selected
   * @param {string} playName current play type
   * @return {number}
   */
  computeCount(active, playName) {
    let count = 0;
    const exist = this.playList.has(playName);
    const arr = new Array(active).fill('0');

    if (exist && playName[0] === 'r') {
      count = Calculate.combine(arr, parseInt(playName[1])).length;
    }
    return count;
  }

  /**
   * [computeBonus reward range]
   * @param {number} active 
   * @param {string} playName 
   * @return {array}
   */
  computeBonus(active, playName) {
    const size = parseInt(playName[1]);
    let arr = new Array(size).fill(0);
    let min, max;
    if (playName[0] === 'r') {
      let minActive = 5 - (11 - active);
      if (minActive > 0) {
        if (minActive - size >= 0) {
          arr = new Array(minActive).fill(0);
          min = Calculate.combine(arr, size).length;
        } else {
          if (size > 5 && active - size >= 0) {
            arr = new Array(active - 5).fill(0);
            min = Calculate.combine(arr, size - 5).length;
          } else {
            min = active - size > - 1 ? 1 : 0;
          }
        }
      } else {
        min = active - size > - 1 ? 1 : 0;
      }

      let maxActive = Math.min(active, 5);
      if (size > 5) {
        if (active - size > 0) {
          arr = new Array(active - 5).fill(0);
          max = Calculate.combine(arr, size - 5).length;
        } else {
          max = 0;
        }
      } else if (size < 5) {
        arr = new Array(Math.min(active, 5)).fill(0);
        max = Calculate.combine(arr, size).length;
      } else {
        max = 1;
      }
    }

    return [min, max].map(item => item * this.playList.get(playName).bonus);
  }

  /**
   * [combile] return combination of [size] items from an
   * array, for example ([5, 2, 3], 2) return [5, 2], [5, 3] 
   * and [2, 3]
   * 
   * @param {array} arr 
   * @param {number} size
   * @return {number} combination counts
   */
  static combine(arr, size) {
    let res = [];
    (function f(arr, size, result) {
      let len = arr.length;
      if (size > len) {
        return;
      } else if (size === len) {
        // res.push([].concat(result, arr));
        res.push([...result, ...arr]);
      } else {
        for (let i = 0; i < len; i++) {
          let nextResult = [...result, arr[i]];
          if (size === 1) {
            res.push(nextResult);
          } else {
            let nextArr = [...arr];
            nextArr.splice(0, i + 1);
            f(nextArr, size - 1, nextResult);
          }
        }
      }
    })(arr, size, []);
    return res;
  }
}

export default Calculate;
