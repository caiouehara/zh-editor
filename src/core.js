let core = {
	allElements: {},
	init: function(cssSelector){
		let mainHTML = createMainElement()
		this.create("main", mainHTML)
		document.querySelector(cssSelector).appendChild(mainHTML);
	},
	create: function(elementNAME,elementHTML){
	 	this.allElements[elementNAME] = elementHTML;
	}
}

function createMainElement(){
	let mainHTML = document.createElement('div');
	mainHTML.setAttribute('id', 'zh-main-element');
	mainHTML.setAttribute('contenteditable', 'true');
	return mainHTML;
}

core.init('body')
console.log(core.allElements)
