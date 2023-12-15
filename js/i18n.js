const winLoaction = window.location;
const lastPath = winLoaction.pathname.split('/').pop().split('.')[0];
const urlParams = new URLSearchParams(winLoaction.search);
const lang = urlParams.get('lang') != 'en' ? 'ko' : 'en'

const htmlElement = document.querySelector('html');
htmlElement.lang = lang;
// i18next 라이브러리 초기화
i18next
.use(i18nextXHRBackend)
.init({
    lng: `${lang}`,                  // 언어 설정
    fallbackLng: 'en',          // 언어 설정에 실패하면 사용할 기본 언어
    backend: {
        loadPath: `../locales/{{lng}}/${lastPath}.json`   // 번역 파일이 위치한 경로
        // loadPath: '../locales/{{lng}}/{{ns}}.json'   // 번역 파일이 위치한 경로
    },
}, (err, t) => {
    translatePage(t);          // 페이지 번역 함수 호출
});

// 언어 변경 버튼 클릭 이벤트 핸들러 등록
document.addEventListener('DOMContentLoaded', () => {
    const __btn_kor = document.querySelectorAll('[data-lang="ko"]')
    const __btn_ENG = document.querySelectorAll('[data-lang="en"]')
    const __lang = document.querySelectorAll('.lang');

    const clickEventFunt = (__btn) => {
        __btn.forEach((_btn)=>{
            _btn.addEventListener('click', (e)=> {
                // const currentLang = i18next.language; 
                const newLang = _btn.getAttribute('data-lang');
                i18next.changeLanguage(newLang, (err, t) => {
                    translatePage(t);        // 페이지 번역 함수 호출
                });
                __lang.forEach((_lang)=>{
                    _lang.classList.remove('ko')
                    _lang.classList.remove('en')
                    _lang.classList.add(`${newLang}`)
                })
                location.href = `?lang=${newLang}`
            });
        });    
    }

    clickEventFunt(__btn_kor);
    clickEventFunt(__btn_ENG);
});

// HTML 엘리먼트에 번역된 텍스트를 설정하는 함수
function translatePage(t) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT') {
            setPlaceholderText(element, t(key));    // input 엘리먼트의 placeholder 설정
        } else {
            setElementText(element, t(key));        // 다른 엘리먼트의 textContent 설정
        }
    });
}

// HTML 엘리먼트의 textContent를 설정하는 함수
const setElementText = (element, text) => {
    console.log(text)
    element.textContent = text;
}

// input 엘리먼트의 placeholder를 설정하는 함수
const setPlaceholderText = (element, text) => {
    element.setAttribute('placeholder', text);
}
