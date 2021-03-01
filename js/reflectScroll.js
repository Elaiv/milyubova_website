const bgPosStart = -190
const bgPosEnd = 130
const optBgStart = 0
const optBgEnd = bgPosEnd - bgPosStart
const deltaBgPos = bgPosEnd - optBgEnd

document.addEventListener("scroll", moveReflect)

function moveReflect() {
	const reflect = document.querySelector(".aboutMe_avatar-reflectLight")
	const box = reflect.getBoundingClientRect()

	const scrollStart = -box.height
	const scrollEnd = window.innerHeight

	if ((box.y < scrollEnd) && (box.y > scrollStart)) {
		const optScrollEnd = scrollEnd - scrollStart
		const deltaScroll = optScrollEnd - scrollEnd
		
		let val = (box.y + deltaScroll) * optBgEnd / optScrollEnd + deltaBgPos
		reflect.style.backgroundPositionX = -val + "px"
		reflect.style.backgroundPositionY = val + "px"
	}
	
}