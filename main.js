'use strict';

let form=document.forms.form_name;
let Name=form.elements.name;
let Data=form.elements.data;
let user;

form.addEventListener('submit', FuncForm);

let flag=true;
let errorN = document.getElementById('errorN');
let errorD = document.getElementById('errorD');
let sms = document.getElementById('sms');

function FuncForm(event){
    event.preventDefault();
    errorN.innerHTML='';
    errorD.innerHTML='';
    if(Name.classList.contains('error_border')){
        Name.classList.remove('error_border');
    }
    if(Data.classList.contains('error_border')){
        Data.classList.remove('error_border');
    }
flag=true;

if(!Name.value){
    errorN.innerHTML='Введите имя!';
    Name.classList.add('error_border');
    flag=false;
}else if(Name.value.length<2){
    errorN.innerHTML='Имя короткое!';
    Name.classList.add('error_border');
    flag=false;

}


if(!Data.value){
    errorD.innerHTML='Введите год рождения!';
    Data.classList.add('error_border');
    flag=false;
}

if(Data.value.length!=4){
    errorD.innerHTML='Неверный формат года рождения!';
    Data.classList.add('error_border');
    flag=false;
}

if(Data.value.length===4){
    let a=2024-Number(Data.value);
    if(a<18){
        errorD.innerHTML='Вам нет 18 лет!';
        Data.classList.add('error_border');
        flag=false;
    }
}

if(flag){
    user=Name.value;
    sms.innerHTML=`Все прошло успешно ${user}`
}


}