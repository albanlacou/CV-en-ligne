const COURSES = {
  1: {id: 1, img: 'ux_ui.jpg', title: 'UX/UI', initial_price: 200, price: 9.99, mark: 4, stock: 10},
  2: {id: 2, img: 'php_8.png', title: 'PHP 8', initial_price: 200, price: 9.99, mark: 3, stock: 10},
  3: {id: 3, img: 'react_js.png', title: 'React JS', initial_price: 200, price: 9.99, mark: 2, stock: 5},
  4: {id: 4, img: 'node_js.jpg', title: 'Node JS', initial_price: 200, price: 9.99, mark: 5, stock: 3},
  5: {id: 5, img: 'my_sql.png', title: 'MySQL', initial_price: 200, price: 9.99, mark: 4, stock: 2}
}

loadCours()




/*laodcours
	this function load the article in courses and create an contenaire un html with all the Article's info

*/
function loadCours(){
	
	let list = document.querySelector('.courses__container');
	
	for(let i = 1;i<=Object.keys(COURSES).length;i++){
		let newDiv = document.createElement('div');
		newDiv.setAttribute("class","coursescontainer");
		list.appendChild(newDiv);

		let newDiv2 = document.createElement('div');
		newDiv2.setAttribute("class","course__item");
		newDiv.appendChild(newDiv2)

		let newFigure = document.createElement('figure');
		newFigure.setAttribute("class","course_img");
		newDiv2.appendChild(newFigure)

		let newImg = document.createElement('img');
		newImg.setAttribute("src","img/courses/"+COURSES[i].img);
		newFigure.appendChild(newImg)

		let newDiv3 = document.createElement('div');
		newDiv3.setAttribute("class","info__card");
		newDiv2.appendChild(newDiv3);

		let newH4 = document.createElement('h4');
		let newText = document.createTextNode(COURSES[i].title);
		newH4.setAttribute('class','title')
		newH4.appendChild(newText)
		newDiv3.appendChild(newH4);

		let newFigure2 = document.createElement('figure');
		newFigure2.setAttribute("class","mark m_"+COURSES[i].mark);
		newDiv3.appendChild(newFigure2)
		
		let newImg2 = document.createElement('img');
		newImg2.setAttribute("src","img/rates.png");
		newFigure2.appendChild(newImg2)

		let newP = document.createElement('p');
		newDiv3.appendChild(newP);

		let newSpan = document.createElement('span');
		newSpan.setAttribute('class','price')
		let newText2 = document.createTextNode(COURSES[i].initial_price);
		newSpan.appendChild(newText2)
		newP.appendChild(newSpan)

		let newSpan2 = document.createElement('span');
		newSpan2.setAttribute('class','discount')
		let newText3 = document.createTextNode(COURSES[i].price+"€");
		newSpan2.appendChild(newText3)
		newP.appendChild(newSpan2)

		let newP2 = document.createElement('p');
		let newText4 = document.createTextNode("Disponible:");
		newP2.appendChild(newText4)
		newDiv3.appendChild(newP2);

		let newSpan3 = document.createElement('span');
		newSpan3.setAttribute('class','stock')
		let newText5 = document.createTextNode(" "+COURSES[i].stock);
		newSpan3.appendChild(newText5)
		newP2.appendChild(newSpan3)

		let newA = document.createElement('a');
		let newText6 = document.createTextNode("Ajouter au panier");
		
		newA.setAttribute('href','#')
		newA.setAttribute('class','add-to-cart')
		newA.setAttribute('data-id',COURSES[i].id)
		newDiv3.appendChild(newA)

		let newI = document.createElement('i');
		newI.setAttribute('class',"fa fa-cart-plus")
		newA.appendChild(newI)
		newA.appendChild(newText6)

	}





}