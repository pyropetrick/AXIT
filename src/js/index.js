// Tabs 
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__box-wrap");

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tabs__nav-btn--active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tabs__nav-btn--active');
            })
            tabsItems.forEach(function(item) {
                item.classList.remove('tabs__box-wrap--active');
            })
            currentBtn.classList.add('tabs__nav-btn--active');
            currentTab.classList.add('tabs__box-wrap--active');

        }
        
        
    })
}
tabsBtn.forEach(onTabClick);


document.querySelector(".tabs__nav-btn").click();

// reviews

const dotBtn = document.querySelectorAll(".dots-nav__btn");
const dotItem = document.querySelectorAll(".reviews__comment-block");

function onDotClick(item) {
    item.addEventListener("click", function() {
        let currentDot = item;
        let dotId = currentDot.getAttribute("data-tab");
        let currentDotId = document.querySelector(dotId);

        if (!currentDot.classList.contains('dots-nav__btn--active')) {
            dotBtn.forEach(function(item) {
                item.classList.remove('dots-nav__btn--active');
            })
            dotItem.forEach(function(item) {
                item.classList.remove('reviews__comment-block--active');
            })
            currentDot.classList.add('dots-nav__btn--active');
            currentDotId.classList.add('reviews__comment-block--active');
        }
    })
}

dotBtn.forEach(onDotClick);

document.querySelector(".dots-nav__btn").click();



// menu-burger

const burgerBtn = document.querySelectorAll(".burger-btn");

function onBurgerClick (item) {
    item.addEventListener("click", function() {
        const body = document.querySelector('body');
        const menuBurger = document.querySelector(".burger-menu");
        const menuBurgerActive = document.querySelector(".burger-menu--active");
        if (menuBurgerActive)  {
            body.classList.remove('lock');
            menuBurgerActive.classList.remove('burger-menu--active'); 
        }
        else  {
            body.classList.add('lock');
            menuBurger.classList.add("burger-menu--active"); 
        }

    })
}

burgerBtn.forEach(onBurgerClick);

