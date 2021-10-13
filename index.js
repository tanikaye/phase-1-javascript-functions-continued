// Your code here
var saturdayFun = function (input) {
  if (input !== undefined) {
    return `This Saturday, I want to ${input}!`
  } else {
    return "This Saturday, I want to roller-skate!"
  }
}

var mondayWork = function (input) {
  if (input !== undefined) {
    return `This Monday, I will ${input}.`
  } else {
    return "This Monday, I will go to the office."
  }
}

function wrapAdjective (mainInput = '*') {
  return function (input = 'special') {
return `You are ${mainInput}${input}${mainInput}!`;
  }
}