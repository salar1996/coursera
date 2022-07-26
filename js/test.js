var hi = "hi every one";
var num1= 25;
var num2= '27.5';
var num3= '09121073369';
var str= 'amoo poory';
var num4= -25.5;
names= ['amoo','poory','salar','mamdosein'];
family= ['torabi','razavi','javadi','ghaem'];
phones= ['09352838975','09120179719','09122039768','09121073399'];


document.write(
    '<table>\n' +
    '        <tr>\n' +
    '            <th>نام</th>\n' +
    '            <th> نام خانوادگی</th>\n' +
    '            <th>شماره</th>\n' +
    '        </tr>'
)
;for(var i=0 ; i<=3 ; i++){
document.write(
'    <tr>\n' +
    '        <th>' +  names[i] + '</th>' +
    '        <th>' +  family[i] + '</th>' +
    '        <th>' +  phones[i] + '</th>' +
    '    </tr>'
)

};
document.write('</table>');

document.write('<hr/>');

// document.write('<table>')
// var j = 0;
// do {
//     document.write(
//         '    <tr>\n' +
//         '        <th>' +  names[j] + '</th>' +
//         '        <th>' +  family[j] + '</th>' +
//         '        <th>' +  phones[j] + '</th>' +
//         '    </tr>'
//
//     )
//     j++;
// } while (j<=3);

// document.write('<hr/>');
//
// var k=1;
// if (k%2 == 0){
//     document.write('even');
// }else {
//     document.write('odd')
// };
//
// for (var i=1 ; i<40 ; i++){
//     if (i % 5 == 0){
//         document.writeln(i)
//     }
// }

var testy = 'test22';
switch (testy){
    case "salaaam" : alert("salaaam");
    break;
    case 'test' : alert('test');
    break;
}
// var adad = prompt('enter a number');
// if (adad <=5 ){
//     alert('fuck!')
// }else{
//     alert('salaaaam!')
// }




function sl(i , j){
    document.writeln(j)
    document.writeln(i)
};

// sl('salar', 'salam');

// function  s1 (i , j){
//     var k = Number(i)+Number(j);
//     return k;
// }
//
// var i = prompt('enter first number');
// var j = prompt('enter secund number');
// alert(s1(i ,j));


// var ele = document.getElementsByTagName('div');
// for (i=0 ; i<=ele.length ; i++){
//
//     ele[i].innerHTML = 'salar';
// }


// var tts = document.getElementById('test-class');
// for (var i = 0 ; i <= tts.childNodes.length ; i++) {
//     if (tts.childNodes[i].nodeType != 1) {
//        continue;
//     }
//     alert(tts.childNodes[i].nodeName);



/* childnodes &  node type
var j = document.getElementById('test-class');
var i = 0;
do{
    if (j.childNodes[i].nodeType != 1 ){
        i++;
    }else{
        continue;
    }
    alert(j.childNodes[i].innerHTML)
    i++;
}while (i<= j.childNodes.length);
*/

// var userAge = prompt("سن خود را وارد نمایید" );
// var userMomAge = prompt("سن مادرتان را وارد نمایید:|")
// alert("your mid age:" + "\""+ (+userAge + +userMomAge) /2     + "\"" );
// alert('میانگین اعداد وارد شده برابر است با : ' + "\"" + (num1 + num2 + num3)/3 + "\""  )



// var userAge = +prompt("how many old you are?");

// while (isNaN(userAge)){
//     alert("سن وارد شده باید عدد باشد!");
//     userAge = +prompt("how many old you are?");
// }

// if(userAge < 18){
//         alert("you are not permited!")
// }else{
//         alert("you are permitted")
// }


// * check user age and sex
// *
// var userAge = +prompt("how old you are?");
// while(isNaN(userAge)){
//     alert("ENTER NUMBER!")
//     num1 = +prompt("how old you are");
// }
// var userSex = prompt("you are \" male \" or \" female \" ?");
// while(userSex != "male" && userSex != "female"){
//         alert("just enter \" mail \" or \" female \" !")
//         userSex = prompt("you are \" male \" or \" female \" ?");
// }
// if(userAge < 18 || userSex == "female"){
//     alert("you are not authorised!")
// }else{
//     alert("ok! you can enter the site!")
// }
// *

// * turnary condition
// userAge < 18 || userSex == "female"  ? alert("you are not authorised!") : alert("ok! you can enter the site!");

function evenOrOdd (number){
    var baghimandeh = number%2;
    switch(baghimandeh){
        case 0:
            alert("your number is \"even\"")
            break;
        case 1:
            alert("your number is \"odd\"")
            break;
        default:
            alert("you are not entered a number");
    }
}


function checkLenth (str , num){
    if (str.length < num)  {
        return false;
    }else {
       return true;
    }
}


// check username & password
//*
// var userName = prompt("Enter username!");
// if (checkLenth(userName , 3) == false) {
//     alert('username must be more than 3 character!');
//     userName = prompt("Enter username!"); 
// }
// var passWord = prompt("Enter password!");
// if (checkLenth(passWord , 8) == false) {
//     alert('password must be more than 8 character!');
//     passWord = prompt("Enter password!"); 
// }
// alert("your username & password saved!");


function captchaProduct(i){
    var captcha = String(Math.floor(Math.random()*10));
    while (captcha == 0){
        captcha = String(Math.floor(Math.random()*10));
    }
    for (j=1 ; j<= (i-1) ; j++){
        var random = String(Math.floor(Math.random()*10));
        var captcha = captcha + random;
    }
    return captcha;
}


var userNumber1 = +prompt("enter first number")
var userNumber2 = +prompt("enter secod number")
var powertest = true;

while(powertest != userNumber2){
    powertest *= userNumber1;
}

console.log(powertest)