 /* 10c, logs: true */
 console.log(document.querySelector('.js-button-10-c').classList.contains('js-button-10-c'));    
  /*10e-10g*/    
 function toggleButton (buttonName) {
   const button = document.querySelector(`${buttonName}`);
   if (!button.classList.contains('is-toggled')) {
     button.classList.add('is-toggled');
   } else {
     button.classList.remove('is-toggled');
   }
 }