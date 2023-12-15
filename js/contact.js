if(lang == 'en') {
    const engPlaceholder = ['Enter name of responsible person.','Enter your job title.','Enter hotel name.','Enter company name.','Enter email address.','Enter business address.','Enter reachable phone number.','Enter inquiry/message.'];
    const __input = document.querySelectorAll('form .inputs .input-line input, form .inputs .input-line textarea');
    __input.forEach((input, index) => input.placeholder = engPlaceholder[index]);
}

// 동적인 유효성 검사 기능 구현 
const changeValidateForm = (event) => {
    const __inputRequired = document.querySelectorAll('input.partner,input.service')
    __inputRequired.forEach((_input) => _input.required = !_input.required)
}   

// 전체 동의 버튼 기능 구현
const checkAllHandler = (event) => {
    const inputTerms = document.querySelectorAll('.input-terms');
    inputTerms.forEach((input)=>input.checked = event.target.checked)
}
// 체크 박스 하나라도 풀려있으면 전체동의 체크 해제
const checkNotAllHandler = (event) => {
    const checkAll = document.querySelector('.check-all')
    if(!event.target.checked) checkAll.checked = false;
}

// 콘텍트 이용문의 신청 메일 보내기 
const sendEmail_u = (event) => {
    event.preventDefault()

    emailjs.init('SqB79iuYjv-ARx8eT');
    let templateParams = new Object();
    // name : 이름, position : 직책, company_name : 호텔명, tell : 전화번호, email : 이메일, address : 주소, content : 추가 요청사항, check_service : 서비스 약관, check_privacy : 개인정보 약관, check_marketing : 마케팅 수신 동의, type : 서비스 이용 문의 or 파트너 및 제휴 문의

    document.querySelectorAll('.inputs input').forEach((input)=>{
        if(!templateParams[input.name]) templateParams[input.name] = input.value;
    })
    document.querySelectorAll('.checkboxs .input-terms').forEach((input)=>{
        templateParams[input.name] = input.checked;
    })
    const type = document.querySelector('input[name="inquiry"]:checked').value
    templateParams['type'] = type === 'service' ? '서비스 이용 문의' : '파트너 및 제휴 문의';

    const requiredCheckBox = document.querySelectorAll('.checkboxs input[name="check_service"], .checkboxs input[name="check_privacy"]');
    let isPerfect = true;
    requiredCheckBox.forEach((checkbox)=>{
        if(!checkbox.checked) {
            isPerfect = false;
            checkbox.addEventListener('input', () => checkbox.classList.remove('invalid'));
            return checkbox.classList.add('invalid');
        }
    })
    if(!isPerfect) return alert('약관에 동의가 필요합니다.');

    // 유효성 검사
    if(!isValidText(templateParams['name'], 2)) return alert('이름을 올바르게 작성해주세요')
    if(!isValidText(templateParams['company_name'], 2)) return alert('호텔명을 올바르게 작성해주세요')
    if(!isValidEmail(templateParams['email'])) return alert('이메일을 올바르게 작성해주세요')
    if(!isValidPhoneNumber(templateParams['tell'])) return alert('전화번호를 올바르게 작성해주세요')
    if(!isValidText(templateParams['content'], 5)) return alert('문의 내용을 올바르게 작성해주세요')
    emailjs
        .send('contact_user', 'template_v0mdmlg', templateParams)
        .then(function(response){}, function(error){
            alert('문의하기에 실패하셨습니다. 다시 새로고침 후 다시 시도해 주세요.');
    })
    alert('접수가 완료되었습니다. \n접수하신 내용은 빠르게 확인하여 답변드리겠습니다.');
}


// 전화번호 유효성 검사
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^(\+?\d{1,3}[\s-]?)?\(?\d{2,3}\)?[\s-]?\d{3,4}[\s-]?\d{4}$/;
    return phoneRegex.test(phoneNumber.trim());
}  
// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email.trim());
}
// 텍스트 유효성 검사
function isValidText(text, minLength) {
    return text.trim().length >= minLength;
}



// 모달 열기 위한 요소 선택
const _modal = document.querySelector(".modal");


// 모달 배경 클릭 시 모달 닫기
window.onclick = function (event) {
    if (event.target == _modal) _modal.classList.remove("show");
}

const typeKey = {
    service : terms_of_service_html,
    personal : ollection_of_personal_information_html,
    receive : receive_information_html
}

// 버튼을 클릭하면 모달 열기
const openModal = (type) => {
    document.getElementById('modal').innerHTML = typeKey[type]
    _modal.classList.add("show");
    // 모달을 닫기 위한 <span> 요소 선택
    const _modalCloseBtn = document.querySelector(".close");

    // 닫기 버튼 클릭 시 모달 닫기
    _modalCloseBtn.onclick = function () {
        _modal.classList.remove("show");
    }
}


const baseModal = `
    <div class="modal">
        <div class="modal-content">
            <div class="modal-top">
                <h1>데이터메니티 이용약관 (v1.0)</h1>
                <i class="ph-x close"></i>
            </div>
            <div class="modal-body">
                <ul class="guide">
                    <li>
                        <h2></h2>
                        <ul class="guide-list">
                            <li>
                                <h3></h3>
                                <p></p>
                            </li>
                            <li>
                                <h3></h3>
                                <ul class="number">
                                    <li>
                                        <span>1.</span>
                                        <p></p>
                                        <ul class="number-list">
                                            <li>
                                                <span>①</span>
                                                <p></p>
                                            </li>
                                            <li>
                                                <span>②</span>
                                                <p>
                                                </p>
                                            </li>
                                            <li>
                                                <span>③</span>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>2.</span>
                                        <p></p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>   
                </ul>
            </div>
        </div>
    </div>
`




