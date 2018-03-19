import $ from 'jquery';

class Base {
  initPlayList() {
    this.playList.set('r2', {
      bonus: 6,
      tip: `从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元`,
      name: '任二'
    }).set('r3', {
      bonus: 19,
      tip: `从01～11中任选3个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em class="red">19</em>元`,
      name: '任三'
    }).set('r4', {
      bonus: 78,
      tip: `从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元`,
      name: '任四'
    }).set('r5', {
      bonus: 540,
      tip: `从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元`,
      name: '任五'
    }).set('r6', {
      bonus: 90,
      tip: `从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元`,
      name: '任六'
    }).set('r7', {
      bonus: 26,
      tip: `从01～11中任选7个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">26</em>元`,
      name: '任七'
    }).set('r8', {
      bonus: 9,
      tip: `从01～11中任选8个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">9</em>元`,
      name: '任八'
    });
  }

  initNumber() {
    for (let i = 1; i < 12; i++) {
      this.number.add(('' + i).padStart(2, '0'));
    }
  }

  setOmit(omit) {
    this.omit.clear();
    for (let [index, item] of omit.entries()) {
      this.omit.set(index, item);
    }

    $(this.omitEl).each((index, item) => {
      $(item).text(this.omit.get(index));
    })
  }

  setOpenCode(code) {
    this.openCode.clear();
    for (let item of code.values()) {
      this.openCode.add(item);
    }
    this.updateOpenCode && this.updateOpenCode(code);
  }

  toggleCodeActive(e) {
    let $cur = $(e.currentTarget);
    $cur.toggleClass('btn-boll-active');
    this.getCount();
  }

  changePlayNav(e) {
    let $cur = $(e.currentTarget);
    $cur.addClass('active').siblings().removeClass('active');
    this.curPlay = $cur.attr('desc').toLocaleLowerCase();
    $('#zx_sm span').html(this.playList.get(this.curPlay).tip);
    $('.boll-list .btn-boll').removeClass('btn-boll-active');
    this.getCount();
  }

  assistHandle(e) {
    e.preventDefault();
    let $cur = $(e.currentTarget);
    let index = $cur.index();
    let $btns = $('.boll-list .btn-boll')
    $btns.removeClass('btn-boll-active');

    switch (index) {
      case 0:
        $btns.addClass('btn-boll-active');
        break;

      case 1:
        $btns.each((i, t) => {
          if (t.textContent > 5) {
            $(t).addClass('btn-boll-active');
          }
        });
        break;

      case 2:
        $btns.each((i, t) => {
          if (t.textContent < 6) {
            $(t).addClass('btn-boll-active');
          }
        });
        break;

      case 3:
        $btns.each((i, t) => {
          if (t.textContent % 2 === 1) {
            $(t).addClass('btn-boll-active');
          }
        });
        break;

      case 4:
        $btns.each((i, t) => {
          if (t.textContent % 2 === 0) {
            $(t).addClass('btn-boll-active');
          }
        });
        break;

      default:
        break;
    }
    this.getCount();
  }

  getName() {
    return this.name;
  }

  addCode() {
    let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
    let active = $active ? $active.length : 0;
    let count = this.computeCount(active, this.curPlay);

    if (count) {
      this.addCodeItem($active.join(' '), this.curPlay,
        this.playList.get(this.curPlay).name, count);
    }
  }

  addCodeItem(code, type, typename, count) {
    const tpl = `
      <li codes="${type}|${code}" bonus="${count * 2}" count="${count}">
        <div class="code">
          <b>${typename}${count > 1 ? '复式' : '单式'}</b>
          <b class="em">${code}</b>
          [${count}注, <em class="code-list-money">${count * 2}</em>元]
        </div>
      </li>
    `;

    $(this.cartEl).append(tpl);
    this.getTotal();
  }

  getCount() {
    let active = $('.boll-list .btn-boll-active').length;
    let count = this.computeCount(active, this.curPlay);
    let range = this.computeBonus(active, this.curPlay);

    let money = count * 2;
    let win1 = range[0] - money;
    let win2 = range[1] - money;
    let tpl;
    let c1 = (win1 < 0 && win2 < 0) ? Math.abs(win1) : win1;
    let c2 = (win1 < 0 && win2 < 0) ? Math.abs(win2) : win2;

    if (count === 0) {
      tpl = `
        您选了 <b class="read">${count}</b> 注，共 <b class="red">${count * 2}</b> 元
      `;
    } else if (range[0] === range[1]) {
      tpl = `
        您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元  <em>若中奖，奖金：
			  <strong class="red">${range[0]}</strong> 元，
			  您将${win1 >= 0 ? '盈利' : '亏损'}
			  <strong class="${win1 >= 0 ? 'red' : 'green'}">${Math.abs(win1)}</strong> 元</em>
      `;
    } else {
      tpl = `
        您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元  <em>若中奖，奖金：
			  <strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			  您将盈利<strong class="${win1 >= 0 ? 'red' : 'green'}">${c1} </strong>
			  至 <strong class="${win2 >= 0 ? 'red' : 'green'}"> ${c2} </strong>元</em>
      `;
    }
    $('.sel_info').html(tpl);
  }

  getTotal() {
    let count = 0;
    $('.codelist li').each((index, item) => {
      count += parseInt($(item).attr('count'));
    });
    $('#count').text(count);
    $('#money').text(count * 2);
  }

  getRandom(num) {
    let arr = [], index;
    let number = Array.from(this.number);
    while (num--) {
      index = parseInt(Math.random() * number.length);
      arr.push(number[index]);
      number.splice(index, 1);
    }
    return arr.join(' ');
  }

  getRandomCode(e) {
    e.preventDefault();
    let num = e.currentTarget.getAttribute('count');
    let play = this.curPlay.match(/\d+/g)[0];

    if (num === '0') {
      $(this.cartEl).html('');
    } else {
      for (let i = 0; i < num; i++) {
        this.addCodeItem(this.getRandom(play), this.curPlay,
          this.playList.get(this.curPlay).name, 1);
      }
    }
  }

}

export default Base;
