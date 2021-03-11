$(document).ready(function () {

    //Better than using two lines of code
    $(".messageContainer").hide();
    $('.centerNames').hide();

    //Kou's original thought process
    // $("#errorMessage").hide();
    // $("#successMessage").hide();


    //Now I want to assign the targeted element's value to the variable I just created
    var userEmail = $('#Email').val();

    console.log(userEmail);



    //FUNCTION for submitter
    $('#submitter').click(function () {

        var userEmail = $('#Email').val();
        var userName = $('#Name').val();


        //if it's empty have an alert
        if (!userName && !userEmail) {
            $('#successMessage').slideUp();
            $('#noName').slideDown('slow');
            $('#errorMessage').slideDown('slow');
            return;
        } else if (!userName && !(userEmail.indexOf("@") > -1)) {
            $('#successMessage').slideUp();
            $('#noName').slideDown('slow');
            $('#errorMessage').slideDown('slow');
            return;
        } else if (!userEmail || !(userEmail.indexOf("@") > -1)) {
            $('#successMessage').slideUp();
            $('#noName').slideUp();
            $('#errorMessage').slideDown('slow');
            return;
        } else if (!userName) {
            $('#successMessage').slideUp();
            $('#errorMessage').slideUp();
            $('#noName').slideDown('slow');
            return;
        }


        //At this point we can assume that it is NOT empty AND it includes a @

        $('#errorMessage').slideUp();
        $('#noName').slideUp();

        $('#successMessage').slideDown('slow').delay(2000);

        //This line of code changes the text using concatenation
        //This line of code plugs in the text and then adds a class to animate it.
        $('#signUpConfirmation').text("Thank you, " + userName + ". We will send you future updates to this email: " + userEmail).addClass('animate__animated animate__bounceInUp');

    })





    //GOOD EXAMPLE OF INTRICATE SIBLING SELECTORS
    //PROBABLY NOT THE BEST WAY TO DO THE CODE, BUT EDUCATIONAL
    $('.photoSizing, .centerNames').hover(function () {


        //Creating a variable to hold the sibling of the specifically targeted image.
        var onlySiblingsID = $(this).siblings(".centerNames").first().attr('id');

        //1 will be returned

        var idOfTheImagesText = '#' + onlySiblingsID;


        $(idOfTheImagesText).addClass('animate__animated animate__fadeInUp');

        $(idOfTheImagesText).show();
    })

    // code that make the names hide again after no longer hovering photo//
    $('.memberPictures > div').mouseleave(function () {

        $('.centerNames').hide();
    })


}


)
