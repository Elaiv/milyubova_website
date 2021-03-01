function setIlluminating() {
	let markedElements = getMarkedElements()
	for (let i of markedElements) {
		contentWrapping(i, " ")
	}
	markedElements = getMarkedElements("char")
	for (let i of markedElements) {
		contentWrapping(i, "")
	}
}

function getMarkedElements(type) {
	switch (type) {
		case "char":
			return document.querySelectorAll(".illumination_label-char")
		default:
			return document.querySelectorAll(".illumination_label")
	}
}

function contentWrapping(el, separator) {
	const text = el.innerHTML
	const wordsArr = text.split(separator)
	let wordsWrappedArr = []
	
	for (let i of wordsArr) {
		wordsWrappedArr.push("<span class='illum'>" + i + "</span>")
	}

	el.innerHTML = wordsWrappedArr.join(separator)
}
