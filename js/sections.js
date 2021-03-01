function setCollapsibles() {
	const collapsibles = document.querySelectorAll(".collapsible")
	for (let i of collapsibles) {
		const btn_collapse = i.querySelector(".collapse_btn")
		const section = i.querySelector(".collapse_section")
		section.parent = i;
		btn_collapse.state = false
		
		btn_collapse.addEventListener("click", function(e) {
			const isCollapsed = i.getAttribute("data-collapsed") === "true"
			if (isCollapsed) {
				btn_collapse.classList.add("active")
				expandSection(section)
				i.setAttribute("data-collapsed", "false")
			} else {
				if (btn_collapse.classList.contains("active")) {
					btn_collapse.classList.remove("active")
				}
				collapseSection(section)
			}
		})
	}
}

function fastCollapseSection(element) {
	element.style.height = 0 + "px"
	element.parent.setAttribute("data-collapsed", 'true')
}

function collapseSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight	
	// temporarily disable all css transitions
	var elementTransition = element.style.transition
	element.style.transition = ""
	// on the next frame (as soon as the previous style change has taken effect),
	// explicitly set the element's height to its current pixel height, so we 
	// aren't transitioning out of 'auto'
	requestAnimationFrame(function() {
		element.style.height = sectionHeight + "px"
		element.style.transition = elementTransition
+
		requestAnimationFrame(function() {
			element.style.height = 0 + "px"
		})
	})


	// mark the section as "currently collapsed"
	element.parent.setAttribute("data-collapsed", 'true')
	if (element.classList.contains("addMargin")) {
		element.classList.remove("addMargin")
	}
}

function expandSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight
	// have the element transition to the height of its inner content
	element.style.height = sectionHeight + "px"
	// when the next css transition finishes (which should be the one we just triggered)
	element.addEventListener("transitionend", function(e) {
		// remove this event listener so it only gets triggered once
		element.removeEventListener("transitionend", arguments.callee)
		// remove "height" from the element's inline styles, so it can return to its initial value
		element.style.height = null
	})
	// mark the section as "currently not collapsed"
	element.parent.setAttribute("data-collapsed", "false")
	element.classList.add("addMargin")
}