const mobile_header_Html = `
    <div class="mobile-header">
        <div class="background" onclick="closeMobileMenu(event);"></div>
        <div class="card-tag">
            <div class="top">
                <button onclick="closeMobileMenu(event);"><i class="ph-x"></i></button>
            </div>
            <nav class="center header-nav">
                <ul>
                    <li class="daty"><a href="daty" data-i18n="데이터메니티">데이터메니티</a></li>
                    <li class="withhotel"><a href="withhotel" data-i18n="함께하는 호텔" >함께하는 호텔</a></li>
                    <li class="nav-heroworks heroworks">
                        <button data-i18n="히어로웍스" onclick="clickHeroTab(event)">히어로웍스</button>
                        <ul>
                            <li><a data-i18n="비전과 하는 일" href="heroworks">비전과 하는 일</a></li>
                            <li><a data-i18n="팀 문화" href="https://www.heroworks.co.kr/teamculture">팀 문화 <i class="ph-arrow-square-out"></i></a></li>
                            <li><a data-i18n="채용 공고" href="https://www.heroworks.co.kr/employment">채용 공고 <i class="ph-arrow-square-out"></i></a></li>
                        </ul>
                    </li>
                    <li class="contact"><a data-i18n="문의하기" href="contact">문의하기</a></li>
                </ul>
            </nav>
            <div class="flex1"></div>
            <div class="bottom">
                <ul class="lang">
                    <li><button data-lang="ko" href="#">KOR</button></li>
                    
                    <li><button data-lang="en" href="#">ENG</button></li>
                </ul>
            </div>
        </div>
    </div>
`

const header_html = `
    <div class="header-container">
        <a class="logo left" href="main">
            <img img-type="color-logo" src="../static/images/common/logo_datamenity.png" alt="데이터메니티 로고">
            <img img-type="white-logo" src="../static/images/common/logo_datamenity_white.png" alt="데이터메니티 로고">
        </a>
        <nav class="center header-nav">
            <ul>
                <li class="daty"><a data-i18n="데이터메니티" href="daty">데이터메니티</a></li>
                <li class="withhotel"><a data-i18n="함께하는 호텔" href="withhotel">함께하는 호텔</a></li>
                <li class="dropdown-container-hover heroworks">
                    <button data-i18n="히어로웍스">히어로웍스</button>
                    <div>
                        <ul class="dropdown-content">
                            <li><a href="heroworks"><span data-i18n="비전과 하는 일">비전과 하는 일</span></a></li>
                            <li><a href="https://www.heroworks.co.kr/teamculture"><span data-i18n="팀 문화">팀 문화</span><i class="ph-arrow-square-out"></i></a></li>
                            <li><a href="https://www.heroworks.co.kr/employment"><span data-i18n="채용 공고">채용 공고</span><i class="ph-arrow-square-out"></i></a></li>
                        </ul>
                    </div>
                </li>
                <li class="contact"><a data-i18n="문의하기" href="contact">문의하기</a></li>
            </ul>
        </nav>
        <div class="right">
            <ul class="lang">
                <li class="ko"><button data-lang="ko">KOR</button></li>
                <li class="en"><button data-lang="en">ENG</button></li>
            </ul>
            <a class="login" data-i18n="로그인" href="https://app.datamenity.com/">로그인</a>
        </div>
        <button class="btn-header-list" onclick="clickMobileMenu(event)"><i class="ph-list"></i></button>
    </div>        
`

const footer_html = `
<div class="footer-container">
    <div class="left">
        <div class="logo">
            <a href="main">
                <img src="../static/images/common/logo_datamenity_gray.png" alt="">
            </a>
        </div>
        <div class="text">
            <div>
                <div class="disc" title="address">
                    <strong data-i18n="본사">본사 </strong>
                    <span data-i18n="부산광역시 해운대구">부산광역시 해운대구 </span>
                    <br class="en-mobile">
                    <span data-i18n="센텀서로30 KNN타워 20층">센텀서로30, KNN타워 20층</span>
                    <span class="other-text-bar">|</span>
                </div>
                <!--div class="disc" title="address">
                    <strong data-i18n="본사">본사 </strong>
                    <span data-i18n="서울 강남구 테헤란로 142">서울 강남구 테헤란로 142 </span>
                    <br class="en-mobile">
                    <span data-i18n="(역삼동, 캐피탈타워) 위워크 5층">(역삼동, 캐피탈타워) 위워크 5층</span>
                    <br class="en-mobile">
                    <span class="other-text-bar">|</span>
                </div-->
                <div class="disc" title="tel">
                    <strong >TEL </strong>1544-2618<span class="other-text-bar">|</span>
                </div>
                <div class="disc" title="email">
                    <strong>E-MAIL </strong>help@heroworks.co.kr <span class="other-text-bar">|</span>
                </div>
                <div class="disc" title="cs">
                    <strong>CS </strong>09:00 ~ 18:00 (<span data-i18n="점심시간">점심시간</span> 12:30~13:30)
                </div>
            </div>
            <p>© 2023 Heroworks, All Rights Reserved.</p>
        </div>
    </div>
    <div class="right">
        <a href="https://www.heroworks.co.kr/" class="logo">
            <img src="../static/images/common/logo_heroworks_gray.png" alt="">
            <i class="ph-arrow-square-out"></i>
        </a>
        <div class="sns-links">
            <a target="_brank" href="https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_WgJfs%2Fchat"><img src="../static/images/common/icon_kakaotalk.png" alt=""></a>
            <a target="_brank" href="https://www.linkedin.com/company/heroworks"><img src="../static/images/common/icon_linkedin.png" alt=""></a>
            <a target="_brank" href="https://www.instagram.com/datamenity_business/"><img src="../static/images/common/icon_instagram.png" alt=""></a>
            <a target="_brank" href="https://www.facebook.com/DatAmenity"><img src="../static/images/common/icon_facebook.png" alt=""></a>
           <a target="_brank" href="https://blog.naver.com/datamenity"><img src="../static/images/common/icon_blog.png" alt=""></a>
        </div>
    </div>
</div>
`

// 우측 하단 픽스 버튼(무료신청) 
const popUp_Btn_Html = `
    <a href="contact" class="fix-btn">
        <span data-i18n="무료">무료</span>
        <span data-i18n="이용">이용</span>
        <span class="hidden-text" data-i18n="신청하기 👀">신청하기 👀</span>
    </a>
`

// 팝업
const pupUpImgHtml = `
    <div class="popup">
        <div class="popup-container">
            <div class="popup-buttons">
                <label>
                    <input type="checkbox" class="popup-close-today"> 오늘 하루 그만 보기
                </label>
                <button class="popup-close">닫기</button>
            </div>
            <a target="_brank" href="https://blog.naver.com/datamenity/223087832241">
                <img src="../static/images/popup/비대면 바우처 공급기업 선정_팝업_230512.png" alt="비대면 서비스 바우처">
            </a>
        </div>
    </div>
    
    <!--div class="popup">
        <div class="popup-container">
            <div class="popup-buttons">
                <label>
                    <input type="checkbox" class="popup-close-today"> 오늘 하루 그만 보기
                </label>
                <button class="popup-close">닫기</button>
            </div>
            <div>
                <img src="../static/images/popup/비대면 바우처_230427_1.png" alt="비대면 서비스 바우처">
                <a class="popup-btn-01" target="blank" href="https://blog.naver.com/datamenity/223087832241"></a>
                <a class="popup-btn-02" target="blank" href="https://docs.google.com/forms/d/1PLWGApA5o75yC_YEawq2LrwkOJhL1PHO_8DOv3RfsNc/edit"></a>
            </div>
        </div>
    </div-->
`

document.getElementById('mobile-header').innerHTML = mobile_header_Html;
document.getElementById('header').innerHTML = header_html;
document.getElementById('footer').innerHTML = footer_html;
document.getElementById('footer').insertAdjacentHTML('afterend', pupUpImgHtml)

const request_service_area_Html = `
    <div class="container">
        <div class="text animation-box" data-animation="fade-in">
            <h2>
                <span data-i18n="스마트한 호텔">스마트한 호텔</span>
                <br class="en-desktop en-tablet en-mobile">
                <span data-i18n="수익관리">수익관리</span>,
                <br>
                <span data-i18n="데이터메니티로 시작하세요">데이터메니티로 시작하세요</span>
            </h2>
            <div class="buttons">
                <a href="contact" class="btn m-btn btn-white-outline" data-i18n="서비스 신청하기">서비스 신청하기</a>
            </div>
        </div>
        <div class="item-img animation-box" data-animation="slide-up">
            <img src="../static/images/main/item_08_01_pc.png" alt="">
        </div>
    </div>
`
// 로고 이미지 파일명 저장하는 곳

const aleady_use_hotel_logo_list = [
    [ 
        '골드원','골든튤립','그라벨','그랜드조선','넘버25','뉴서울','라마다앙코르_해운대','라메르','라발스','라비드아틀란',
        '라한','롯데','루이스','메이인더바이나누고','반디','베니키아_양산','베니키아_중문','베니키아_해운대','베스트루이스해밀턴','베스트웨스턴',
        '베스트웨스턴플러스_부산송도','브라운도트','삼정','선밸리','세븐스텝','센트럴파크부산','솔라리아니시테츠_부산','스위스그랜드','시리우스','신라스테이',
        '씨클라우드','아르반호텔','아만티','아바니센트럴부산'
    ],
    [   
        '아벤트리','아스티','앨리스앤트렁크','에이본','엘리시아','엠버','영무파라드','위드스테이','이비스버젯','인스테이',
        '제이비디자인','제이원','카푸치노','칸티뉴','코델리아2','코모도호텔_경주','코모도호텔_부산','타워힐','토스카나','파인리즈리조트',
        '파크하얏트','펠릭스바이STX','프린스','하운드_남포','해비치','해운대센텀','호델JCS여수','호메르스','호텔토마스명동','호텔티티',
        '호텔포레더스파','호텔포레프리미어','호텔포코성수','히든클리프','힐튼가든인'
    ]
]
const create_already_html = (logo_list) => {
    let html = `
        <div class="container">
            <div class="text animation-box" data-animation="slide-down">
                <h2>
                    <span data-i18n="이미 국내에서도">이미 국내에서도</span><br class="mobile">
                    <span data-i18n="수많은 호텔들이">수많은 호텔들이</span><br>
                    <strong data-i18n="데이터기반 수익관리를">데이터기반 수익관리를 </strong><br class="mobile">
                    <strong data-i18n="시작했어요 🏨">시작했어요 🏨</strong>
                </h2>
            </div>
            <div class="middle">
                <div class="blur blur-left"></div>
                <div class="blur blur-right"></div>
                <div class="slider">
    `
    
    logo_list.forEach((list, index)=>{
        html +=     `<div class="slide-track slide-${index+1}">`
        for(let i=0; i<4; i++){ // 4는 화면 width가 긴 경우를 대비하여 이미지를 4번 더 반복한 것
            list.forEach((logo)=>{
                html +=     `
                            <div class="slide">
                                <img src="../static/images/common/hotel_logos/${logo}.png" alt="">
                            </div>
                        `
            })
        }
        html +=     `</div>`
    })
    html +=     `
                </div>
            </div>
            <div class="bottom">
                <a href="withhotel" data-i18n="고객 사례 더보기" class="btn m-btn btn-white-outline">
                    고객 사례 더보기
                </a>
            </div>
        </div>
        `;
    return html;
}
const aleady_use_hotels_html = create_already_html(aleady_use_hotel_logo_list);