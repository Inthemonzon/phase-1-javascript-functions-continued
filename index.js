// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

function mondayWork(mon = "go to the office") {
    return `This Monday, I will ${mon}.`
}
function wrapAdjective(flair = "*") {
    return function innerFunction(inner = "special") {
        return `You are ${flair + inner + flair}!`
    }
}