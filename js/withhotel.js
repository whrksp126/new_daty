document.getElementById('request-service-area').innerHTML = request_service_area_Html
document.getElementById('fix-content').innerHTML = popUp_Btn_Html;

// 로고 이미지 파일명 저장하는 곳

const hotel_logo_list = [  
    '골드원', '골든튤립', '그라벨','그랜드조선','넘버25',
    '뉴서울','라마다앙코르_해운대','라메르','라발스','라비드아틀란',
    '라한','롯데','루이스','메이인더바이나누고','반디','제이원',
    '베니키아_중문','해비치','베스트루이스해밀턴','베스트웨스턴','베스트웨스턴플러스_부산송도',
    '브라운도트','삼정','선밸리','세븐스텝','센트럴파크부산',

    '솔라리아니시테츠_부산','스위스그랜드','시리우스','신라스테이','씨클라우드',
    '아르반호텔','아만티','아바니센트럴부산','아벤트리','아스티',
    '앨리스앤트렁크','에이본','엘리시아','엠버','영무파라드',
    '위드스테이','이비스버젯','인스테이','제이비디자인','베니키아_양산',
    '카푸치노','칸티뉴','코델리아2','코모도호텔_경주','코모도호텔_부산',

    '타워힐','토스카나','파크하얏트','펠릭스바이STX','프린스',
    '하운드_남포','베니키아_해운대','해운대센텀','호델JCS여수','호메르스',
    '호텔토마스명동','호텔티티','호텔포레더스파','호텔포레프리미어','호텔포코성수',
    '히든클리프','힐튼가든인'
]
// const hotel_logo_list = [
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',

//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',

//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
//     'logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선','logo_그랜드조선',
// ]

const createLogoListHtml = (logoList, maxCardImg, maxListImg, device) => {
    let html = ``
    html += `<div class="swiper withhotel-01-swiper ${device}">`
    html += `<div class="swiper-wrapper">`
    logoList.forEach((logo, index)=>{
        if(index%maxCardImg===0) html += `<div class="swiper-slide"><div class="card">`
        if(index%maxListImg===0) html += `<div class="logo-list">`
        html += `<div class="logo-item"><img src="../static/images/common/hotel_logos/${logo}.png" alt=""></div>`
        if((index+1)%maxListImg===0 || index+1 === logoList.length) html += `</div>`
        if((index+1)%maxCardImg===0 || index+1 === logoList.length) html += `</div></div>`
    })
    html += `</div>`
    html += `</div>`
    return html;
}
const desktopWithhotelSwiper = createLogoListHtml(hotel_logo_list, 25, 5, 'desktop');
const tabletWithhotelSwiper = createLogoListHtml(hotel_logo_list, 15, 5, 'tablet');
const mobileWithhotelSwiper = createLogoListHtml(hotel_logo_list, 10, 5, 'mobile');

document.querySelector('.section-1 .content').insertAdjacentHTML('afterbegin', desktopWithhotelSwiper);
document.querySelector('.section-1 .content').insertAdjacentHTML('afterbegin', tabletWithhotelSwiper);
document.querySelector('.section-1 .content').insertAdjacentHTML('afterbegin', mobileWithhotelSwiper);

const withhotel_01_swiper = new Swiper(".withhotel-01-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
	navigation : { // 네비게이션
		nextEl : '.withhotel-01-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.withhotel-01-swiper-button-prev', // 이번 버튼 클래스명
	}
});

const withhotel_03_swiper = new Swiper(".withhotel-03-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation : { // 네비게이션
		nextEl : '.withhotel-03-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.withhotel-03-swiper-button-prev', // 이번 버튼 클래스명
	}
})
