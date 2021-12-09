let buttonAdd = document.querySelectorAll('.add-to-cart');
let panier = document.querySelector('#cart-table');
let Allh4 = document.querySelectorAll('h4');
let allDiscount = document.querySelectorAll('.discount');
let allStock = document.querySelectorAll('.stock');
const confirmeCart = document.querySelector('#order');
let emptyCart = document.querySelector('#empty-cart');
let searchbar = document.querySelector('#inputText');
let buttonSuppr = document.querySelectorAll('button');


confirmeCart.addEventListener("click",function(e){
	window.location = "js/form.html";
})

emptyCart.addEventListener('click',function(e){
	let ArticlePanier = document.querySelectorAll('.ArticlePanier');
	for(let i = 0;i<ArticlePanier.length;i++){
		ArticlePanier[i].style.display = "none";
	}

})



//ajout d'un event listener sur chaque boutton
buttonAdd.forEach(function(elem){
	elem.addEventListener("click",clicSurBtn)

})

/* Function: ClicSurBtn
	detect a clic on a button and get the information of the article(name and price)


*/
function clicSurBtn(e){
    const BtnClique = e.target;
    const BtnIndex = BtnClique.getAttribute('data-id');
    
    let article = Allh4[BtnIndex-1].innerHTML
    
    let Price = allDiscount[BtnIndex-1].innerHTML
    let stock = allStock[BtnIndex-1].innerHTML //recuperation de la string des stock
    let nbStock = parseInt(stock);	//conversion en int
    if(nbStock <= 0){
    	createNotif(article,"stock")
    	return;
    }
    nbStock--;

    allStock[BtnIndex-1].innerHTML = nbStock;
    addCart(article,Price,1);
}

/* Function: addCart
	Param1: The name of the Article
	Param2: The price of the Article
	Param3:The quantity to add
	Add the Article clicked to the cart
*/
function addCart(Article, Prix, Qt){
	let allTh = document.querySelectorAll('th'); //-------------recupere tout les th
	let isAlreadyBuy = false;					//declaration d'une variable pour verifier si l'article est deja acheter
	let index = 0;								//declaration d'une variable index
	for(let i = 0; i < allTh.length;i++){		//pour chaque th
		
		if(Article == allTh[i].innerHTML){ 		//verifie si l'article que on veut acheter a le meme nom qu'un article dans le panier
			isAlreadyBuy = true;				//si vrai passe la variable isAlready by a true
			index = i;							//et recupere l'index a laquelle l'article a été trouvé dans le panier
		}
	}
	
	if(isAlreadyBuy){							//si l'objet a deja été acheter
		let value = allTh[index+2].innerHTML	//recupere la quantité dans le panier
		let nbValue = parseInt(value)			//la convertie en int
		allTh[index+2].innerHTML = nbValue+1	//ajoute 1 a la valeur de la quantité et la renvoie dans le panier
		
		let price = allTh[index+1].innerHTML	//recupere dans le html le prix de l'article en double
		let nbPrice = parseFloat(price)			//la convertit en float
		let Prix0 = parseFloat(Prix)			//convertit le prix initial de l'objet en float
		allTh[index+1].innerHTML = nbPrice + Prix0 + "€"	//additione l'ancien prix dans le panier et l'inital et renvoi sa dans le panier

	}else{										//-------------sinon
	let newLine = document.createElement('thead');
	let newTr = document.createElement('tr');
	newTr.setAttribute('class','ArticlePanier')
	
	let newTh0 = document.createElement('th');
	newTr.appendChild(newTh0);
	
	let newTh1 = document.createElement('th');
	newTr.appendChild(newTh1);
	newTh1.setAttribute('class','titleArticle')
	newTh1.innerHTML = Article;
												//} crée une nouvelle ligne avec les info
	let newTh2 = document.createElement('th');
	newTr.appendChild(newTh2);
	newTh2.innerHTML = Prix;
	
	let newTh3 = document.createElement('th');
	newTr.appendChild(newTh3);
	newTh3.setAttribute('class','qt');
	newTh3.innerHTML = Qt;


	let Supp = document.createElement('button')
	Supp.style.width = 1+"px";
	let newTh4 = document.createElement('th');
	newTh4.appendChild(Supp)
	newTr.appendChild(newTh4);


	
	newLine.appendChild(newTr);
	newTr.style.backgroundColor = "white";
    panier.appendChild(newLine);

//--------------------------------Delete an item from the cart---------------------//

    
    
	buttonSuppr = document.querySelectorAll('button');
	let title = document.querySelectorAll('.title');
	ArticlePanier = document.querySelectorAll('.titleArticle');
	let nbqt = document.querySelectorAll('.qt')
	
	Supp.addEventListener('click',function(e){	//permet de supprimer un article dans le panier et remet a jour les stock
		//gestion des stock
		let buttonClicked = event.target;
        for(let i = 0;i<buttonSuppr.length;i++){
        	if(buttonSuppr[i] == buttonClicked){
        		let qt = nbqt[i].innerHTML;
        		let nameArticle = ArticlePanier[i].innerHTML
        		
        		for(let c = 0;c<title.length;c++){
        			if(nameArticle == title[c].innerHTML){
        				let stock = allStock[c].innerHTML
        				let nbStock = parseInt(stock);
        				let nbqt2 = parseInt(qt);
        				nbStock = nbStock +nbqt2;
        				allStock[c].innerHTML = nbStock;
        				
        				
        			}
        		}
        	}
        }
        

        buttonClicked.parentElement.parentElement.remove();	//supersion du manier
	})
	
	createNotif(Article,"add");
	
	}
}

/* createNotif
	param1: The Article buyed
	Param2: The type of Notif ("add","supp","stock")
	Display a Notif with the article add to cart (if the Param2 is "add")/ the article remove to cart (if the param2 is "sup")/ the stock was empty (if param2 is "stock")
*/
function createNotif(Article,Text){
	
	let div = document.querySelector('#notification_container')	//recupere la div conteneur de notification
	let notif = document.createElement('p')						//crée une balise p
	
	div.appendChild(notif)										//ajoute la balise p nouvellement crée a la div contenaire
	notif.style.backgroundColor = "cyan";						//met la couleur bleu (inutile mais un peu estetique)
	notif.style.marginBottom = 10+"px";							//met une marge en bas de la notif pour aéré les notif (encore du design pas ouf )
	if(Text == "add"){												//si le text est add
		notif.innerHTML = Article+ " a été ajouté au panier"	//la balise p sort un texte disant que l'aticle a bien été ajouté au panier
	}else if(Text == "sup"){										//si le texte est sup
		notif.innerHTML = Article+ " a été retiré du panier"	//la balise p sort un texte disant que l'aticle a bien été supprimer du panier
	}else if(Text == "stock"){										//si le texte est stock

		notif.innerHTML = "il n'a plus de disponibilité pour l'article: "+ Article;	//la balise p sort un texte diant que les stock sont vide
	}
	
	setTimeout(function(){	//attend 3s
    notif.style.display = "none";	//fait disparaitre les notif
}, 3000);
	


}


//------------Register the item in the local storage-----------------------------//

const stringifyCourses = JSON.stringify(COURSES);
const parseCourses = JSON.parse(localStorage.getItem("panier"));

/*  open a click registration form page
*/
//confirmeCart.addEventListener('click', formulaire)
/*
function saveContentPanier() {
function formulaire(){
	window.open("js/form.html");
}

    localStorage.setItem("panier", stringifyCourses)
}

saveContentPanier();
*/
//-------------Register item in the cart (visual)----------------------//




/*LocalStorageCharge
	this function load in the local storage the cart of the user

*/
function LocalStorageCharge(){
    if(localStorage.getItem('Panier') != null){
        for(let i = 0; i < panier.length; i++){
            console.log(panier[i].title);
            const article = document.createElement('tr');

            const articleImg = document.createElement('td');

            const imageTd = document.createElement('img');
            imageTd.setAttribute('src', panier[i].img);
            articleImg.appendChild(imageTd);

            const articleTitle = document.createElement('td');
            articleTitle.innerText = panier[i].title;

            const articlePrice = document.createElement('td');
            articlePrice.innerText = panier[i].price;

            const articleStock = document.createElement('td');
            articleStock.innerText = panier[i].stock;
        }
    }
}











































//-----------------------Surf in the search Bar---------------------------//

searchbar.addEventListener('keyup',recherche);
/*recherche
	allows to search a article by it name
*/
function recherche(){
    let input = searchbar.value;
    let temp = input.toUpperCase();
    let cards = document.querySelectorAll('.course__item');
    let errormsg = document.querySelector('.hidden');
    let hiddenCards = 0;
	
	
    for(let i = 0; i < cards.length;i++){
    	let cardTitle = document.querySelectorAll('.title')
        let newName = cardTitle[i].innerText.toUpperCase();
        if(!(newName.includes(temp))){
            cards[i].style.display = "none";
            hiddenCards++;
        } else {
            cards[i].style.display = "flex";
        }
        if(hiddenCards === cards.length){
            errormsg.setAttribute('style','display:block !important');
        } else {
            errormsg.setAttribute('style','display:none !important');
        }
    }
}





























