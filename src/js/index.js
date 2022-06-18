// Tabs 
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__box-wrap");

tabsBtn.forEach(onTabClick);

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
            currentTab.classList.add('tabs__box-wrap--active')
        }
        
        
    })
}
document.querySelector(".tabs__nav-btn").click();

// // price-list

// const priceList = document.querySelectorAll(".price__list-item");

// priceList.forEach(onPriceHover);

// function onPriceHover(item) {
//     item.addEventListener("mouseover", function() {
//         let currentItem = item;
//         if (!currentItem.classList.contains('price__list-item--active')) {
//             priceList.forEach(function(item) {
//                 item.classList.remove('price__list-item--active');
//             })
//             currentItem.classList.add('price__list-item--active');
//         }
//     })
// }

// document.querySelector(".price__list-item:nth-child(2)").click();