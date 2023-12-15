function setFullPageScroll(containerId, itemSelector, btnSelector) {
    const container = document.getElementById(containerId);
    const items     = container.querySelectorAll(itemSelector);
    const btns      = document.querySelectorAll(btnSelector);
    
    const getPrevItem     = (i) => items[i - 1] ?? items[i];
    const getNextItem     = (i) => items[i + 1] ?? items[i];
    const getOffsetTop    = (t) => t.offsetTop;
    const getOffsetHeight = (t) => t.offsetHeight;
    const smoothScrollTo  = (x) => window.scrollTo({ top: x, left: 0, behavior: 'smooth' });
    const smoothScrollBy  = (x) => window.scrollBy({ top: x, left: 0, behavior: 'smooth' });
    const isClick         = (e) => 
        e.target.tagName === 'button' || e.target.tagName === 'a' || 
        e.target.closest('button') || e.target.closest('a')
    
    const currentClass = 'current';
    let touchStart, touchEnd;
    
    const scrollEffect = {
        UP: (pos, idx, top) => {
            const prevItem       = getPrevItem(idx);
            const prevHeight     = getOffsetHeight(prevItem);
            const prevTop        = getOffsetTop(prevItem);
            const viewportHeight = window.innerHeight;
            const viewportTop    = pos - viewportHeight;
            const position       = top <= pos ? (prevHeight <= viewportHeight ? prevTop : viewportTop) : pos;
    
            smoothScrollTo(position);
        },
        DOWN: (pos, idx, top) => {
            const nextItem       = getNextItem(idx);
            const nextTop        = getOffsetTop(nextItem);
            const currHeight     = getOffsetHeight(items[idx]);
            const currBottom     = pos + currHeight;
            const viewportHeight = window.innerHeight;
            const viewportBottom = pos + viewportHeight;
            const scrollBottom   = top + viewportHeight;
            const isNext         = currBottom <= viewportBottom || scrollBottom > nextTop;
            const scrollRange    = window.innerHeight * 0.3;
    
            isNext ? smoothScrollTo(nextTop) : smoothScrollBy(scrollRange);
        }
    }

    function getScrollData() {
        const scrollTop     = window.scrollY || document.documentElement.scrollTop;
        const offsetTopArr  = [...items].map((item) => getOffsetTop(item));
        const getCurrentTop = offsetTopArr.filter((v) => Math.round(scrollTop) >= v).pop();
        const currentTop    = getCurrentTop ?? 0;
        const currentIdx    = offsetTopArr.indexOf(getCurrentTop);

        return {
            scrollTop: Math.round(scrollTop),
            currentTop: currentTop,
            currentIdx: currentIdx,
        }
    }
    
    function smoothScrolling(type) {
        const top = getScrollData().scrollTop;
        const idx = getScrollData().currentIdx;
        const pos = getScrollData().currentTop;

        scrollEffect[type](pos, idx, top);
    }

    function removeCurrentClass(target) {
        target.forEach((elem) => {
            elem.classList.contains(currentClass) && elem.classList.remove(currentClass);
        });
    }

    function addCurrentClass(idx) {
        items[idx].classList.add(currentClass);

        const currentItem = container.querySelector(`.${currentClass}`);
        const currentId   = currentItem.dataset.scrollId;

        btns.forEach((elem) => {
            elem.dataset.scrollTarget === currentId && elem.classList.add(currentClass);
        })
    }
    
    function touchStartHandler(e) {
        if (isClick(e)) return;
        e.preventDefault();

        touchStart = e.touches[0].clientY;
        touchEnd   = null;
    }
    
    function touchMoveHandler(e) {
        e.preventDefault();
    
        touchEnd = e.changedTouches[0].clientY;
    }
    
    function touchEndHandler(e) {
        if (!touchEnd || isClick(e)) return;
        e.preventDefault();
    
        const touchRange = 100;
        const touchUp    = touchStart < (touchEnd - touchRange);
        const touchDown  = touchStart > (touchEnd + touchRange);
        const direction  = touchUp ? 'UP' : (touchDown ? 'DOWN' : null);
        
        !!direction && smoothScrolling(direction);
    }
    
    function mouseWheelHandler(e) {
        e.preventDefault();
    
        const delta      = e.wheelDelta;
        const detail     = e.detail;
        const scrollUp   = delta > 0 || detail < 0;
        const scrollDown = delta < 0 || detail > 0;
        const direction  = scrollUp ? 'UP' : (scrollDown ? 'DOWN' : null);
    
        !!direction && smoothScrolling(direction);
    }
    
    function clickHandler(e) {
        const scrollTarget = e.target.dataset.scrollTarget;
        const targetItem   = container.querySelector(`[data-scroll-id="${scrollTarget}"]`);
        const targetTop    = getOffsetTop(targetItem);

        smoothScrollTo(targetTop);
    }

    function setCurrentClass() {
        const idx = getScrollData().currentIdx;

        removeCurrentClass(items);
        removeCurrentClass(btns);
        addCurrentClass(idx);
    }
    
    function touchScrollEvent() {
        container.addEventListener('touchstart', touchStartHandler);
        container.addEventListener('touchmove', touchMoveHandler);
        container.addEventListener('touchend', touchEndHandler);
    }
    
    function wheelScrollEvent() {
        container.addEventListener('mousewheel', mouseWheelHandler);
        container.addEventListener('DOMMouseScroll', mouseWheelHandler);
    }

    function initScrollEvent() {
        const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

        isTouchDevice() ? touchScrollEvent() : wheelScrollEvent();
    }

    window.addEventListener('scroll', setCurrentClass);
    window.addEventListener('resize', initScrollEvent);
    btns.forEach((elem) => elem.addEventListener('click', clickHandler));

    setCurrentClass();
    initScrollEvent();
}

// 모바일 vh 버그 수정 코드
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);