const gnbCall = document.querySelector('.gnbCall');
const moTitle = document.querySelector('.moTitle');

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
