const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

// 회원가입버튼을 눌렀을때 성공하려면 작성되어야하는 조건들
btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('username', 2)) e.preventDefault();
	if (!isTxt('userid', 5)) e.preventDefault();
	if (!isPwd('pwd1', 'pwd2', 8)) e.preventDefault();
	if (!isEmail('email')) e.preventDefault();
	if (!isCheck('gender')) e.preventDefault();
});
// username
function isTxt(el, len) {
	if (len === undefined) len = 2;
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;

	if (txt.length >= len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelectorAll('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append(`입력항목을 ${len}글자 이상 입력하세요.`);
		input.closest('td').append(errMessage);
		return false;
	}
}
// id
function isTxt(el, len) {
	if (len === undefined) len = 2;
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;

	if (txt.length >= len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append(`입력항목을 ${len}글자 이상 입력하세요.`);
		input.closest('td').append(errMessage);
		return false;
	}
}
// e-mail
function isEmail(el) {
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;
	if (/@/.test(txt)) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append(`@를 포함한 전체 이메일 주소를 입력하세요.`);
		input.closest('td').append(errMessage);
		return false;
	}
}
// gender
function isCheck(el) {
	let inputs = form.querySelectorAll(`[name=${el}]`);
	let isCheck = false;

	for (let el of inputs) {
		if (el.checked) isCheck = true;
	}

	if (isCheck) {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

		let errMessage = document.createElement('p');
		errMessage.append('체크해주세요.');
		inputs[0].closest('td').append(errMessage);
		return false;
	}
}

function isPwd(el1, el2, len) {
	let pwd1 = form.querySelector(`[name=${el1}]`);
	let pwd2 = form.querySelector(`[name=${el2}]`);
	let pwd1_value = pwd1.value;
	let pwd2_value = pwd2.value;
	//패스워드에서 사용해야되는 숫자,문자,특수문자
	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[~!@#$%^&*()_+?><]/;

	const errMsgWrap = pwd1.closest('td');
	function addErr(msg) {
		const errMessage = document.createElement('p');
		errMessage.textContent = msg;
		errMsgWrap.append(errMessage);
	}
	function removeErr() {
		const errMessage = errMsgWrap.querySelector('p');
		if (errMessage) {
			errMessage.remove();
		}
	}

	if (
		pwd1_value === pwd2_value &&
		pwd1_value.length >= len &&
		num.test(pwd1_value) &&
		eng.test(pwd1_value) &&
		spc.test(pwd1_value)
	) {
		removeErr();
		return true;
	} else {
		removeErr();
		let errMsg = '비밀번호는 ';
		if (pwd1_value.length < len) {
			errMsg += `${len}글자 이상,`;
		}
		if (!num.test(pwd1_value)) {
			errMsg += `숫자를 포함,`;
		}
		if (!eng.test(pwd1_value)) {
			errMsg += `영문을 포함,`;
		}
		if (!spc.test(pwd1_value)) {
			errMsg += `특수문자를 포함,`;
		}
		errMsg += `동일하게 입력하세요`;
		addErr(errMsg);
		return false;
	}
}
