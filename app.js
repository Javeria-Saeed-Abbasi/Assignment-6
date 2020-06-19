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

// ************************Task 13--------tick
// var user = prompt('Enter a valid username ...');
// var length =  user.length;
// for (var i = 0; i < length; i++) {   
//     var convert = user.charCodeAt(i);  
//     if ( convert >= 32 && convert <= 44){
//         alert('"Please enter a valid username"');
//     }
//     else if ( convert >= 46 && convert <=64){
//         alert('"Please enter a valid username"');
//     }   
//     else{
//         alert('Your username is valid');
//     }
// }

// ************************Task 14--------tick
// var found = prompt('Welcome to ABC Bakery! What do you want to order Sir/Ma'+'am?');
// var  A =["cake","apple pie","cookie","chips","patties"];
// var convert = found.toLowerCase(); 
// var length = A.length;
// for (var i=0; i<=length; i++){
//     if (A[i] === convert){
//         alert(found + " is available at index " + i  + " in our bakery "   );
//     }
//     else{
//         alert("We are sorry... "+ found + " is not available in our bakery ");
//     }
// }


// ************************Task 15--------tick

// var password = prompt('Enter your password');
// var CapitalLetter   = false;
// var SmallLetter = false;
// var Numbr = false;
// for (var i = 0; i<=password.length; i++) {
//   var charCode = password.charCodeAt(i);
//   if (isNaN(parseInt(password[0])) ) {

//   }
//   else  {
//    document.write("Password should not start with number");
//   }
//   if (password.length !== 6 ){
//       document.write('Enter atleast 6 characters');
//   }
//     if(charCode > 47 && charCode < 58)
//    {
//         Numbr = true;
//     }
//   if(charCode > 64 && charCode < 91)
//    { 
//        CapitalLetter = true;
//     }
//   if(charCode > 96 && charCode < 123)
//     {
//         SmallLetter = true;
//     }
//     if(CapitalLetter && SmallLetter && Numbr && password.length == 6 )
//   alert("Your password is valid");
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


// ************************Task 12--------tick
// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// // var years = currentDate.getFullYear();
// alert(" Current Date : "+ currentDate + " "  + "100 years back, it was ");
// var newyear = currentDate.setFullYear(1920);
// alert(currentDate +' ');


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
