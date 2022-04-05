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





});