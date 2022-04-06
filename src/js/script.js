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

    //form-validation 

    const signIn = document.querySelector('#form_signIn'),
          signUp = document.querySelector('#form_signUp');


    function formValidate(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true, 
                    minlength: 2
                },
                password: {
                    required: true, 
                    minlength: 8
                },
                check: {
                    required: true, 
                    minlength: 8,
                    equalTo: '#password'
                }
            },
            messages: {
                name: {
                    required: "Please, enter your name",
                    minlength: jQuery.validator.format("enter at least {2} letters")
                }, 
                password: {
                    required: "Please, enter your password",
                    minlength: jQuery.validator.format("enter at least {8} letters")
                },
                check: {
                    required: "Please, enter your password again",
                    equalTo: "The parrword doesn't match"
                }
            }
        });
    }

    formValidate(signIn);
    formValidate(signUp);

    // scroll 

    $(window).scroll(() => {
        if ($(this).scrollTop() > 1000) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $(".scroll-up").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
});