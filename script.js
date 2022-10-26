'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonOpenModal =
  document.querySelectorAll(
    '.show-modal'
  ); /* querySelectorAll selects all elements with the class 'show-modal' */

//function that closes modal
const closeModal = function () {
  modal.classList.add('hidden'); //adds hidden class back to element
  overlay.classList.add('hidden');
};

//adds ability to open modal and overlay
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //classList.remove removes the 'hidden' class from the modal buttons
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModal);
}

//adds ability to click x to close window/overlay
buttonCloseModal.addEventListener('click', closeModal);
//adds ability to click actual overlay to close modal
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
