// var light = "orange";

// if(light == "green")
// {
//     console.log("Drive");
// }
// else if(light =="orange")
// {
//     console.log("Get Ready");
// }
// else if(light == "red")
// {
//     console.log("Dont't Drive");
// }
// else{
//     console.log("The car is not green, orange, or red");
// }


// var age ="60" ;

// if(age >= 65)
// {
//     console.log("You get your income from your pention");
// }
// else if(age<=65 && age>=18)
// {
//     console.log("Each month you get a salary");
// }
// else if(age<18)
// {
//     console.log("You get allownce");
// }
// else{
//     console.log("The value of the age variable not numarical");
// }


// var day = "Sunday";

// switch(day)
// {
//     case 'Sundayy':
//         console.log('do something');
//         break;
//     case 'Monday':
//         console.log("Monday");
//         break;
//     default:
//         console.log("No such day");

// }

// var i= 0;

// for(i=1;i<10;i++)
// {
//     if(i==1)
//     {
//         console.log("gold medal");
//     }
//     else if(i==2)
//     {
//         console.log("silver medal");

//     }
//     else if(i==3)
//     {
//         console.log("Bronze medal");
//     }
//     else{
//         console.log(i);
//     }
// }



// function listArrayItems(arr)
// {
//     for(var i = 0;i<arr.length;i++)
//     {
//         console.log(i+1, arr[i]);
//     }
// }

// var colors=["yellow","red","green"]
// listArrayItems(colors);


// function letterFinder(word,match)
// {
//     for(i=0;i<word.length;i++)
//     {
//         if(word[i]==match)
//         {
//             console.log('Found the', match,'at',i);
//         }
//         else{
//             console.log('No match Found','at',i);

//         }

//     }
// }
// letterFinder("test","t");



// var house2={};

// house2["room"]=4;
// house2['color']="pink";
// house2["priceUSD"]= 12345;

// console.log(house2);


// var car ={};

// car.color = "red";
// car["color"]="green";
// car["speed"]= 200;
// //car.speed = 100;
// console.log(car);


// car["number of door"]=4;

// console.log(car);

// car["2022"]=1001;

// console.log(car);


// var arrOfKeys = ['speed','altitude','color'];

// var drone = {
//     speed : 100,
//     altitude : 200,
//     color : "red"
// }
// console.log(arrOfKeys);
// console.log(drone);
// console.log(arrOfKeys.length);
// for(var i = 0;i<arrOfKeys.length;i++)
// {
//     console.log(drone[arrOfKeys[i]]);
// }


// var greet = "hello, ";
// var place = "World";

// console.log(greet.length);
// console.log(greet.charAt(0));
// console.log("Fazlul".concat(" Haque").concat(" Jony"));

// console.log("ho-ho-ho".indexOf('h'));

// console.log("ho-ho-ho".indexOf('o'));


// console.log("ho-ho-ho".indexOf('-'));


// console.log("ho-ho-ho".split("-"));

// "ho-ho-ho".split("-");

// console.log(greet.toUpperCase());

// greet.toUpperCase();

//console.log(username);

//hello.pop();

//console.log((10).toString(100));

// function addTwoNums(a,b)
// {
//     try{
//         if(typeof(a) !='number')
//         {

//             console.log(a);
//             throw new ReferenceError("first argument is not a number");

//             console.log(a+b);
//         }
//         else if(typeof(b)!='number'){
           
//             console.log(b);
//             throw new  ReferenceError("second argument is not a number");

//         }
//         else
//         {
//             console.log(a,"a,b",b);
//             console.log(a+b);
//         }
       
//     }
//     catch(err)
//     {
//         console.log("Error",err);
//        // ReferenceError(err);
//     }
    

// }
// addTwoNums(5,"5");
// console.log("Code still running....");


// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match) == 'string' && match.length == 1;
//     if(condition1 && condition2) {
//         for(i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         console.log("Please pass correct arguments to the function")
//     }
// }
// letterFinder([],[])
// letterFinder("cat","c")


// const car ={
//     engine : true,
//     steering :true,
//     speed: "slow"
// }

// const sportsCar = Object.create(car);
// sportsCar.speed = "fast";

// // console.log("===for in loop==>>");

// // for(props in sportsCar)
// // {
// //     console.log(sportsCar[props]);
// // }

// // console.log("===for of loop==>>");

// // for(props of Object.keys(sportsCar))
// // {
// //     console.log(props+":" +sportsCar[props]);
// // }


// const bicycle = {
//     bell: function() {
//         return "Ring, Watch out please!"
//     }
// }

//  const door = {
//      bell: function() {
//         return "Ring, Watch out please!"
//     }
//  }


// console.log(bicycle.bell());
// //door.bell();


//  let great = "greet";
//  let place2 = "Dhaka";

//  console.log('${great}  ${} !')


// let greet = "Hello";
// let place = "World";
// console.log(`${greet} ${place} !`)


//const nums = [0,20,10, 50,40,30];

// nums.filter(function(nums)
// {
//     if(nums>20)
//     {
//      console.log(nums);
//     }
// })

// let nums = [0,20,10, 50,40,30];

// nums.map(
//     function(nums)
//     {
//         console.log(nums);
//     }

  
//   //   console.log(nums);
// );

//******objects**** */

// const result = [];

// const drone = {
//     speed: 100,
//     color : 'yollow'
// }

// const droneKays = Object.keys(drone);
// droneKays.forEach(function(key)
// {
//     result.push(key,drone[key])
// }
// );
// console.log(result);


//******Maps**** */

// let bestBoxers = new Map();

// bestBoxers.set(1, "Fariha");
// bestBoxers.set(2, "Era");
// bestBoxers.set(3,"arifin");

// console.log(bestBoxers);
// console.log(bestBoxers.get(2))


//******Set**** */


// const sets = ['apple','mango','plam','mango','plam'];
// const  setOfFruit = new Set(sets);
// console.log(setOfFruit);


// let answer = prompt('What is your name?');
// if(typeof(answer)==='string')
// {
//     var h1 = document.createElement('h1');

//     h1.innerHTML = answer;
//     document.body.innerHTML='';
//     document.body.appendChild(h1);

// }

// var h1 = document.createElement('h1')

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);


// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     console.log(input.value)
// })


var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})