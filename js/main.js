const gnbCall = document.querySelector('.gnbCall');
const moTitle = document.querySelector('.moTitle');
// 스크롤 변수
const sections = document.querySelectorAll('section');
let positionArray = [];

//햄버거버튼 활성화, 비활성화
gnbCall.addEventListener('click', function (e) {
	e.preventDefault();
	let isOn = gnbCall.classList.contains('on');

	if (isOn) {
		gnbCall.classList.remove('on');
	} else {
		gnbCall.classList.add('on');
	}
	let isOnMo = moTitle.classList.contains('on');
	if (isOnMo) {
		moTitle.classList.remove('on');
	} else {
		moTitle.classList.add('on');
	}
});

// 스크롤
// offsetTop값을 구하기
function setPosition() {
	for (let el of sections) {
		positionArray.push(el.offsetTop);
	}
}
setPosition();
console.log(positionArray); //[0:1340  1:2196  2:2843]

window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;
	sections.forEach((el, index) => {
		if (scroll >= positionArray[index]) {
			for (let el of sections) {
				el.classList.remove('on');
			}
			sections[index].classList.add('on');
		}
	});
});
