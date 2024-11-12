const searchDropdownContent = $(".search-dropdown-content");
const searchDropdown = $(".search-dropdown");
const swiperBanner = new Swiper('.swiper-container-banner', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: {
        el: '.swiper-container-banner .swiper-pagination',
        clickable: true,
    }
});

const swiperCategory = new Swiper('.swiper-container-category', {
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: { delay: 3000 },
    loop: true,
    pagination: {
        el: '.swiper-container-category .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-container-category .swiper-button-next',
        prevEl: '.swiper-container-category .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 6,
        },
        1024: {
            slidesPerView: 8,
        },
        1280: {
            slidesPerView: 9,
        }
    }
});
const swiperPopularRight = new Swiper('.swiper-container-popular-right', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 6000 },
    loop: true,
    pagination: {
        el: '.swiper-container-popular-right .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-container-popular-right .swiper-button-next',
        prevEl: '.swiper-container-popular-right .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    }
});
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 10) { // Adjust as needed
        header?.classList?.add("fixed");
    } else {
        header?.classList?.remove("fixed");
    }
});
function opensearch() {
    const searchDropdown = $('.search-dropdown');
    searchDropdown.toggleClass("d-block")
}
function scrollUp() {
    const thumbnails = document.getElementById("thumbnails");
    thumbnails.scrollBy({ top: -100, behavior: "smooth" });
}
function scrollDown() {
    const thumbnails = document.getElementById("thumbnails");
    thumbnails.scrollBy({ top: 100, behavior: "smooth" });
}
function toggleDropdown(element) {
    $(element).closest('.filter-dropdown').toggleClass("close");
}
function openMenu() {
    const mobileHeader = $(".mobile-header");
    mobileHeader.toggleClass('w-100')
}
function closeMenu() {
    const mobileHeader = $(".mobile-header");
    mobileHeader.toggleClass('w-100')
}
searchDropdown.on('click',function(){
    searchDropdown.removeClass("d-block");
});