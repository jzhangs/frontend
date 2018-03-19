var express = require('express');
var mockjs = require('mockjs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function makeIssue() {
  var date = new Date();
  var firstIssueDate = new Date();
  firstIssueDate.setHours(9);
  firstIssueDate.setMinutes(10);
  firstIssueDate.setSeconds(0);

  var endIssueDate = new Date(firstIssueDate.getTime() + 77 * 10 * 60 * 1000);
  var currIssue, endTime, state;
  
  if (date.getTime() > firstIssueDate.getTime()
      && date.getTime() < endIssueDate.getTime()) {
    var currIssueDate = new Date();
    currIssueDate.setHours(9);
    currIssueDate.setMinutes(0);
    currIssueDate.setSeconds(0);
    var minusTime = date.getTime() - currIssueDate.getTime();
    var h = Math.ceil(minusTime/1000/60/10);
    var endDate = new Date(currIssueDate.getTime() + 1000*60*10*h);
    endTime = endDate.getTime();
    currIssue = [ endDate.getFullYear(),
                ('0' + (endDate.getMonth() + 1)).slice(-2),
                ('0' + endDate.getDate()).slice(-2),
                ('0' + h).slice(-2)].join('');    
  } else {
    firstIssueDate.setDate(firstIssueDate.getDate() + 1);
    endTime = firstIssueDate.getTime();
    currIssue = [ firstIssueDate.getFullYear(),
                ('0' + (firstIssueDate.getMonth() + 1)).slice(-2),
                ('0' + firstIssueDate.getDate()).slice(-2),
                '01'].join('');
  }

  var curDate = new Date();
  if (endTime - currIssueDate.getTime() > 1000 * 60 * 2) {
    state = '正在销售';
  } else {
    state = '开奖中';
  }
  return {
    issue: currIssue,
    state: state,
    endTime: endTime
  }
}

router.get('/get/omit', function(req, res, next) {
  res.json(mockjs.mock({
    'data|11': [/[1-9]{1,3}|0/],
    'issue': /[1-9]{8}/
  }));
});

router.get('/get/opencode', function(req, res, next) {
  var issue = makeIssue().issue;
  var data = mockjs.mock({
    'data': [/[1-3]/, /[4-5]/, /[6-7]/, /[8-9]/, /1[0-1]/ ]
  }).data;
  res.json({
    issue: issue,
    data: data
  })
});

router.get('/get/state', function(req, res, next) {
  var state = makeIssue();
  console.info('server', state);
  res.json(state);
});

module.exports = router;
