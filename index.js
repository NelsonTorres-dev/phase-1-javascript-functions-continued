// code your solution here
function saturdayFun(Saturday='roller-skate'){
    return `This Saturday, I want to ${Saturday}!`
}

//here we overide the main parameter or activity by using a default parameter as so:
const mondayWork = function(Monday='go to the office'){
    return `This Monday, I will ${Monday}.`
}

function wrapAdjective(highlight="*"){
        return function(singular = "special"){
        return `You are ${highlight}${singular}${highlight}!`
    };

}
wrapAdjective("*")('a hard worker','!')