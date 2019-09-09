var fn = ' ';
var ln = ' ';
var ph = ' ';
var pt = ' ';
var em = ' ';
var ar1 = [fn,ln,ph,pt,em];
var ar2 = [];



function newsignup(first,last,phone,phonetype,email) {
    fn = first;
    ln = last;
    ph = phone;
    pt = phonetype;
    em = email;
    ar1 = [fn,ln,ph,pt,em];
    ar2.push(ar1);
    document.getElementById('signupform').reset();
}

function listmembers () {
    ar2.forEach(item => alert(item[0] + ' ' + item[1]));
}