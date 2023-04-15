function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('InputEmail').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес получен - мы с вами свяжемся';
    else output = 'Адрес электронной почты введен неправильно!';
    alert(output);


}