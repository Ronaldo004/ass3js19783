// chapter26-30
// question:1.
// var a=+prompt("Enter number positive float")
// document.write("<br>"+a);
// var b=Math.round(+a);
// document.write("<br>"+b);
// var l=Math.floor(a);
// document.write("<br>"+l);
// var u=Math.ceil(a);
// document.write("<br>"+u);
// question2
// var a=+prompt("Enter number negative float")
//  document.write("<br>"+a);
//  var b=Math.round(+a);
//  document.write("<br>"+b);
//  var l=Math.floor(a);
//  document.write("<br>"+l);
//  var u=Math.ceil(a);
//  document.write("<br>"+u);
//question3
// var a=+prompt("Enter value");
// document.write("User value"+a);
// var b=Math.abs(a);
// document.write("<br>"+"After abs"+b);
//question4
// var dice = 6
//     var ra = Math. floor(Math. random() * dice) +1;
//     document.write("Random dice value"+ra);
 //question5
//  var coin = 2;
//  var ra = Math. floor(Math. random() * coin) +1; 
//      document.write("Random dice value"+ra);   
//question6

// var a=Math.floor(Math.random()*100)+1;
// document.write("Random dice value"+a);
//question7
// var user = parseFloat(prompt("Enter your weight :"));
// document.write("The weight of user is " + user + " kilograms");
//question8

// var a=Math.floor(Math.random(n)*10)+1;
// var n=+prompt("enter value");
// if(a===n)
// {
//     document.write("your lucky number"+a)
// }
// else{
//     document.write("Try again")
// }
//chapter31-34
// //Question 1
// var a = new Date();
// var b =a.toString();
// document.write(b);
//Question 2
// var a=new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n=month[a.getMonth()];
// document.write(n);
//Question 3
// var a=new Date();
// var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var n=day[a.getDay()];
// var b=n.slice(0,3);
// document.write("Current Day is"+b);
//Question 4
// var a=new Date();
//  var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//  var n=day[a.getDay()];
//  var b=n.slice(0,3);
//  var o="Sun"
//  var d="Sat"
//  if(b===o || b===d)
//  {
// document.write("Current Day is Funday ");
// }
// else{
//     document.write("HAHAHAHA");
// }
//Question 5
// var a=new Date();
// var date=a.getDate();
// if(date<=15)
// {
//     document.write("First fifteen day of month");
// }
// else{
//     document.write("Last days");
// }
//Question 6
// var a= new Date()
// var curdate=new Date("April 20, 2021")
// var milsec=curdate-a;
// var f=a.toString();
// document.write(f);
// document.write("<br>"+milsec);
// var g=milsec/(1000*60);
// document.write("<br>"+g);
//Question 7
// var a= new Date();
// var f=a.getHours();
// if(f>0)
// {
//     document.write("mid night Its AM")
// }
// elseif(f==12)
// {
//     document.write("its noon AM");
// }
// elseif(f>12)
// {
//     document.write("its pm");
// }
//Question 8
// var a=new Date("April 19,2021");
// document.write("Later date &nbsp:"+a);
//Question 9
// var a=new Date("june 18,2015");
// var m=new Date("April 18,2021");
// var c=m-a;
// var day=(c)/(1000*60*60*24);
// document.write(day+ "&nbspDays have past since ramzan 2015");
//Question 10
// var a=new Date("Jan 1,2015");
// var b=new Date("April 19,2021");
// var c=b-a;
// var f=c/1000;
// document.write(f+"&nbsp Seconds past since 2015")
//Question 11
// var b= new Date("April 18,2021")
// var m=b.setHours(1);
// document.write(b)
// document.write("<br>"+m+"&nbspcurrect Hour&nbsp it was"+b);
//Question 13
// var a=prompt("Enter your birht month, date,year")
// var b=new Date(a);
// var c=new Date("April 18,2021");
// var d=c-b;
// var e=d/(1000*60*60*24*365.3);
// document.write("I AM&nbsp "+e+"&nbsp year old");
// var h=b.getFullYear();
// document.write("<br>My birth year &nbsp"+h);
//Question 12
// var a=new Date("April 18,2021");
// var b=new Date("April 18,1921 ");
// var c=(a-b)/(1000*60*60*24*365);
// document.write(c+"&nbsp year back it was&nbsp"+b);
//Question 14
// var Customername="Muhammad Rohan";
// document.write("Customer name&nbsp:"+Customername);
// var date=new Date("April 18,2021");
// var mon=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
// var e=mon[date.getMonth()];
// document.write("<br>Month&nbsp:"+e);
// var no_of_unit="410";
// document.write("<br>no of unit&nbsp"+no_of_unit)
// var charges_per_unit="16";
// document.write("<br>Charges per unit:&nbsp"+charges_per_unit+"RS");
// var netchar=no_of_unit*charges_per_unit;
// document.write("<br>Net ammount of bill (With in due date):&nbsp"+netchar);
// var latecharges=360;
// document.write("<br>Late payment charges:&nbsp"+latecharges);
// var plenty=netchar+latecharges;
// document.write("<br>Gross Amount Payable (after Due Date):&nbsp"+plenty);
//Chapter 35-38
//Question 1
// function time()
// {
//     var a=new Date();
//     var b=a.toString();
//     document.write(b)
// }
// time();
//Question 2
// function use()
// {
// var a=prompt("Enter your first name");
// var b=prompt("Enter your last name");
// var c=a+b;
// document.write("your full name "+c);
// }
// use();
//Question 3
// function add(){
//     var a=+prompt("Enter no 1");
//     var b=+prompt("Enter no 2");
//     var c=a+b;
//     document.write("Addition of no "+c);
// }
// add();
//Question 4
// function cal( num1,num2,operator){
//     num1=+prompt("Enter no 1");
//     num2=+prompt("Enter no 2");
//     operator=prompt("Enter operation")
    
//     if(operator==="-")
//     {
//         var sub=num1-num2;
//         document.write("Subtarct"+sub);
//     }
//     else if(operator==="+")
//     {
//         var add=num1+num2;
//         document.write("add"+add);
//     }
//     else if(operator==="/")
//     {
//         var divide=num1/num2;
//         document.write("divide"+divide);
//     }
//     else if(operator==="*")
//     {
//         var mul=num1*num2;
//         document.write("mul"+mul);
//     }
//     else{
//         document.write("invalid");
//     }

// }
// cal()
//Question 5
// function square(a=5){


// var c=a*a;
// document.write(c);
// }
// square();
//Question 6
// function fact(num=5,fact=1)
// {
// for(var i=1;i<=num;i++)
// {
//  fact=fact*i;
// }
// document.write("Factorial of number"+fact);
// }
// fact();
//Question 7
// function count()
// {
//     var a =+prompt("Enter Starting value");
//     var b =+prompt("Enter Ending value");
//     for(var i=a;i<=b;i++)
//     {
//         document.write("<br>"+i);
//     }
// }
// count();
//Question 8
// function hyp()
// {
//     var perp=+prompt("Enter perpendicular");
//     var base=+prompt("Enter base");
//     var hyp=Math.pow(perp,2)+Math.pow(base,2);
//     var res=Math.sqrt(hyp)
//     document.write("hyp^2=per^2+base^2= "+res);
// }
// hyp();
//Question 9
// function rec(length=4,width=9)
// {
//     var area=length*width;
//     document.write(area+"<br>");
// }
// rec();
// function rec1(length,width)
// {
//     var area1=length*width;
// }
// rec(4,8);
//Question 10
// function check(str) {
// var len = string.length;
//    for (let i = 0; i < len / 2; i++) {
//    if (string[i] !== string[len - 1 - i]) {
//        document.write( "It is not a palindrome");
       
//         }
//     }
//     document.write("Its a palindrome");
// }
// var string = prompt('Enter a string: ');
// var value = check(string)
// document.write(value);
//Question 14
// function circum()
// {
//     var r=4;
//     var circumference=2*(3.142)*(r);
//     document.write( circumference);
// }
// circum();

// function area()
// {
//     var r=4;
//     var area=(3.142)*Math.pow(r,2);
//     document.write("<br>"+area);
// }
// area();
//Question 12
// function str()
// {
//     var a="Web Development Tutorial";
//    var c= a.slice(4,15);
    
//     document.write(c);
// }
// str();
//Question 13
// function strp()
// {
//     var t="JSresourceS.com";
//     var b='o';
//     for(let i=0;i<=t.length;i++)
//     if(t[i]===b)
//     {
//         document.write("<br>"+"O is present in string at position"+i);
//     }
// }
// strp();
//Question 11
// function lol()
// {
//     var a="the quick brown fox"
//     var c=a.slice(0,1);
//     var d=a.slice(1,4);
//     var v=a.slice(4,5);
    
//     var t=a.slice(5,10)+a.slice(10,11).toLocaleUpperCase()+a.slice(11,16)+a.slice(16,17).toLocaleUpperCase()+a.slice(17,19);
//     c=c[0].toLocaleUpperCase()+d+v[0].toUpperCase()+t;
//     document.write(c);
    
// }
// lol();
//Chapter 38 to 42
//Question 1
// function pow(a,b,res)
// {
//     a=+prompt("Enter no");
//     b=+prompt("Enter power");
//     var c=Math.pow(a,b)
//     document.write("Your result "+c);
// }
// pow();
//Question 2
// function leapyear()
// {
//     var year=+prompt("Enter year");
//     var b=(year)%4;
//     var c=(year)%(400);
//     var d=(year)%(100);
//  if((c == 0 || b == 0) && d != 0)
//  {
//      document.write("its leap year");
//  }
//     else{
//         document.write("its not leap year");
//     }
// }
// leapyear();
//Question 3
// function area(a=4,b=5,c=3){
//     var s=(a+b+c)/2
//     var n=s*(s-a)*(s-b)*(s-c)
//     document.write("req ans "+n);

// }
// area();
//Question 4
// function res()
// {
//     var sub1=+prompt("Enter marks 1");
//     var sub2=+prompt("Enter marks 2");
//     var sub3=+prompt("Enter marks 3");
//     function total()
//     {
//         var tot=sub1+sub2+sub3
//         document.write("Student avg marks "+tot);
//         var d=(sub1+sub2+sub3)/3;
//         document.write("<br>AVG"+d);
//     }
//     function avg()
//     {
//         var tot=((sub1+sub2+sub3)/(300))*100;
//         document.write("<br>Student total marks "+tot);
//     }
//     total();
//     avg();
// }
// res();
//Question 5
// function indexof()
// {
//     var a=prompt("Enter Sentence");
//     var c=prompt("Enter Alphabet for search their index");
//     for(i=0 ;i<=a.length;i++)
//     {
//         if(a[i]==c)
//         {
//             document.write("Your alphabet &nbsp"+a[i] +" &nbsp present at index of &nbsp"+i);
//       break;
//         }
        
//         else{
//             document.write("not present")
//             break;
//         }
//     }
//         }
// indexof();
//Question 6
// var string = prompt("Enter sentence");
// var vowel = ["a", "e", "i", "o", "u"];

//  function abc() {
//     var i;
//     for (let i = 0; i < vowel.length; i++) {
//         var a = string.length;
//         for (let j = 0; j < a; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j)+(string.slice(j + 1, a));
                   
//             }


//         }
//         document.write(string);
//                 break;
       
//     }
// }

// abc()
// //Queston 7
// function vowelCounter(string) {
//     var vowels = ["ae",
//       "ai",
//       "ao",
//       "au",
//       "ea",
//       "ee",
//       "ei",
//       "eo",
//       "eu",
//       "ia",
//       "ie",
//       "ii",
//       "io",
//       "iu",
//       "oa",
//       "oe",
//       "oi",
//       "oo",
//       "ou",
//       "aa",
//       "ua",
//       "ue",
//       "ui",
//       "uo",
//       "uu",
//     ];
//     var count = 0;
//     for (let i = 0; i < string.length; i++) {
//       for (let j = 0; j < vowels.length; j++) {
//         if (string.slice(i, i + 2) === vowels[j]) {
//           count++;
//         }
//       }
//     }
//     console.log(count);
//     return count;
//   }
//   document.write(vowelCounter("Hello world"));
//   document.write(vowelCounter("aeioudjjdps"));
