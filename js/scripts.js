// Activate the reserve room modal when the Reserve Room for FungiFest button is clicked, and 
// the login modal when the when the Login button is clicked. 
// Begin with (document).ready() function; only one is needed per file. 
// Add jQuery id selector; bind jQuery click event handler to this selector. 
// Inside click event handler, query for modal's id element, then attach .modal("show") 
/* Original method allowed user to dismiss modal by clicking outside of it:
    /* $('#reserveButton').click(() => { // id selector
        $('#reserveModal').modal('show');
    }); 

   Add the "backdrop: 'static'" property that doesn't let user close modal by clicking outside of modal. 
   (Left out: "Keyboard: true" is a default and desired behavior which prevents the use of <esc> to dismiss the modal. 
   "Focus: true" puts the focus on the modal, also a desired default behavior.)
*/

$(() => {  
    // .click() method mistakenly marked for deprecation in this jQuery version; corrected in later versions.
    $('#reserveButton').click(() => {   
        $('#reserveModal').modal({
            backdrop: 'static',
            show: true
        });
    }); 

    $('#loginButton').click(() => {
        $('#loginModal').modal({
            backdrop: 'static',
            show: true
        });
    });
  
    $('.carousel').carousel( { interval: 2000 } ); // class selector; initializes
    $('#carouselButton').click(() => {
        if ($('#carouselButton').children('i').hasClass('fa-pause')) { // i stands for idiomatic text element.
            $('.carousel').carousel('pause'); // element initialized to pause because data-ride set to automatic (auto-cycling).
            $('#carouselButton').children('i').removeClass('fa-pause');
            $('#carouselButton').children('i').addClass('fa-play');
        } else {
            $('.carousel').carousel('cycle');
            $('#carouselButton').children('i').removeClass('fa-play');
            $('#carouselButton').children('i').addClass('fa-pause');
        }
    });
});
 