document.getElementById('request-service-area').innerHTML = request_service_area_Html
document.getElementById('already-use-hotel').innerHTML = aleady_use_hotels_html;
document.getElementById('fix-content').innerHTML = popUp_Btn_Html;

const main_02_swiper = new Swiper(".main-02-swiper", {
  spaceBetween: 100,
  navigation: {
    nextEl: ".main-02-swiper-button-next",
    prevEl: ".main-02-swiper-button-prev",
  },
});

const main_03_swiper = new Swiper(".main-03-swiper", {
  // effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    scale: 1,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".main-03-swiper-button-next",
    prevEl: ".main-03-swiper-button-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 1.3
    },
  }
});

const __scroll_item = document.querySelectorAll('.scroll-item')
__scroll_item.forEach((_section,index)=>{
  _section.setAttribute('data-scroll-id', index)
  const html = `
    <button 
      data-scroll-target="${ index == 7 ? 1 : index+1}" 
      class="ph ${index == 7 ? 'ph-caret-double-up' : 'ph-caret-down'} btn-page-down btn-quick"
    ></button>
  `  
  if(index<=6 || index == 7) {  
    _section.insertAdjacentHTML('beforeend', html)
  }

})

setFullPageScroll('container', '.scroll-item', '.btn-quick')

const wordlist = lang == 'ko' 
      ? 
    [ '호텔','모텔','펜션','리조트','호텔','모텔','펜션','리조트','호텔','모텔','펜션','리조트',] 
      : 
    ['Hotel', 'Motel', 'Pension', 'Resort', 'Hotel', 'Motel', 'Pension', 'Resort', 'Hotel', 'Motel', 'Pension', 'Resort',]
// 각각의 단어를 감싸는 div를 생성하는 함수
function buildSlotItem (text) {
  return $('<div>').addClass('slottt-machine-recipe__item').text(text)
}
// 단어 리스트에서 각 단어를 감싸는 div를 만들고 이를 단어 리스트 컨테이너에 추가하는 함수
function buildSlotContents ($container, wordlist) {
  $items = wordlist.map(buildSlotItem);
  $container.append($items);
}
// 컨테이너에서 n개의 자식 엘리먼트를 마지막 자식 다음에 추가하고 처음 n개의 자식 엘리먼트를 제거하는 함수
function popPushNItems ($container, n) {
  $children = $container.find('.slottt-machine-recipe__item');
  $children.slice(0, n).insertAfter($children.last());
  // 모든 자식 엘리먼트를 추가하면 처음부터 다시 추가하도록 하는 재귀함수
  if (n === $children.length) {
      popPushNItems($container, 1);
  }
}

// 슬라이드 애니메이션이 완료된 후 컨테이너 전면에서 일부 항목을 팝하고 끝까지 밀어넣고 싶습니다. 
// 이는 컨테이너 내부에 무한한 div 요소를 추가하지 않고 
// 애니메이션이 무한히 위쪽으로 슬라이드할 수 있도록 하기 위한 것입니다.

function rotateContents ($container, n) {
  setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
  }, 300);    
}
// 단어 리스트에서 랜덤한 단어의 인덱스를 반환하는 함수. 인덱스는 wordlist 배열의 길이보다 작아야함.
function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
}
// 각 단어의 인덱스를 계산해서 이동 애니메이션을 적용하고, 애니메이션이 끝난 후 rotateContents 함수를 호출하는 함수
function animate() {
  var wordIndex = randomSlotttIndex(wordlist.length);
  $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
      rotateContents($wordbox, wordIndex);
  });
}

$(function () {
    $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
    // 단어 리스트 컨테이너에 4개의 단어 리스트를 추가함
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    setInterval(animate, 2000);
});