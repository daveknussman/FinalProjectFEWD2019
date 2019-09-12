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

function listmembers() {
    // ar2.forEach(item => alert(item[0] + ' ' + item[1]));

    var i;
    var alerttext;

    alerttext = ' ';
    for (i = 0; i < ar2.length; i++) {
        alerttext += ar2[i][0] + ' ' + ar2[i][1] + ' ' + ar2[i][2] + ' ' + ar2[i][3] + ' ' + ar2[i][4] + '\n ';
    } 
    alert(alerttext);

}

function launchit(launchwhat) {
    alert(launchwhat);
}