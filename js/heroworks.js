document.getElementById('request-service-area').innerHTML = request_service_area_Html
document.getElementById('already-use-hotel').innerHTML = aleady_use_hotels_html;
document.getElementById('fix-content').innerHTML = popUp_Btn_Html;

// hitory(연혁) 마우스 오버 이벤트 기능 구현
const __historyItem = document.querySelectorAll('.section-6 .middle .year-data .item');
__historyItem.forEach((_item) => {
    const changeActiveclass = (e)=>{
        const oldActiveItem = document.querySelector('.year-data .item.active');      
        const newActiveItem = e.currentTarget;
        if(newActiveItem == oldActiveItem) return;
        oldActiveItem.classList.remove('active');
        newActiveItem.classList.add('active');
    }
    _item.addEventListener('mouseover', changeActiveclass)
})  


const heroworks_07_swiper = new Swiper(".heroworks-07-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    slidesPerView: "auto",
    loopFillGroupWithBlank: true,
    pagination : { // 페이징
		el : '.herowoks-07-swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션
		nextEl : '.herowoks-07-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.herowoks-07-swiper-button-prev', // 이번 버튼 클래스명
	},
    breakpoints: {
        769: {
            freeMode: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        993: {
            freeMode: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});

// 지도 위 반짝이 만들기
const mapFlashEffect = () => {
    const _mapZone = document.querySelector('.item-content .effect');
    // neon-animation
    // 서울 top: 17%; left: 30%;
    // small middle large
    const flashData = [
        { 'type': 'circle', 'size': 'large', 'top' : 17, 'left' : 30, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'large', 'top' : 99, 'left' : 13, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'large', 'top' : 73, 'left' : 82, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'large', 'top' : 22, 'left' : 84, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 60, 'left' : 92, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'large', 'top' : 46, 'left' : 44, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'large', 'top' : 69, 'left' : 28, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 24, 'left' : 40, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 54, 'left' : 76, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 20, 'left' : 19, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 94, 'left' : 11, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'middle', 'top' : 34, 'left' : 44, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 99, 'left' : 5, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 96, 'left' : 20, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 93, 'left' : 5, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 21, 'left' : 32, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'small', 'top' : 20, 'left' : 42, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 22, 'left' : 24, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 15, 'left' : 30, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 26, 'left' : 36, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 37, 'left' : 12, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 76, 'left' : 71, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 70, 'left' : 89, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 71, 'left' : 85, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 75, 'left' : 61, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 19, 'left' : 34, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 19, 'left' : 85, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 24, 'left' : 90, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 49, 'left' : 94, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'small', 'top' : 40, 'left' : 80, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 62, 'left' : 30, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 82, 'left' : 37, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 77, 'left' : 51, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'small', 'top' : 60, 'left' : 60, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 54, 'left' : 26, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 36, 'left' : 51, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 35, 'left' : 39, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'small', 'top' : 65, 'left' : 79, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 13, 'left' : 38, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 17, 'left' : 80, 'color' : 'ff3' },
        { 'type': 'circle', 'size': 'small', 'top' : 17, 'left' : 60, 'color' : 'fff' },
        { 'type': 'circle', 'size': 'small', 'top' : 13, 'left' : 78, 'color' : 'fff' },
        



    ]
    let html = ``
    flashData.forEach((data)=>{
        html += `
            <div 
                class="${data.type} ${data.size} ${data.color}" 
                style="
                    top:${data.top}%; 
                    left:${data.left}%;
                "
            ></div>
        `
    })
    _mapZone.innerHTML = html
}
mapFlashEffect();




// 숫자 카운트 애니메이션
const countAnimation = (className, maxNum, countNum, speed, unit) => {
    let countBox = document.querySelector(`.${className}`)
    let count = 0;
    let counting = setInterval(function () {
        if (count >= maxNum) {
            clearInterval(counting);
            return false;
        }
        count += countNum;
        countBox.innerHTML = (new Intl.NumberFormat().format(count))+`${unit}`;
    }, speed);
}


// 숫자 카운트 타이밍 제어
function checkClassList(element, targetClassList) {
    // element: 감시할 엘리먼트
    // targetClassList: 확인하고자 하는 클래스 이름들을 담은 배열
    const checkInterval = setInterval(() => {
        const currentClassList = element.classList;
        const hasAllClasses = targetClassList.every(className => currentClassList.contains(className));
        if (hasAllClasses) {
            // 원하는 클래스를 모두 가지고 있는 경우에는 setInterval을 멈추고 true를 반환합니다.
            clearInterval(checkInterval);
            countAnimation('cumulative-data', 32942394, 123456, 10, '')
            countAnimation('cumulative-capacity', 60, 1 , 30, 'GB')
            countAnimation('number-of-hotels', 2500,123, 100, '+')
            return true;
        }
    }, 200); // 0.1초 간격으로 엘리먼트의 클래스를 확인합니다.
}
const targetElement = document.querySelector('.heroworks-count-element');
const targetClassList = ['animation-box', 'slide-down'];
checkClassList(targetElement, targetClassList);