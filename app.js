// ====================================== CHAPTER #  21 ==============================================
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

// ************************Task 14
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


// ************************Task 15

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
