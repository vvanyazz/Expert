"use strict";function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var accordionBtns=document.querySelectorAll(".difference__control");if(accordionBtns){var _step,_iterator=_createForOfIteratorHelper(accordionBtns);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(){var t=e.nextElementSibling;e.classList.toggle("active"),t.style.height==t.scrollHeight+"px"?t.style.height="0":t.style.height=t.scrollHeight+"px"}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}}var btnMenu=document.querySelector(".header__link--mobile"),menu=document.querySelector(".header__menu"),menuClose=document.querySelector(".menu__close");if(btnMenu&&btnMenu.addEventListener("click",(function(){menu.classList.toggle("active"),document.body.classList.toggle("lock")})),menuClose.addEventListener("click",(function(){menu.classList.remove("active"),document.body.classList.remove("lock")})),document.addEventListener("click",(function(e){menu.classList.contains("active")&&e.target!=btnMenu&&(e.target.closest(".header__menu")||(menu.classList.remove("active"),document.body.classList.remove("lock")))})),window.matchMedia&&window.matchMedia("(max-width: 768px").matches){var menuBtnOpen=document.querySelector(".menu__item--drop .menu__link "),menuContentDrop=document.querySelector(".menu__dropdown");menuBtnOpen.addEventListener("click",(function(){""==menuContentDrop.style.height||"0px"==menuContentDrop.style.height?menuContentDrop.style.height=menuContentDrop.scrollHeight+"px":menuContentDrop.style.height="0px"}))}var cookiesItem=document.querySelector(".cookies"),cookiesBtn=document.querySelector(".cookies__btn");cookiesBtn.addEventListener("click",(function(){cookiesItem.style.transform="translateY(100%)"}));var cookies=function(){Cookies.get("hide-cookie")||setTimeout((function(){cookiesItem.style.transform="translateY(0)"}),5e3),Cookies.set("hide-cookie","true",{expires:30})};cookies();var catalogSwiper=new Swiper(".catalog__slider",{effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".catalog__pagination",type:"fraction"},navigation:{nextEl:".catalog__button"},slidesPerView:1,simulateTouch:!1,loop:!0,speed:500}),moreBtn=document.querySelector(".safety__more"),moreText=document.querySelectorAll(".safety__descr.hide");moreBtn.addEventListener("click",(function(){moreText.forEach((function(e){e.style.height="".concat(e.scrollHeight,"px")})),moreBtn.style.display="none"}));var reviewsSwiper=new Swiper(".reviews__slider",{effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".reviews__pagination",type:"fraction"},navigation:{nextEl:".reviews__button"},slidesPerView:1,simulateTouch:!1,loop:!0,speed:500}),header=document.querySelector("header"),scrollOff=function(){var e=window.innerWidth-document.body.offsetWidth;document.body.classList.add("lock"),document.body.style.paddingRight=e+"px",header.style.paddingRight=e+"px"},scrollOn=function(){document.body.classList.remove("lock"),document.body.style.paddingRight="0",header.style.paddingRight="0"},loader=document.querySelector(".preloader"),loaderLine=document.querySelector(".preloader__line");loaderLine.classList.add("show"),scrollOff(),setTimeout((function(){loader.classList.remove("show"),scrollOn()}),3e3);var quizSteps=document.querySelectorAll(".quiz__step"),quizBtn=document.querySelectorAll(".quiz-call"),quiz=document.querySelector(".quiz"),bar=document.querySelector(".bar__line"),closeQuiz=document.querySelectorAll(".quiz__close"),counter=0;quizBtn.forEach((function(e){e.addEventListener("click",(function(){quiz.classList.remove("hide"),quizSteps[counter].classList.remove("hide"),bar.style.width="33%",scrollOff(),menu.classList.contains("active")&&menu.classList.remove("active")}))}));var firstQuizBtn=document.querySelectorAll(".quiz__btn");firstQuizBtn.forEach((function(e){e.addEventListener("click",(function(){quizSteps[counter].classList.add("hide"),counter++,bar.style.width="66%",quizSteps[counter].classList.remove("hide")}))}));var quizPrice=document.querySelectorAll(".quiz__list-item");quizPrice.forEach((function(e){e.addEventListener("click",(function(){quizSteps[counter].classList.add("hide"),counter++,bar.style.width="99%",quizSteps[counter].classList.remove("hide")}))}));var quizSubmit=document.querySelector(".quiz__content"),quizFinish=document.querySelector(".quiz__finish");quizSubmit.addEventListener("submit",(function(e){e.preventDefault(),quizSteps[counter].classList.add("hide"),quizFinish.classList.remove("hide"),bar.classList.add("goline"),setTimeout((function(){quiz.classList.add("hide"),counter=0,quizFinish.classList.add("hide"),quizSubmit.reset(),bar.classList.remove("goline"),scrollOn()}),5e3)})),quiz.addEventListener("click",(function(e){e.target.closest(".quiz__step")||(quiz.classList.add("hide"),counter=0,quizFinish.classList.add("hide"),quizSteps.forEach((function(e){e.classList.add("hide")})),bar.classList.remove("goline"),quizSubmit.reset(),scrollOn())})),closeQuiz.forEach((function(e){e.addEventListener("click",(function(){e.parentNode.classList.contains("hide")||(quiz.classList.add("hide"),counter=0,quizFinish.classList.add("hide"),quizSteps.forEach((function(e){e.classList.add("hide")})),bar.classList.remove("goline"),quizSubmit.reset(),scrollOn())}))}));