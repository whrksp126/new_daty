document.getElementById('request-service-area').innerHTML = request_service_area_Html
document.getElementById('fix-content').innerHTML = popUp_Btn_Html;

const daty_03_01_swiper = new Swiper(".daty-03-01-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation : { // 네비게이션
		nextEl : '.daty-03-01-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.daty-03-01-swiper-button-prev', // 이번 버튼 클래스명
	},
});
const daty_03_02_swiper = new Swiper(".daty-03-02-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation : { // 네비게이션
		nextEl : '.daty-03-02-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.daty-03-02-swiper-button-prev', // 이번 버튼 클래스명
	},
});
const daty_03_03_swiper = new Swiper(".daty-03-03-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation : { // 네비게이션
		nextEl : '.daty-03-03-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.daty-03-03-swiper-button-prev', // 이번 버튼 클래스명
	},
});
const daty_03_04_swiper = new Swiper(".daty-03-04-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation : { // 네비게이션
		nextEl : '.daty-03-04-swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.daty-03-04-swiper-button-prev', // 이번 버튼 클래스명
	},
});

// 가격 레이어 버튼 클릭 시 애니메이션 제어
document.querySelectorAll('.section-4 .tab button').forEach((_button)=>{
  _button.addEventListener('click', ()=>{
    document.querySelectorAll('.section-4 .cards .card').forEach((card)=>{
      card.classList.remove('slide-up');
      setTimeout(function() {
        card.classList.add('slide-up');
      }, 10);
    })

  })
})