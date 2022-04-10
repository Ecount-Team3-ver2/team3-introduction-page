


function myFunction1() {
    var who = document.getElementById('whoname1').value;
    document.getElementById("showname1").style.display = '';
    document.getElementById('showname1').innerHTML = "Hello " + who + "!";
    document.getElementById("minjupic").src = "images/minju_hello.png";
    document.getElementById("showname1").style.display = '';
    document.getElementById("quhi").style.display = '';
    document.getElementById("quweb").style.display = '';
    document.getElementById("quanswer").style.display = '';
}

function myFunction2() {
    var who = document.getElementById('whoname2').value;
    document.getElementById("showname2").style.display = '';
    document.getElementById('showname2').innerHTML = "Hello " + who + "!";
    document.getElementById("jyeongik").src = "images/kyenik_hello.jpg";
    document.getElementById("showname2").style.display = '';
    document.getElementById("quhi").style.display = '';
    document.getElementById("quweb").style.display = '';
    document.getElementById("quanswer").style.display = '';
}

function myFunction3() {
    var who = document.getElementById('whoname3').value;
    document.getElementById("showname3").style.display = '';
    document.getElementById('showname3').innerHTML = "Hello " + who + "!";
    document.getElementById("jaeyoungpic").src = "images/jaeyoung_hello.png";
    document.getElementById("showname3").style.display = '';
    document.getElementById("quhi").style.display = '';
    document.getElementById("quweb").style.display = '';
    document.getElementById("quanswer").style.display = '';
}

function myFunction4() {
    var who = document.getElementById('whoname4').value;
    document.getElementById("showname4").style.display = '';
    document.getElementById('showname4').innerHTML = "Hello " + who + "!";
    document.getElementById("hyeonjeongpic").src = "images/hyeonjeong_good.png";
    document.getElementById("showname4").style.display = '';
    document.getElementById("quhi4").style.display = '';
    document.getElementById("quweb4").style.display = '';
    document.getElementById("quanswer4").style.display = '';
}



function toggleimg1() {
    document.getElementById("minjupic").src = "images/minju_sad.png";
    document.getElementById("personalpage1").style.display = 'none';
}



function toggleimg2() {
    document.getElementById("kyeongikpic").src = "images/kyeonik_sad.jpg";
    document.getElementById("personalpage2").style.display = 'none';
}



function toggleimg3() {
    document.getElementById("jaeyoungpic").src = "images/jaeyoung_sad.jpg";
    document.getElementById("personalpage3").style.display = 'none';
}


function toggleimg4() {
    document.getElementById("hyeonjeongpic").src = "images/hyeonjeong_sad.png";
    document.getElementById("personalpage4").style.display = 'none';
}

function showshow1() {
    document.getElementById("minjupic").src = "images/minju_happy.png";
    document.getElementById("personalpage1").style.display = '';
}
function showshow2() {
    document.getElementById("kyeongikpic").src = "images/kyeonikwink.jpg";
    document.getElementById("personalpage2").style.display = '';

} function showshow3() {
    document.getElementById("jaeyoungpic").src = "images/hyeonjeong_wink.png";
    document.getElementById("personalpage3").style.display = '';

} function showshow4() {
    document.getElementById("hyeonjeongpic").src = "images/hyeonjeong_wink.png";
    document.getElementById("personalpage4").style.display = '';
}
