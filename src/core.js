let core = {
	mainElement: null,
	allElements: {},
	init: function(cssSelector){
		this.mainElement = createMainElement();
		document.querySelector(cssSelector).appendChild(this.mainElement);
	},
	create: function(elementNAME,elementHTML){
	 	this.allElements[elementNAME] = elementHTML;
	},
	appendElements: function(){
		let nodeToAppend = this.mainElement;
		for(element in this.allElements){
			this.mainElement.appendChild(this.allElements[element])
		} 
	}
}

function createMainElement(){
	let mainHTML = document.createElement('div');
	mainHTML.setAttribute('id', 'zh-main-element');
	return mainHTML;
}

function createParagraph(){
	let p = document.createElement('p');
	p.setAttribute('contenteditable', 'true');
	return p;
}

core.init('body')
core.create('p', createParagraph());
core.appendElements();

console.log(core.allElements)
