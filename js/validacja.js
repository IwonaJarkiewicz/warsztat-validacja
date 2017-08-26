'use strict'
var wyslijBtn = document.getElementById('wyslij');
var wszystkieZgody = document.getElementById('wszystkie-zgody');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2')


function stanCheckbox(){
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    }

function waliduj() {
if (document.getElementById('imie').value.trim() == "") {
    alert('Wypełnij imię');
}
if (document.getElementById('email').value.trim() == "") {
    alert('Wypełnij e-mail');
}

if (!zgodaMarketingowa1.checked) {
    alert('Zaznacz pierwszą zgodę');
}
}

wyslijBtn.addEventListener('click', waliduj);
wszystkieZgody.addEventListener('change',stanCheckbox);