console.log('wellcome to intense js');
console.log('lets do this');
var a = 20;
var b = 300;
var c = 100;
a += 12;
b += 120;
c += 11;
//console.log(a);
//console.log(b);
//console.log(c);


// coumpound assignment with augument substraction

a -= 13;
b -=10;
c -=50;

//console.log(a, b, c);
// we can do for  multiplication and divisionPropTypes.


// dealing with excape character
var mystr = "this is a \" doubble quoted string \" and here ";
//console.log(mystr);


// we can also use a double quote inside a single quote
var site = 'this is the website "https:website.com" and "a blank"';
//console.log(site);

//// lest win linkedin cert























// dealing with string
var newString = "i will come first " + "and i will come second";
//console.log(newString);
newString += 'and we will sum the total';
//console.log(newString);
var ourName = "codeSnippet";
var love = "we love" + ourName + " for life "
//console.log(love);

// finding the length of a string 
var firstNameLength = 0;
var firstName = 'bensonbena';
firstNameLength = firstName.length;
//console.log(firstNameLength);

// bracket Notation to find first character in a string 
var firstLetterOfFirstName ="";
firstLetterOfFirstName = firstName[0];
//console.log(firstLetterOfFirstName); // paused 33:19
// you can ue bracket notation to find any aspect of the word just us the preference 012345 and more 
// to find the last letter in firstname 
var LastLetterinFirstName = firstName[firstName.length - 1];
//var LastLetterinFirstName = firstName[firstName.length - 2];
//console.log(LastLetterinFirstName);

// word  blank
function wordBlank(myNoun , myAdjective , myVerb, myAdverb){
    var result="";

    result += "the " + myAdjective + " " +myNoun + " " + myVerb + " to the store " + myAdverb

    return result;
}
//console.log(wordBlank("dog","big","ran", "quickly"));
//console.log(wordBlank("bike","slow","flew", "slowly"));

//store multiple files with array

var OurArray = ['john', 23];
//console.log(OurArray);
// nexted arrays 
var NextedArray = [['newmann', 44], ['frankline',23]]
//console.log(NextedArray);
// acessing array with indexes
//console.log(OurArray[0]);
// modify array data with index
OurArray[1] = 25;
//console.log(OurArray);
// accessing multi dimensional array with indexes
var NewArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
//console.log(NewArray);
var MyData = NewArray[2][1];
//console.log(MyData);
// manipulate array with push, push add to the end of an array
NextedArray.push(['benna',12],['bella',13]);
//console.log(NextedArray);

//manipulting array using pop if i.e we can remove an item using pop, the pop removes the last array 
var RemoveFromMyArray= NextedArray.pop();
//console.log(NextedArray);
// manipulating array with shift, the shift function remove the first array 
var Names = ['ben','dollar','orebola','melaiye']
Names.shift();
//console.log(Names);
// using unshift , unshift add to the beginning of an array 
Names.unshift(['tunde']);
//console.log(Names);

// lets talk about shopping list 
var MyList = [['cereals',3],['banana',5],['egg',6],['garri',12]]
//console.log(MyList);

// write reusable code with function 
function OurReusableCode(){
    //console.log('hello world'.toUpperCase())
}
OurReusableCode();
OurReusableCode();
OurReusableCode();
// passing function with arguments 
function SubtractAArg(a,b){
   // console.log(a - b);

}
SubtractAArg(15,7);
// Global Scope and function, scope is the visibility of variables, global can be seen everywhere in your javascript

/*var MyGlobal = 55;
function func1(){
    oopsGlobal = 5;
}
function func2(){
    var Output ="";
    if(typeof MyGlobal != undefined){
        Output += " MyGlobal: " + MyGlobal;

    }
    if(typeof oopsGlobal != undefined){
        Output += " oopsGlobal: " + oopsGlobal;

    }
    console.log(Output);


}
func1();
func2(); */

// local scope and function 
function localscope(){
    var Num = 30;
   // console.log(Num);
}
localscope();
//console.log(Num);// this will give you error(undefined) because you cant access a local scope outside the function 

// Global vs local scope in Function 
var Outerwears = 'T-shirt'

function Wears(){
    
   var Outerwears = 'sweater'
    return Outerwears;
    
}
//console.log(Wears());
// Return a value from a function with return
function Minusseven(Num){
    return Num- 7;
}
//console.log(Minusseven(10));
// understanding undefined value from a function, if you don't include the return value, the output will be undefined
// using the return value
var processing= 0;
function processArg(sum){
     return (sum += 5);
}
processing= processArg(5);
//console.log(processing);

// Stand in Line. Using NextinLine function

function NextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

//console.log('before: ' + JSON.stringify(testArr));
//console.log(NextInLine(testArr, 6));
//console.log('after: ' + JSON.stringify(testArr)); 
// lets talk about Boolean Values 
function Boolean(){
    return false; // we dont use quotation in booleans 
}
//console.log(Boolean());
// use conditional logic with if statement 
function OurTrueorFalse(IstItTrue){
    if(IstItTrue){
        return " yes its true";
    }
    return "no, its false";
}

//console.log(OurTrueorFalse(false));
//console.log(OurTrueorFalse(true));

// comparison with equality operator
function testEqual(val){
    if(val == 12){
        return "it is equal";
    }
    return "it is not equal ";
}
//console.log(testEqual(12));
//console.log();

// comparison with the strict equality operator
function testEqual(val){
    if(val === 12){
        return "it is equal";
    }
    return "it is not equal ";
}
//console.log(testEqual('12'));

// practice comparing different values
function testEqual(a,b){
    if(a === b){
        return "it is equal";
    }
    return "it is not equal ";
}
//console.log(testEqual(12, '12'));

// operation with inequality operator
function testNotEqualTo(val){
    if(val != 12){
        return "it is not  equal";
    }
    return "it equal ";
}
//console.log(testNotEqualTo(12));
// co,parison with strict inequality
function testStrictNotEqualTo(val){
    if(val !==10){
        return "Not equal";
    }
    return "equal ";
}
//console.log(testStrictNotEqualTo(10));
//Comparison with Logical and operator 
function TestGreaterThan(val){
    if(val > 100){
        return "over 100";
    }
    if(val > 10){
        return "over 10";
    }
    return "10 0r under";
}
//console.log(TestGreaterThan(10));
// comparison with Greater Than or Equal to operator 
function lessThan(val){
    if (val >= 20){
        return "20 or over";
    }
    if (val >= 10){
        return "10 or over";
    }
    return "less than 10";
}
//console.log(lessThan(20));
// you can also do this for less(<) than operator just to check wether a number is more or less 

// comparison with logical operator
function logical(val){
    if(val<= 50){
        if(val >=25){
            return "Yes";
        }
    }
    return "No";
}
//console.log(logical(27));
// the above code can be subtituted using the and operator
function logicalB(val){
    if(val <= 50 && val >=25 ){
        return "yes";
    }
    return "No"
}
//console.log(logicalB(55));
// comparison with ;ogical OR operator

function text2(val) {

    if(val < 10 || val > 20){
        return "outside";
    }
    return "inside";
}
//console.log(text2(12));
// the Else statement 
function textElseval(val) {
    var result =" ";
    if(val < 10){
        result = "proceed";
    }
    else{
        result = "terminated";
    }
    return result;
}
//console.log(textElseval(40));

// Else if Statement
function textElseval(val) {
    var result =" ";
    if(val < 30){
        result = "proceed";
    }
    else if (val > 10) {
        result = "terminated";
    }
    else {
        result = "you are underaged "
    }
    return result;
}
//console.log(textElseval(20));

// logical ordering 
function OrderByLogic(val){
    if(val < 5){
        return "less than 5";
    } else if (val < 10){
        return "less than 10";
    }else{
        return "grater than or equal to 10"
    }
}
//console.log(OrderByLogic(90));

// chaining if statements
function TestcreamPrice(ice){
    if (ice < 5){
        return "strawberry"
    }
    else if (ice < 10){
        return "orange"
    }
    else if (ice < 15){
        return "banana"
    }
    else if (ice < 20){
        return "blueberries"
    }
    else {
        return "cold stone"
    }
}
//console.log(TestcreamPrice(2))
// .... lets look at Golf Code

var names = ["hole-in-one", "eagle", "birdle","par","borgey","double-borgey","Go-home"]
function golfscores(par, strokes){
    if (strokes == 1){
        return names[0]

    } else if (strokes <= par - 2){
        return names[1]
    }
    else if (strokes == par - 1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par + 1){
        return names[4]
    }
    else if (strokes == par +2){
        return names[5]
    }else if (strokes >= par +3){
        return names[6]
    }
}
//console.log(golfscores(5,7));


// Switch Statements 
function switchstatement(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
         case 2:
            answer = "beta";
            break;    
        case 3:
            answer = "gamma";
            break; 
         case 4:
            answer = "delta";
            break;      
    }
    return answer;
}
//console.log(switchstatement(4));
// default option in switch statement

function defaultswitchstatement(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
         case "b":
            answer = "banana";
            break;    
        case "c":
            answer = "carrot";
            break; 
         case "d":
            answer = "dates";
            break;
        default:
            answer = "stuffs"
            break;      
    }
    return answer;
}
//onsole.log(defaultswitchstatement("a"));

// multiple identical options in switch statement (by omiting the break statement)

function sequentialSizes(val){
    var answer= "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}
//console.log(sequentialSizes(9));
// replacing If else chains with switch , easily use the above code 

// returning boolean value from function 
function isLess(a, b){
    return a < b;
}
//console.log(isLess(100,15))

// returning early pattern from function

function abText(a,b){
    if(a<0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow (Math.sqrt(a) +  Math.sqrt(b), 2));
}
//console.log(abText(1, 1));

// LETS TALK ABOUT COUNTING CARDS 
var count = 0;
function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
        
    }


    var holdbet = "Hold";
    if(count > 0){
        holdbet ="bet";
    }
    return count + " " + holdbet;

}



cc(2); cc(7); cc(3); cc("K"); cc("Q");
//console.log(cc(2));

// Build Javascript Object: objects are similar to array just that instead of using indexes you make use of properties 

var OurDog= {
    "name": "puppy",
    "legs": 4,
    "tail": 1,
    "friends":["everybody"]
}
//console.log(OurDog);
// accessing our object using Dot Notation

var testObject= {
    "hat":"bullcap",
    "shirt": "jersey",
    "shoes": "cleats",

}
var HatValue = testObject.hat;
var shirtValue = testObject.shirt;
//console.log(HatValue, shirtValue);

// accessing object properties with Bracket Notation
var testObjet= {
    "breakfast":"sandwitch",
    "lunch": "potato",
    "dinner": "chicken",

}
var breakfastValue = testObjet["breakfast"];
var dinnerValue = testObjet["dinner"];
//console.log(breakfastValue);
//console.log(dinnerValue);

// accessing Object properties with variables 

var testObjet= {
    12:"Bill",
    14: "Bezos",
    16: "Musk",

}

var richest1 =12;
var richest2= testObjet[richest1];

//console.log(richest2);
// updating object properties, we can use dot notation to update object properties 

OurDog.name ="Happy puppy";
//console.log(OurDog.name); 
// lets Add new property to an Object using Dot Notation or Bracket Notaion 
OurDog.bark ="bow-woo"
//console.log(OurDog);
// Delecting Property from an Object
delete OurDog.tail;
//console.log(OurDog);
// using Objects for Lookup

function phonecticLookup(val){
    var result ="";


    var lookup = {
        "alpha":"Adams",
        "bravo":"ben",
        "charlie":"fedinard",
        "delta":"roy",
        "echo":"raymond",
        "foxtrot":"frank"




    };
    result = lookup[val];
    return result;

}

//console.log(phonecticLookup('charlie'));
// testing Objects for Properties , we can check if a property has a value 

var Obj= {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh",
    city: "Seattle"
}
function checkObj(checkProp){
    if(Obj.hasOwnProperty(checkProp)){
        return Obj[checkProp];
    } else {
        return "Not found or Error "
    }
}
//console.log(checkObj("gift"));
//console.log(checkObj("hello"));
// another example is this 


function checkObj(obj, checkProp) {
    // Only change code below this line
    var isCheckPropPresent=obj.hasOwnProperty(checkProp);
    var obj= {
      gift: "pony", 
      pet: "kitten", 
      bed: "sleigh",
      city: "Seattle"
  }
  if(isCheckPropPresent){
      return obj[checkProp];
    }
  
    return "Not Found";
    // Only change code above this line
  }




// Manipulating complex Objects 
// lets create an array 
var MyMusic= [
    {
        "artist Name": "wizkid",
        "music type": "afro-pop",
        "country":"Nigeria",
        "streams":"youtube",
        "formats":[
            "cd",
            "mp4-player",
            "podcast"
        ],
        "award":" yes"
    },
    {
        "artist Name": "Davido",
        "music type": "afro-pop",
        "country":"Nigeria",
        "streams":"TicTok",
        "formats":[
            "cd",
            "mp4-player",
            "podcast"
        ],
        "award":" No"
    },
]
//console.log(MyMusic);
// Accessing Nexted Objects  stop 20:01:34 // note when there is space in your string we dont use dot notation to access data again rather we use Bracket Notaion 
var Mystorage = {
    "cars":{
        "inside":{
            "glove box":"maps",
            "passengers seats":"crumps"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var GloveBoxContents = Mystorage.cars.inside["glove box"];
//console.log(GloveBoxContents);
//acessing nested arrays 
var Myplants =[
    {
        type:"flowers",
        list:[
            "ropes",
            "tulips",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];
var SecondTree = Myplants[1].list[1];
//console.log(SecondTree);

// record Collection 
var collection ={
    "1":{
        "albulm":"slipery when wet",
        "artist":"Bon Jovit",
        "tracks":[
            "let it Rocks ",
            "you give love a bad name "
        ]
    },
    "2":{
        "albulm":"1999",
        "artist":"Brad",
        "tracks":[
            "hold me tight  ",
            "no regret"
        ]
    },
    "3":{
        "albulm":"bravo",
        "artist":"john  bellion",
        "tracks":[
            "all time low ",
            "high school "
        ]
    },
    "4":{
        "albulm":"essense",
        "artist":"Tems",
        "tracks":[
            "weird ",
            "words upside down"
        ]
    },
    "5":{
        "albulm":"street002",
        "artist":"olamide",
        "tracks":[
            "Rock",
            "Yahoo boy No Laptop"
        ]
    },
    "6":{
        "albulm":"wet",
        "artist":"Jovit",
        "tracks":[
            
        ]
    },
    "7":{
        "albulm":"salt"
    }
        
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop,  value) {
    if(value ===""){
        delete collection[id][props];
    } else if(value==="tracks"){
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }



    return collection;
}
updateRecords(6,"tracks","beyond");
//console.log(updateRecords(7,"artist","ABBA"));

// iterate with While loop in javascript
var MyArray = [];
var i = 0;
while(i < 5){
    MyArray.push(i);
    i++;
}
//console.log(MyArray);
// iterate with for loop in javascript
var OurArray =[]
for (var i = 0; i<5; i ++){
    OurArray.push(i+1)
}
//console.log(OurArray);
// iterate odd number with for loop
var OurODD =[]
for (var i = 0; i<10; i +=2){
    OurODD.push(i+1)
}
//console.log(OurODD);
// create a count down
var countd =[]
for (var i = 10; i>0;  i --){
    countd.push(i-1)
}
//console.log(countd);
// iterating through an array with a for-loop
var newArry= [1,2,3,4,5,6];
var total = 0;
for(var i = 0; i < newArry.length; i++){
    total += newArry[i];
}
//console.log(newArry);


/// github of yadavanuj1996/freecodecamp-solution

//////////// 
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      var countdownArray = countdown(n - 1);
      console.log(countdownArray)
      countdownArray.unshift(n);
      return countdownArray;
  }
  }
  /////////
  // nesting For loop 
  function multiplyAllArr(arr){
      var product=1;
      for  (var i=0; i<arr.length; i++){
          for (var j=0; j<arr[i].length; j++){
              product*=arr[i][j];
          }

      }
      return product;
  }
  var product= multiplyAllArr([[1,2],[3,4],[5,6,7]]);
  //console.log(product);


  // iterating with do while loop
  var mydo=[];
  var x= 5;// you can change this to 1,2,3,4,5,6,7,8,9 or 10
  do {
      mydo.push(x);
      x++;
  } while (x<10);
  //console.log(x,mydo);

  // profile lookup 
  var Contacts = [
      {
          "firstname":"paul fidelis",
          "address":"Akure",
          "number":09072210193,
          "likes":["bread","grape","sardine"]
      },
      {
        "firstname":"ben white",
        "address":"abuja",
        "number":08074210193,
        "likes":["rice","apple","barmer"]
    },{
        "firstname":"vim Gate",
        "address":"Lagos",
        "number":08072220153,
        "likes":["bread","banana","sardine"]
    },{
        "firstname":"selan James",
        "address":"uyo",
        "number":0908987544,
        "likes":["bread","jollof","sardine"]
    }
  ];
 

  function check(name, prop){
      for(var i = 0; i<Contacts.length;i++){
          if(Contacts[i].firstname===name){
              return Contacts[i][prop] || "no such property";
          }
      }
      return "no such contact"
  }



  var data= check("paul fidelis","address");
  //console.log(data);
  // generating random fractions 
  function randomFraction() {

      return Math.random();
  }
  //console.log(randomFraction())
// generating Random Whole Number 

function RandomWholeNumber(){
    return Math.floor(Math.random() * 100);
}
//console.log(RandomWholeNumber()); // this will give you random numbers when you reload the page 
// generate a random whole number within a range 
function OurrandomRange(ourMin,ourMax){
    return Math.floor(Math.random()* (ourMin - ourMax + 1) + ourMin);

}
//console.log(OurrandomRange(15,30));

// use the parseInt function 
function ConvertToInteger(str){
    return parseInt(str);
}
//console.log(ConvertToInteger("20"));// note this will covert to number but, if its words or letters it will return Non
// use parseInt function with Radix note Radix specifies the base eg base 3, base3 and more
function Radix(str){
    return parseInt(str, 2);

}
//console.log(Radix("1010"));
// use the conditional ternary operator
// we use this format : condition ? statement-if-true: statement-if-false
function truee(a,b){
    return a === b ? true : false ;
}
//console.log(truee(2,2));// this is the simplest way of writing ternary operator.PropTypes.any,
// use multiple(condition ) ternary operation 
function checkNum(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";

}
//console.log(checkNum(0));
// difference between Var and Let
// let does not let you declare a variable twice 

// mutate an Array Declared with const
// preventing Data Mutation 
function freeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
//const PI = freeObj();
//console.log(PI);

// use arrow function to write concise anonymous function 
var arrow = function(){
    return new Date();
};
//console.log(arrow);// this is called an anonymous function 
// lets consider a better way of doing this right now 
const rrow = () => new Date();
//console.log(rrow);
// lets write arrow function with parameters, just like normal function you can pass arguments to arrow function 
// consider this normal function 
var MyConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
//console.log(MyConcat([1,2],[3,4,5]));


// so lets convert the above code  to arrow function 
const Concat = (arr1, arr2) => arr1.concat(arr2);
//console.log(Concat([1,2],[3,4,5]));

// now let us write higher order arrow function , using the filter and map function  
const realNumberArray = [4, 5.6, -9.2, 3.42, 42, 5, 6.34, -2];
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
};
const squareIntegers= squareList(realNumberArray);
//console.log(squareIntegers);

// lets talk more on Higher order Arrow Functions 
// we can use default parameters, which kicks in when nothing is returned 


const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();
//console.log(increment(5,2));
//console.log(increment(5));

// use Rest Operator with Function Parameters , this helps to create a function that takes a variable, we make use of three dots.... 
// for example below 

const sum  = (function(){
    return function sum(...args ) {
        
        return args.reduce((a,b) => a + b, 0);

    };

})();

//console.log(sum(1,2,3,4));

// use the spread operator to evaluate Arrays in-place , the spread operator looks like the dot operator , three dots 
// it expands already existed array 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2;
(function(){
    
    //arr2 = arr1; // this will output potato in index 0
    arr2= [...arr1];// this will make arr2 equals arr1
    arr1[0] ='potato'
})();

//console.log(arr2);

// use destructuring assignment to assign variables from object 
var voxel = {x:3.6, y: 7.4, z: 6.54};
var x = voxel.x; // x= 3.6
var y = voxel.y; // x= 7.4
var z = voxel.z; // x= 6.54
// the above shows the old way of assigning variables 

const {x:q,y:r,z:s}= voxel; // this a another way to assign the variables 
//console.log(q)

// more example on destructuring to obtain average temperature for tommorow 
const AVG_TEMPERATURE ={
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";

    const{tomorrow : temp0fTomorrow } = avgTemperatures;

    return temp0fTomorrow;

}
//console.log(getTempOfTmrw(AVG_TEMPERATURE));


// destructuring Assignment with Nested Objects
 const LOCAL_FORECAST = {
     today: {min: 72, max: 83},
     tomorrow:{ min:73.3, max: 84.6}
 };

 function getMaxOfTmrw(forecast) {
     "use strict";

     const {tomorrow :{max: maxOfTomorrow}} = forecast;

     return maxOfTomorrow;
 }

 //console.log(getMaxOfTmrw(LOCAL_FORECAST));


// use destructuring to assign variables from Array 

const [l,m, , u]= [1,2,3,4,5,6,7];
//console.log(l,m,u);

let p = 8, t=6; // we can also use destructuring to switch  cases 
(() => {
    "use srict";
    [p, t] = [t, p]
})();
//console.log(p);
//console.log(t);


// use Destructuring assignment with the Rest Operator 

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const[, ,  ...arrr] = list;
    return arrr;
}
const arrr = removeFirstTwo(source);
//console.log(arrr);
//console.log(source);


// use Destructuring Assignment to Pass an Object as a Function's Parameters 
const stats={
    max: 56.33,
    standard_deviation:4.33,
    median: 34.33,
    mode:3.4,
    min: -0.74,
    average: 35.5
};
const half = (function(){
    return function half({max, min }){
        return (max + min)/ 2.0;

    };
})();
//console.log(stats);
//console.log("the half is :" + " " , half(stats));


// create Strings using Temperate Literals 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

//template Literal with multi-line and string interpolation 
const greeting =  `Hello, my name is ${person.name}! i am ${person.age} years old.`;
//console.log(greeting);

//write Concise Object Literal Declaration Using Simple Field 
const createPerson = (name, age, gender) => ({ name, age, gender});
//console.log(createPerson("Zodiac Hasbro ", 56, "male"));


// write Concise Declarative Functions 

const bicycle = {
    gear: z,
    setGear(newGear){
        "use strict";
        this.gear = newGear;


    }
};
bicycle.setGear(3);
//console.log(bicycle.gear);


// Use class Syntax to Define a Constructor Function 

class SpaceShuttle {
    constructor (targetPlanet){
        this.targetPlanet = targetPlanet;

    }
}
var zeus = new SpaceShuttle('Jupiter');

//console.log(zeus.targetPlanet)

// Use getters and setters to control access to an object
function makeClass(){
class  Book {
    constructor(author){
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author= updatedAuthor;

    }
}
    return Book;
}
const Book = makeClass();
const prints = new Book("Ben");
let author = Book.writer;
prints.writer = "paul";
author = prints.writer;
//console.log(author);

// Understand the Difference Between import and required 

/**export const capitalizeString = str => str.toUpperCase()

import {capitalizeString} from "./string_function"
const cap = capitalizeString("hello!");
console.log(cap); **/

// Use export to reuse Block 
