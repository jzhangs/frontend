import $ from 'jquery';

class Interface {
  /**
   * [getOmit get lottery tickets that not win]
   * @param {string} issue 
   */
  getOmit(issue) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          this.setOmit(res.data);
          resolve(res);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }

  /**
   * [getOpenCode get lottery num that win]
   * @param {string} issue 
   */
  getOpenCode(issue) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          this.setOpenCode(res.data);
          resolve(res);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }

  /**
   * [getState]
   * @param {string} issue 
   */
  getState(issue) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          resolve(res);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }
}

export default Interface;
