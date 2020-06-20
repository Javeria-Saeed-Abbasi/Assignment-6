// ====================================== CHAPTER #  21 to 25 ==============================================
// ************************Task 1
// var fName = prompt('Enter your First Name');
// var lName = prompt('Enter your Last Name');
// var fullName = fName+ " " +lName;
// document.write("Welcome "+fullName + " in the world of JavaScript!");

// ************************Task 2
// var model = prompt('Enter your favoutie mobile phone model..');
// var str = model.length;
// document.write('My favourite phone is : ' + model + "<br>" + "Length of string is : "+ str );

// ************************Task 3
// // var country = prompt('Enter your nationality..');
// var country = "Pakistani";
// var str = country.indexOf('n');
// document.write('String : ' + country + "<br>" + "Index of 'n' : "+ str );

// ************************Task 4
// var country = "Hello World!";
// var str = country.lastIndexOf('l');
// document.write('String : ' + country + "<br>" + "Last Index of 'l' : "+ str );

// ************************Task 5
// // var country = prompt('Enter your nationality..');
// var country = "Pakistani";
// var str = country.charAt(3);
// document.write('String : ' + country + "<br>" + "Character at index 3 : "+ str );

// ************************Task 6
// var fName = prompt('Enter your First Name');
// var lName = prompt('Enter your Last Name');
// var fullName = fName.concat(" "+lName) ;
// document.write("Welcome "+fullName + " in the world of JavaScript!");


// ************************Task 7
// var city = "Hyderabad";
// var str = city.replace('Hyder', 'Islam');
// document.write("City: ".bold()+ city + "<br>" + " After Replacement : ".bold()+ str);

// ************************Task 8
// var message = '“Ali and Sami are best friends. They play cricket and football together.”';
// var str = message.replace(/and/g, '&');
// document.write("Message : ".bold()+ message + "<br>" + " After Replacement : ".bold()+ str);

// ************************Task 9
// var numb = "472";
// document.write("Value : ".bold()+ numb + "<br>" + " Type : ".bold()+ typeof(numb) + "<br>");
// var str = Number(numb);
// document.write("Value : ".bold()+ numb + "<br>" + " Type : ".bold()+ typeof(str) + "<br>");

// ************************Task 10
// var word = prompt('Enter the word....');
// var upperCase = word.toUpperCase();
// document.write('User input : '.bold() + word + "<br>" + 'Upper Case : '.bold() + upperCase);

// ************************Task 11
// var word = prompt('Enter the word....');
// var upperCase = word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase();
// document.write('User input : '.bold() + word + "<br>" + 'Upper Case : '.bold() + upperCase);

// ************************Task 12
// var num = 35.36;
// var str = num.toString();
// var convertStr = str.replace(/[^0-9|-]/g, "");
// document.write('Number : '.bold() + num + "<br>" );
// document.write('Result : '.bold() + convertStr + "<br>" );

// ************************Task 13
// var user = prompt('Enter a valid username ...');
// var length =  user.length;
// for (var i = 0; i < length; i++) {   
//     var convert = user.charCodeAt(i);  
//     if (convert == 33 || convert == 44 || convert == 46|| convert == 64){
//         alert('"Please enter a valid username"');
//     }


// ************************Task 14
// var found = prompt('Welcome to ABC Bakery! What do you want to order Sir/Ma'+'am?');
// var  A =["cake","apple pie","cookie","chips","patties"];
// var convert = found.toLowerCase(); 
// var indexOfFirst = A.indexOf(convert);
// if(indexOfFirst !== -1){
//     alert(found + " is available at index " + indexOfFirst  + " in our bakery ");
// }
// else if(indexOfFirst === -1){
//     alert("We are sorry... "+ found + " is not available in our bakery ");   
// }
// ************************Task 15--------tick

// var password = prompt('Enter your password');
// var convert = password.charCodeAt(0);
// if( convert>=48 && convert<=57){
//         alert('Please Enter a valid password. Password should not start with a number');
//     }
//  else if(password.length !== 6){
//         alert('Please Enter a valid password. Password length should be 6');
//     }
//     for (var i = 0; i<=password.length; i++) {
//     var code = password.charCodeAt(i);
//     // if((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))
//     if ((code == 47 && code <= 58) ||  (code >= 64 && code <= 91)  || (code >= 96 && code <= 123))
//      { 
//   alert ('Please Enter a valid password. Password should be alphanumeric');
//     }
// }

// ************************Task 16
// var university = "University of Karachi ";
// var splitted = university.split("");
// for (var i = 0; i < splitted.length; i++) {
//     document.write(university.charAt(i)+"<br>");
// }

// ************************Task 17
// var input = prompt('Enter a city name');
// var lastindex = input.slice(-1);
// document.write(" User Input : "+ input + " <br> "+ "Last Character of input : " + lastindex);

// ************************Task 18
// var text= "The quick brown fox jumps over the lazy dog";
// var convert = text.toLowerCase();
// var word = 'the';
// var count = convert.split(word).length -1;
// document.write("Text : " + text + "<br>" + "There are "+count + " Occurence(s) of word " + word);

// ====================================== CHAPTER #  26-30 ==============================================
// ************************Task 1
// var number = +prompt('Enter a number');
// var value = Math.abs(-number);
// document.write('Number : '+ value +"<br>");
// var round = Math.round(value);
// document.write('Round off value : '+ round+"<br>");
// var floor = Math.floor(value);
// document.write('Floor value : '+ floor +"<br>");
// var ceil =Math.ceil(value);
// document.write('Ceil value : '+ ceil +"<br>");

// ************************Task 2
// var number = +prompt('Enter a number');
// document.write('Number : '+ number +"<br>");
// var round = Math.round(number);
// document.write('Round off value : '+ round+"<br>");
// var floor = Math.floor(number);
// document.write('Floor value : '+ floor +"<br>");
// var ceil =Math.ceil(number);
// document.write('Ceil value : '+ ceil +"<br>");

// ************************Task 3
// var number = +prompt('Enter a number');
// var value = Math.abs(-number);
// document.write('The absolute value of '+ number +' is ' + value +"<br>");

// ************************Task 4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value is  ' + diceRoll+"<br>");
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value is  ' + diceRoll);

// ************************Task 5
// var heads = Math.floor( Math.random() * 2 ) +1;
// // document.write('Random coin value is  ' + heads +"<br>");

// var tails = Math.floor( Math.random() * 2 ) +1;
// // document.write('Random coin value is  ' + tails +"<br>");

// if (heads === 2) {
//     document.write(heads+' <br>' + 'Random Coin Value : Heads'+ "<br>");
// } 
// if(tails === 1){
//     document.write(tails+ '<br>' + 'Random Coin Value : Tails');
// }

// ************************Task 6
// var number = Math.floor( Math.random() * 100 ) +1;
// document.write('Random number between 1 and 100 : ' + number +"<br>");

// ************************Task 7
// var weight = +prompt('Enter your weight in KG');
// var randomnum = (Math.random(weight) * (60.0 - 50.0+ 1.0) + 50.0).toFixed(1);
// document.write(randomnum);

// ************************Task 8
// var input = +prompt('Enter a number between 1 to 10...');
// var numbers = Math.floor( Math.random() * 10 ) +1;
// if (input === numbers){
//     alert('Congrats! Number Matched You won');
//     document.write('Your input number is: '+ input + "<br>" + 'The secret number is: '+ numbers + "<br>")
// }
// else{
//     alert('Try Again');
// }

// ====================================== CHAPTER #  31 to 34 ==============================================


// ************************Task 1
// var currentDate = new Date();
// document.write(currentDate);



// ************************Task 2
// var today = new Date();
// var months = [ "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December" ];
// var themonth = today.getDay();
//  var currentMonth = months[themonth];
// document.write("Current Month: " + currentMonth);
// ======== OR =============
// var today = new Date();
// var month = { month: "long" };
// var currentMonth= new Intl.DateTimeFormat("en-US", month).format(today);
// document.write("Current Month: " + currentMonth);
//======== OR =============
// var currentDate = new Date();
// var currentMonth= currentDate.toLocaleString('default', { month: 'long' })
// document.write("Current Month : " + currentMonth);



// ************************Task 3
// var today = new Date();
// var weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
//         "Saturday" ];
// var theday = today.getDay();
//  var currentday = weekdays[theday];
// document.write("Current Month: " + currentday);
//======== OR =============
// var today = new Date();
// var day = { weekday: "short" };
// var currentDay= new Intl.DateTimeFormat("en-US", day).format(today);
// document.write("Today is : " + currentDay);
// ======== OR =============
// var currentDate = new Date();
// var currentDay= currentDate.toLocaleString('default', { weekday: 'long' })
// document.write("Today is : " + currentDay);



// ************************Task 4
//  var today = new Date();
// var weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
//         "Saturday" ];
// var theday = today.getDay();
//  var currentday = weekdays[theday];
//  if(currentday == "Saturday" || currentday == "Sunday")
// {
//     alert("It's a Fun day")
// }
// document.write(" Today is : " + currentday);
//======== OR =============
// var currentDate = new Date();
// var currentDay= currentDate.toLocaleString('default', { weekday: 'long' })
// if(currentDay == "Saturday" || currentDay == "Sunday")
// {
//     alert("It's a Fun day")
// }
// document.write(" Today is : " + currentDay);



// ************************Task 5
// var currentDate = new Date();
// var today = currentDate.getDate();
// if (today < 16)
// {
//     document.write('First fifteen days of the month');
// }
// else{
//     document.write('Last days of the month');
// }   


// ************************Task 6
// var currentDate = new Date();
// document.write("Current date: "+currentDate +"<br>");
// var elapsedMilliSec = currentDate.getTime();
// document.write("Elapsed millisecond since Januaray 1, 1970  : "+elapsedMilliSec +"<br>");
// var minutes = (elapsedMilliSec/1000)/60;
// // var elapsedMinutes = currentDate.getMinutes();
// document.write("Elapsed minutes since Januaray 1, 1970  : "+minutes +"<br>");


// ************************Task 7
// var currentDate = new Date();
// var hours = currentDate.getHours();
// if (hours < 12) 
// {
//     document.write('Its AM');   
// }
// else{
//     document.write('Its PM');   
// }


// ************************Task 8
// var laterDate = new Date("DEC 31, 2020");
// document.write("Later date: "+laterDate +"<br>");


// ************************Task 9
// var date = new Date("Jun 18, 2015");
// var currentDate = new Date();
// var diff_time = currentDate.getTime() - date.getTime();
// var diff_days = diff_time / (1000 * 60 * 60 * 24);
// var round = Math.round(diff_days);
// document.write(round + " have passed since 1st Ramadan, 2015");


// ************************Task 10
// var date = new Date ('Dec 05, 2015');
// var date2 = new Date ('Jan 01, 2015');
// var diff_time = date.getTime() - date2.getTime();
// var diff_sec = (diff_time/1000)/60;
// var round = Math.round(diff_sec);
// document.write("On reference date "+ date +", "+ diff_sec + " seconds had passed since beginning of 2015");


// ************************Task 11
// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// // var time = currentDate.getHours();
// document.write(" Current Date : "+currentDate +"<br>"+"1 hour ago, it was ");
// var newtime = currentDate.setHours(1);
// document.write(currentDate +"<br>");


// ************************Task 12
// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// // var years = currentDate.getFullYear();
// document.write(" Current Date : "+ currentDate +"<br>" + "100 years back, it was ");
// var newyear = currentDate.setFullYear(currentDate.getFullYear()- 100);
// // var newyear = currentDate.getFullYear()-100;
// document.write(currentDate +' ');


// ************************Task 13
// var dob = new Date ("Jan 01, 1998");
// var dobMilli =  dob.getTime();
// var dobYear = dob.getFullYear();
// var currentDate = new Date();
// var currentMilli =  currentDate.getTime();
// var diff = currentMilli - dobMilli;
// var age = diff/ (1000*60*60*24*30*12);
// var roundAge = Math.round(age);
// document.write("Your age is : "+ roundAge + "<BR>" + "Your birth year is "+ dobYear);

// ************************Task 14
// var customerName =prompt('Enter your name');
// var today = new Date();
// var currentMonth = today.toLocaleString('default', { month: 'long' });
// var units = +prompt('Enter your number of units');
// var chargesPerUnit = 16;
// var lateSurcharge = 350;
// var netAmount =  units * chargesPerUnit;
// var grossAmount = netAmount + lateSurcharge;

// document.write('K-Electric Bill'.bold().fontsize(8) + "<br>" + "<br>");
// document.write('Customer Name: '+customerName + "<br>");
// document.write('Month: '+currentMonth + "<br>");
// document.write('Number of Units: '+units + "<br>"+ "<br>");
// document.write('Net Amount Payable (within Due Date): '+ netAmount + "<br>");
// document.write('Late Payment Surcharge: '+ lateSurcharge + "<br>");
// document.write('Gross Amount Payable (within Due Date): '+ grossAmount + "<br>");

// ====================================== CHAPTER #  35 to 38 ==============================================

// ************************Task 1
// tellTime();
// function tellTime(){
//      var now = new Date();
//      alert("Current time: "+ now );
//      }
    

// ************************Task 2
// greeting();
// function greeting()
// {
//     var fName = prompt('Enter your first name...');
//     var lName = prompt('Enter your last name...');
//     alert(fName + " " + lName + " Welcome to JS coding World!");
// }


// ************************Task 3
// sum();
// function sum()
// {
//     var fNumbr= +prompt('Enter a first number for sum ...');
//     var lNumbr= +prompt('Enter a second a number for sum...');
//     var add = fNumbr + lNumbr;
//     alert(fNumbr + "+" + lNumbr + " is equal to "+ add);
// }



// ************************Task 4
// calculator();
// function calculator()
// {
// var num1 = +prompt(' Enter your first number... ');
// var opr = prompt(' Which Operation do you want to perform ( + , - , *, / , % ) ...');
// var num2 = +prompt(' Enter your second number... ');

// var sum = num1 + num2;
// var subt = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var modul = num1 % num2;
 
// if (opr == '+') {
//     document.write('Your '+ num1 + opr + num2 +" is equal to "+ sum + "<br>");   
// }
// else if (opr == '-') {
//     document.write('Your '+ num1 + opr + num2 +" is equal to "+ subt + "<br>");   
//    }
// else if (opr == '*') {
//     document.write('Your '+ num1 + opr + num2 +" is equal to "+ mul + "<br>");   
//    }
// else if (opr == '/') {
//     document.write('Your '+ num1 + opr + num2 +" is equal to "+ div + "<br>");   
//    }
// else if (opr == '%') {
//     document.write('Your '+ num1 + opr + num2 +" is equal to "+ modul + "<br>");   
//    }
// else{
//     document.write('Sorry......Your operation cannot be done ' + "<br>");   
    
// }
// }



// ************************Task 5
// var num = +prompt('Enter a number which want to square...');
// function square(num) {
// alert(num);
// }
// square(num*num);

// ************************Task 6
// //If i give num = 5 
// var num = +prompt('Enter a number to factorialize...');
// function factorialize(num) {
//     // If num = 0 OR num = 1, the factorial will return 1
//     if (num === 0 || num === 1)
//       alert (1);
    
//     // start the FOR loop with i = num-1
//     // decrement i after each iteration 
//     for (var i = num - 1; i >= 1; i--) {
//       // store the value of num at each iteration
//       num = num * i; 
//       /* 
//                       num      var i = num - 1       num *= i         i--       i >= 1?
//       1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
//       2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
//       3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
//       4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
//       5th iteration: 120               0                120
//       ============================= loop end ============= 
//       */
//     }
//     alert (num); 
//   }
//   factorialize(num);



// ************************Task 7
// counting();
// function counting()
// {
// var strat = +prompt('Enter a start number');
// var end = +prompt('Enter a last number of counting');
// for(var i= strat; i <=end; i++ ){
//         document.write(i + "<br>");
//     }
// }



// ************************Task 8
// var base= +prompt('Enter a base value');
// var prep= +prompt('Enter a prepndicular value');
// function hypotenuse(base, prep) {
//     function square(x) {
//          return x*x; 
//         }
//     return Math.sqrt(square(base) + square(prep));
//  }
//  var result = hypotenuse(base, prep);
//  alert(result);



// ************************Task 9
// var width = +prompt('Enter the width');
// var height = +prompt('Enter the height');
// function area(width, height){
//     return width*height;
// }
// alert (area(2,3));// arguments as a value
// alert (area(width, height));//arguments as a variables


// ************************Task 10
// var str = prompt('Enter a word');
// function palindrome(str) {
//     str = str.toLowerCase();
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i])
//        {      
//           return str+" is not palindrome";
//       }
//     }
//     return str+" is palindrome";
//    }
//    alert(palindrome(str));


// ************************Task 11
// // var str =prompt('Enter a Pharse or Sentence');
// function firstLetterCap(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
 
//  document.write(firstLetterCap("the quick brown fox"));



// ************************Task 12
// // var str = prompt('Enter a sentence or pharse');
// function longer(currentWord, longWord) {
//            //  Its a condition	? :	Condition	? "Yes" : "No"
//     return (currentWord.length > longWord.length) ? currentWord : longWord;
//   }
//   function longestWord(str) {
//     var words = str.split(' ');
//     return words.reduce(longer);
//   }
//   alert(longestWord("Web Development Tutorial"));


// ************************Task 13
// // var str =prompt('Enter the word or pharse...');
// // var letter = prompt('Enter the occurence letter..');
// function count(str, letter){
//     var convert = str.toLowerCase();
//     var occur = str.split(letter).length-1
//     return " The letter of occurence of "+ "'o' is: "+occur+ " times.";
// }
// document.write(count("JSResourceS.com", "o"));


// ************************Task 14
// function calcCircumference(radius){
//     var cicum= 2*Math.PI*radius;
//     return cicum;
// }
// document.write(calcCircumference()+"<br>");

// function calcArea(radius){
//     var area= Math.PI*(radius*radius);
//     return area;
// }
// document.write(calcArea());