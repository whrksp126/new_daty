
const _header = document.querySelector('.header')
const _mobileHeader = document.querySelector('.mobile-header');
const _mobileHeroTab = document.querySelector('.nav-heroworks')

// 모바일 해더 메뉴 버튼 클릭 시
const clickMobileMenu = (e) => {
    _mobileHeader.classList.toggle('show');
}
// 모바일 해더 메뉴 닫기
const closeMobileMenu = (e) => {
    _mobileHeader.classList.remove('show');
    _mobileHeroTab.classList.remove('show');
}

// 모바일 메뉴에 탭 히어로 탭 클릭 시
const clickHeroTab = (e) => {
    _mobileHeroTab.classList.toggle('show');
}

// 화면 가로길이 확인
const checkScreenWidth = () => {
    if (window.innerWidth >= 768) {
        _mobileHeader.classList.remove('show')
    }
}
window.addEventListener('resize', checkScreenWidth);

// 화면 스크롤 위치 확인
const changeHeaderColor = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
        _header.classList.add('color');
    } else {
        _header.classList.remove('color');
    }
}
window.addEventListener('scroll', changeHeaderColor);



// winLoaction, lastPath, urlParams, lang 은 i18n에 선언됨;
const __lang = document.querySelectorAll('.lang');
__lang.forEach((_lang)=>{
    _lang.classList.add(`${lang}`)
})
const __headerNav = document.querySelectorAll('.header-nav');
__headerNav.forEach((_headerNav)=>{
    _headerNav.classList.add(`${lastPath}`)
})


const _popupCloseBtn = document.querySelector('.popup-close');
const _popup = document.querySelector('.popup');
const _popupCloseToday = document.querySelector('.popup-close-today');

// 팝업을 보여주는 함수
function showPopup() {
    _popup.style.display = 'block';
}
// 팝업을 닫는 함수
function closePopup() {
    _popup.style.display = 'none';
}
// 오늘 하루 그만보기 버튼을 눌렀을 때 처리하는 함수
function closePopupToday() {
    if (_popupCloseToday.checked) {
        localStorage.setItem('popupClosedToday', 'true'); // 로컬 스토리지에 값을 저장
    }
}
// 페이지 로드 시 팝업을 보여줄지 결정하는 함수
function showPopupIfNeeded() {
    if (!localStorage.getItem('popupClosedToday')) { // 로컬 스토리지에 값이 없으면 팝업을 보여줌
        showPopup();
    }
}
document.addEventListener('DOMContentLoaded', showPopupIfNeeded);
_popupCloseBtn.addEventListener('click', function() {
    if (_popupCloseToday.checked) {
        closePopupToday(); // 오늘 하루 그만 보기 버튼이 체크되어 있으면 처리
    }
    closePopup();
});


window.addEventListener('scroll', () => {
    if(!document.querySelector('#fix-content'))return;
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
	let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
    let footerHeight = document.querySelector('#footer').offsetHeight
    const moveTime = fullHeight - windowHeight - footerHeight; 
    if(scrollLocation > moveTime) {
        let addHeight = scrollLocation - moveTime + 40;
        document.querySelector('#fix-content').style.bottom = `${addHeight}px`;
    }else{
        document.querySelector('#fix-content').style.bottom = `40px`
    }
})