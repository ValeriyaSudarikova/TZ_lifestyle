"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //modal windows

    const overlay = document.querySelector('.overlay'),
          modalCloseUp = document.querySelector('.modal__close-up'),
          modalCloseIn = document.querySelector('.modal__close-in'),
          modalSignUpTrigger = document.querySelector('#sign-up'),
          modalSignInTrigger = document.querySelector('#sign-in'),
          modalWindSignUp = document.querySelector('.modal__sign-up'),
          modalWindSignIn = document.querySelector('.modal__sign-in');

    const SignUpOpen = () => {
        overlay.style.display = 'block'
        modalWindSignUp.style.display = 'block';
    };

    const SignUpClose = () => {
        overlay.style.display = 'none'
        modalWindSignUp.style.display = 'none';
    }

    const SignInOpen = () => {
        overlay.style.display = 'block'
        modalWindSignIn.style.display = 'block';
    };

    const SignInClose = () => {
        overlay.style.display = 'none'
        modalWindSignIn.style.display = 'none';
    }

    modalSignUpTrigger.addEventListener('click', SignUpOpen);
    modalSignInTrigger.addEventListener('click', SignInOpen);
    modalCloseUp.addEventListener('click', SignUpClose);
    modalCloseIn.addEventListener('click', SignInClose);

    //slider 

    let slideIndex = 1; 
    const next = document.querySelector('#right'),
          prev = document.querySelector('#left'),
          slides = document.querySelectorAll('.slider__item')

    sliderShow(slideIndex);


    function sliderShow(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex].style.display = 'block';
        slides[slideIndex + 1].style.display = 'block';

    }

    function plusSlide(n) {
        sliderShow(slideIndex += n);
    }

    next.addEventListener('click', function() {
        plusSlide(1)
    });
    prev.addEventListener('click', function() {
        plusSlide(-1)
    });


});