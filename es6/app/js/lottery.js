import $ from 'jquery';

import Base from './lottery/base';
import Timer from './lottery/timer';
import Calculate from './lottery/calculate';
import Interface from './lottery/interface';

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor' && key !== 'prototype'
      && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}

function mix(...mixins) {
  class Mix { }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}

class Lottery extends mix(Base, Calculate, Interface, Timer) {
  constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
    super();
    this.name = name;
    this.cname = cname;
    this.issue = issue;
    this.state = state;
    this.el = '';
    this.omit = new Map();
    this.openCode = new Set();
    this.openCodeList = new Set();
    this.playList = new Map();
    this.number = new Set();
    this.issueEl = '#curr_issue';
    this.countdownEl = '#countdown';
    this.stateEl = '.state_el';
    this.cartEl = '.codelist';
    this.omitEl = '';
    this.curPlay = 'r5';
    this.initPlayList();
    this.initNumber();
    this.updateState();
    this.initEvent();
  }

  updateState() {
    this.getState().then((res) => {
      this.issue = res.issue;
      this.endTime = res.endTime;
      this.state = res.state;
      $(this.issueEl).text(res.issue);
      this.countdown(res.endTime, (time) => {
        $(this.countdownEl).html(time);
      }, () => {
        setTimeout(() => {
          this.updateState();
          this.getOmit(this.issue).then((res) => {

          });
          this.getOpenCode(this.issue).then((res) => {

          });
        }, 5000);
      })
    })
  }

  initEvent() {
    $('#plays').on('click', 'li', this.changePlayNav.bind(this));
    $('.boll-list').on('click', '.btn-boll', this.toggleCodeActive.bind(this));
    $('#confirm_sel_code').on('click', this.addCode.bind(this));
    $('.dxjo').on('click', 'li', this.assistHandle.bind(this));
    $('.qkmethod').on('click', '.btn-middle', this.getRandomCode.bind(this));
  }
}

export default Lottery;
