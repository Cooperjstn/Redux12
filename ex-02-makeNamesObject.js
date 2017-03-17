//ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

// var makeNamesObject=function("George Washington","John Adams", "Kanye West"){
//   var obj ={
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West",
//     Rose: "Parks",
//     Charlotte:"Webb"
//   }
//   return obj;
// }
var makeNamesObject = function (strOne, strTwo, strThree) {
        var argOne = strOne.split(' ');
        var argTwo = strTwo.split(' ');
        var argThree = strThree.split(' ');

        var newName = {
            [argOne[0]]: argOne[1],
            [argTwo[0]]: argTwo[1],
            [argThree[0]]: argThree[1]
        }

        return newName;
    }
    //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj.Abe === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
    //-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
