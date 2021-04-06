const saturdayFun = function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function mondayWork(todo = "go to the office") {
    return `This Monday, I will ${todo}.`
}

// LAB:

// Implement a function called wrapAdjective.
// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

// describe("defines wrapAdjective function according to the specification", function() {
//     it("function exists", function() {
//       expect(wrapAdjective).to.exist
//     })
    //I don't understand below specs. '*' and '||' 
//     it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective()
//       let emphatic = result("a hard worker")
//       expect(emphatic).to.equal("You are *a hard worker*!")
//     });
          
//   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective("||")
//     let emphatic = result("a dedicated programmer")
//     expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//   });

const wrapAdjective = function wrapAdjective() {

    return function inner(adjective = "special") {
        if (adjective = "*") {
        return `You are *${adjective}*!` };
        if (adjective = "||") {
        return `You are ||${adjective}||!`};
    return inner
    }

}
    



const Calculator = function(number, number1)
    {add(number + number1),
    subtract(number - number1),
    multiply(number * number1),
    devide (number / number1)}
    

// const actionApplyer = 
//     function actionApplyer(integer, arrayOfTransforms[]) {
//         let integer = number
//         let  arrayOfTransforms = [
//             function(integer){ return integer * 2 },
//             function(integer){ return integer + 1000},
//             function(integer){ return integer % 7 }];
        
//         if (arrayOfTransforms.length === 0)
//             return (0)
//         }
        
//             return number
          
//     }

