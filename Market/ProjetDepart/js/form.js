const inpName = document.querySelector('#name');
const inpAdress = document.querySelector('#adresse');
const inpPcode = document.querySelector('#codepostal');
const inpPays = document.querySelector('#pays');
const inpTelNum = document.querySelector('#numtel');
const inpMail = document.querySelector('#email');
const inpCB = document.querySelector('#numberCb');
const inpConfirm = document.querySelector('.confirme');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


/* 

Add an Event Listener on Name Input

*/

inpName.addEventListener('input', function(e){//chek if the name is correct

    let name = inpName.value
    
    if(name.length >= 3 && name.search(" ") >=0) {
        allImg[0].style.display = "block";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";

    }   
    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }

})

inpAdress.addEventListener('input',function(e){//chek if the adresse is correct

    let adresse = inpAdress.value
    
    if(adresse.search(/[0-9]/)>= 0 && adresse.search(/[a-z]/)>= 0 || adresse.search(/[A-Z]/)>= 0){
        allImg[1].style.display = "block";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";
    }else{
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }


})
    
inpPcode.addEventListener('input',function(e){//chek if the departement code is correct
    let Pcode = inpPcode.value;
    if(Pcode.length ==5 && Pcode.search(/[a-z]/) == -1 && Pcode.search(/[A-Z]/) == -1){
        allImg[2].style.display = "block";
        allImg[2].src = "ressources/check.svg";
        allSpan[2].style.display = "none";
    }else{
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
        allSpan[2].style.display = "inline";
    }



})

inpPays.addEventListener('input',function(e){//chek if the country is correct
    let pays = inpPays.value;
    if(pays.length >= 4 && pays.search(/[0-9]/) == -1){
        allImg[3].style.display = "block";
        allImg[3].src = "ressources/check.svg";
        allSpan[3].style.display = "none";
    }else{
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
        allSpan[3].style.display = "inline";
    }



})
/* 

Add an Event Listener on Mail Input

*/

inpMail.addEventListener('input', function(e){//chek if the Mail is correct

    const regexEmail = /\S+@\S+\.\S+/;
    
    if(e.target.value.search(regexEmail) === 0){

        allImg[5].style.display = "inline";
        allImg[5].src = "ressources/check.svg";
        allSpan[5].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1) {

        allImg[5].style.display = "inline";
        allImg[5].src = "ressources/error.svg";
        allSpan[5].style.display = "inline";

    }

})

/* Creation/Validation of email */

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}



inpTelNum.addEventListener('input',function(e){//chek if the telephone number is correct

    let nbTel = inpTelNum.value;
    if(nbTel.search(/[+]/) == 0){
        if(nbTel.length == 12 && nbTel.search(/[a-z]/) == -1 && nbTel.search(/[A-Z]/) == -1){
            allImg[4].style.display = "inline";
            allImg[4].src = "ressources/check.svg";
            allSpan[4].style.display = "none";
        }else{
            allImg[4].style.display = "inline";
            allImg[4].src = "ressources/error.svg";
            allSpan[4].style.display = "inline";
        }
    }else{
        if(nbTel.length == 10 && nbTel.search("0") == 0 ){
            allImg[4].style.display = "inline";
            allImg[4].src = "ressources/check.svg";
            allSpan[4].style.display = "none";
        }else{
            allImg[4].style.display = "inline";
            allImg[4].src = "ressources/error.svg";
            allSpan[4].style.display = "inline";
        }
    }


})
/* 

Add an Event Listener on cb Input

*/

inpCB.addEventListener('input', function(e){//chek if the credit card code is correct

    valeurInp = e.target.value;

    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }



    if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    } 

    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    if(testAll < 3){
        allSpan[6].style.display = "inline";
        allImg[6].style.display = "inline";
        allImg[6].src = "ressources/error.svg";
    } else {
        allSpan[6].style.display = "none";
        allImg[6].src = "ressources/check.svg";
    }


})


/* 

Add an Event Listener on Confirmation Input

*/

inpConfirm.addEventListener('click',function(e){//chek if the form is correct and if all is correct confirm the form

    for(let i = 0;i<allImg.length;i++){
        if(allImg[i].src == "ressources/error.svg" || allImg[i].style.display == ""){
            console.log("non c pas bon")
            return;
        }
    }
    console.log("ouais c bon")
    window.location = "validation.html";

})