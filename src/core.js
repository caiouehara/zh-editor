let core = {
	container: null,
	allElements: {},
	init: function(cssSelector){
		this.container = createContainer();
		document.querySelector(cssSelector).appendChild(this.container);
	},
	create: function(elementNAME,elementHTML){
	 	this.allElements[elementNAME] = elementHTML;
	},
	appendElements: function(){
		let nodeToAppend = this.container;
		for(element in this.allElements){
			this.container.appendChild(this.allElements[element])
		} 
	}
}

function createContainer(){
	let containerHTML = document.createElement('div');
	containerHTML.setAttribute('id', 'zh-container-element');
	return containerHTML;
}

function createParagraph(){
	let p = document.createElement('p');
	p.setAttribute('contenteditable', 'true');
	return p;
}

function insert(cssProp){
	let sel = document.getSelection();
	if(typeof sel != "undefined" && sel.rangeCount > 0){
		let range = sel.getRangeAt(0);
		console.log(range);
		let span = document.createElement('span');
		span.setAttribute('style', cssProp);
		range.surroundContents(span);
	}
}

core.init('body')
core.create('p', createParagraph());
core.appendElements();

console.log(core.allElements)

// Windows functions for Tests
window.insert = insert;
