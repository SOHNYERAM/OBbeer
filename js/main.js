const gnbCall = document.querySelector('.gnbCall');
const moTitle = document.querySelector('.moTitle');
// 스크롤 변수
// const sections = document.querySelectorAll('section');
const scrollView = document.querySelectorAll('.scrollView');
const base = -window.innerHeight / 2 - 350;
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
	for (let el of scrollView) {
		positionArray.push(el.offsetTop);
	}
}
setPosition();
console.log(positionArray);

window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;
	scrollView.forEach((el, index) => {
		if (scroll >= positionArray[index] + base) {
			// for (let el of sections) {
			// 	el.classList.remove('on');
			// }
			scrollView[index].classList.add('on');
		}
	});
});
// 서브페이지 첫 화면 로드
const load = document.querySelector('.load');
window.addEventListener('load', () => {
	load.classList.add('on');
});
