$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        loop: true
    });

    function togglePopup(ClassName) {
        var popupClose = document.querySelector(ClassName);
        popupClose.classList.toggle('popup_show');
    }

    function closePopup() {
        var popupClose = document.querySelectorAll('.popup');
        for (var i = 0; i < popupClose.length; i++) {
            var obj2 = popupClose[i];
            obj2.classList.remove('popup_show');
        }
    }

    function showPopupEvent() {
        var btnsItems = document.querySelectorAll('.js__show-popup');
        for (var i = 0; i < btnsItems.length; i++) {
            var obj3 = btnsItems[i];
            obj3.addEventListener('click', function (e) {
                e.preventDefault();
                var currentPopup = this.getAttribute('data-popup');
                togglePopup('.' + currentPopup)
            });
        }
    }


    showPopupEvent();

    // function  openModal(){
    //     document.querySelector('.message_send_btn').onclick = function(){
    //         var currentPopupSend = document.querySelector('.popup__add-review')
    //         currentPopupSend.classList.remove('popup_show');
    //         var currentPopupShow = document.querySelector('.popup__thanks');
    //         currentPopupShow.classList.add('popup_show');
    //
    //     };
    //
    //
    // }
    // openModal()


    function closeBtns() {
        var closeButton = document.querySelectorAll('.js__close-popup');
        for (var i = 0; i < closeButton.length; i++) {
            var obj2 = closeButton[i];
            obj2.addEventListener('click', function (e) {
                e.preventDefault();
                closePopup()
            })
        }
    }

    closeBtns();

    function findParentBySelector(elm, selector) {
        var all = document.querySelectorAll(selector);
        var cur = elm.parentNode;
        while (cur && !collectionHas(all, cur)) {
            cur = cur.parentNode;
        }
        return cur;
    }

    function collectionHas(a, b) { //helper function (see below)
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i] == b) return true;
        }
        return false;
    }

    sliderInit.init();
    svg4everybody();
    // chooseColor.init();
    castomSelect.init();
    countAmount.init();
});

var methods = {
    checkMobile: function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    removeAllClass: function (arrayClasses, removedClass) {
        for (var i = 0; i < arrayClasses.length; i++) {
            var arrayItem = arrayClasses[i];
            arrayItem.classList.remove(removedClass)
        }
    }
};

var sliderInit = {
    mainSlider: '',
    init: function () {
        var productSliderSmallOne = new Swiper('.product__small-img-1 .swiper-container', {
            speed: 400,
            spaceBetween: 13,
            // loop: true,
            slidesPerView: 'auto',
            // autoplay: {
            //     delay: 5000,
            // },
            breakpoints: {
                // when window width is >= 480px
                480: {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                },

            }
        });
        var productSliderSmallTwo = new Swiper('.product__small-img-2 .swiper-container', {
            speed: 400,
            spaceBetween: 13,
            // loop: true,
            slidesPerView: 'auto',
            // autoplay: {
            //     delay: 5000,
            // },
            breakpoints: {
                // when window width is >= 480px
                480: {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                },

            }
        });


        function cnageSliderActiveSmall(current, index) {
            var gallerySmallItems = document.querySelectorAll('.gallery__small-item');
            for (var i = 0; i < gallerySmallItems.length; i++) {
                var gallerySliderSmallElement = gallerySmallItems[i];
                gallerySliderSmallElement.classList.remove('active')
            }
            if (typeof index !== 'undefined') {
                gallerySmallItems[index].classList.add('active');
            } else {
                current.classList.add('active');
            }
        }

        var gallerySliderSmall = new Swiper('.gallery__small-slider .swiper-container', {
            direction: 'vertical',
            speed: 400,
            spaceBetween: 7,
            // loop: true,
            slidesPerView: 'auto',
            // autoplay: {
            //     delay: 5000,
            // },
            // centeredSlides:true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            on: {
                init: function () {
                    cnageSliderActiveSmall(false, this.realIndex)
                    // gallerySliderSmall.slideTo(this.realIndex, 800, false);/*/
                },
            },
        });


        if (window.innerWidth > 768) {
            var gallerySliderBig = new Swiper('.gallery__big-slider .swiper-container', {
                direction: 'vertical',
                speed: 400,
                spaceBetween: 30,
                // loop: true,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.gallery-button-next',
                    prevEl: '.gallery-button-prev'
                },
                on: {
                    slideChange: function () {
                        cnageSliderActiveSmall(false, this.realIndex)
                        gallerySliderSmall.slideTo(this.realIndex, 800, false);
                    },
                },
            });

            gallerySliderSmall.on('click', function () {
                // console.log("cli", this.clickedIndex, this.realIndex);
                // console.log(this.clickedSlide);
                cnageSliderActiveSmall(this.clickedSlide)
                gallerySliderBig.slideTo(this.clickedIndex, 800, false);
            });
        } else {
            var gallerySliderBigMobile = new Swiper('.gallery__big-slider-mobile .swiper-container', {
                direction: 'horizontal',
                speed: 400,
                spaceBetween: 30,
                // loop: true,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.gallery-button-next',
                    prevEl: '.gallery-button-prev'
                },
            });
        }

        var reviewSlider = new Swiper('.reviews-slider-big .swiper-container', {
            speed: 400,
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            // centeredSlides:true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.review-button-next',
                prevEl: '.review-button-prev'
            },
            pagination: {
                el: '.review-pagination',
                type: 'bullets',
                clickable: true,
                // dynamicBullets: true,
                // dynamicMainBullets: 6
            },
            breakpoints: {
                // when window width is >= 480px
                480: {
                    // autoHeight:true,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                },
                979: {
                    // autoHeight:true,
                    spaceBetween: 0,
                    slidesPerView: 'auto',
                },

            }
        });
    }

};


(function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {
            return null
        }
        else return this.parentElement.closest(selector)
    };
}(Element.prototype));

var castomSelect = {
    init: function () {
        this.findElemets();
    },
    createSelect: function (itemPhone) {
        var createFormGroup = document.createElement('div');
        createFormGroup.className = 'form-group';

        var createSelectDiv = document.createElement('div');
        createSelectDiv.className = 'select';

        var formSelect = document.createElement('select');
        formSelect.className = 'nice-select';
        formSelect.name = 'choose-size';
        var arrayOptions = ['Размер', '40 - 26,5 см', '41 - 27,5 см', '42 - 28 см', '43 - 28.5 см', '44 - 29 см', '45 - 29.5 см'];
        arrayOptions.forEach(function (value, index) {
            var opt = document.createElement('option');
            if (index === 0) {
                opt.selected = 'selected';
                opt.disabled = 'disabled';
                opt.hidden = 'hidden'
            }
            opt.value = index;
            opt.innerHTML = value;
            formSelect.appendChild(opt);
        });
        createSelectDiv.appendChild(formSelect);
        createFormGroup.appendChild(createSelectDiv);

        this.addSelect(createFormGroup, itemPhone);
    },
    addSelect: function (createFormGroup, itemPhone) {
        var parentFormGroup = itemPhone.closest('.form-group');
        this.insertAfter(createFormGroup, parentFormGroup)
        this.initSelect();

    },
    findElemets: function () {
        var elementPhone = document.querySelectorAll('[name="phone"]');
        for (var i = 0; i < elementPhone.length; i++) {
            var itemPhone = elementPhone[i];
            this.createSelect(itemPhone)
        }

    },
    initSelect: function () {
        // console.log('asdasdasd');
        $('select').niceSelect();
    },
    insertAfter: function (elem, refElem) {
        var parent = refElem.parentNode;
        var next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    },
};

var countAmount = {
    objectElements:[],
    timerId:'',
    init: function () {
        this.countNumber();
    },

    startTimer: function (duration) {
        var timer = duration, seconds;
        var self = this;
       this.timerId = setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            if (--timer < 0) {
                timer = duration;
                self.update();
            }
        }, 1000);
    },

    countNumber: function () {
        var self = this;
        var countNumbersAll = document.querySelectorAll('.js__total-amount');
        for (var i = 0; i < countNumbersAll.length; i++) {
            var countNumberElement = countNumbersAll[i];
            var currentCountNumber = +countNumberElement.getAttribute('data-count');

            this.objectElements.push({
                el:countNumberElement,
                startNumber:currentCountNumber,
                currentCount:currentCountNumber
            });

            countNumberElement.innerHTML = currentCountNumber
        }
        this.startTimer(15,false)
        setTimeout(function (){
            clearInterval(self.timerId);
            self.startTimer(40,true)
        },16*1000)
    },

    update:function(){
        this.objectElements.forEach(function (item,state){
            if(item.currentCount <= 1){
                item.currentCount = item.startNumber
            }else{
                item.currentCount -= 1;
            }
            item.el.innerHTML = item.currentCount;
        })
    }

};