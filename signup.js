$(document).ready(function(){

    //Better than using two lines of code
    $(".messageContainer").hide();
    $('.centerNames').hide();

//Kou's original thought process
    // $("#errorMessage").hide();
    // $("#successMessage").hide();
   

//Now I want to assign the targeted element's value to the variable I just created
var userEmail =  $('#Email').val();

console.log(userEmail);



//FUNCTION
$('#submitter').click(function(){

    var userEmail =  $('#Email').val();
    var userName = $('#Name').val();
    

    //if it's empty have an alert
  if (!userName && !userEmail ){
    $('#noName').slideDown('slow');
    $('#errorMessage').slideDown('slow');
    $('#successMessage').slideUp();
    return;
  } else if (!userEmail || !(userEmail.indexOf("@") > -1)){
        $('#errorMessage').slideDown('slow');
        $('#successMessage').slideUp();
        $('#noName').slideUp();
        return;
    } else if (!userName){
        $('#noName').slideDown('slow');
        $('#successMessage').slideUp();
        $('#errorMessage').slideUp();
        return;
    }
    
 
    //At this point we can assume that it is NOT empty AND it includes a @
    $('#successMessage').slideDown('slow');
     $('#errorMessage').slideUp();
     $('#noName').slideUp();

})


//GOOD EXAMPLE OF INTRICATE SIBLING SELECTORS
//PROBABLY NOT THE BEST WAY TO DO THE CODE, BUT EDUCATIONAL
$('.photoSizing, .centerNames').hover(function(){
    
    
        //Creating a variable to hold the sibling of the specifically targeted image.
        var onlySiblingsID = $(this).siblings(".centerNames").first().attr('id'); 

        //1 will be returned

        var idOfTheImagesText = '#' + onlySiblingsID;

     
        $(idOfTheImagesText).addClass('animate__animated animate__fadeInUp');
    
        $(idOfTheImagesText).show();
})

// code that make the names hide again after no longer hovering photo//
$('.memberPictures > div').mouseleave(function(){
    
    $('.centerNames').hide();
})




}


)

// $(document).ready(function(){
//     $("p").hide();
   

// //Now I want to assign the targeted element's value to the variable I just created
// var userEmail =  $('#Email').val();

// console.log(userEmail);



// //FUNCTION
// $('#submitter').click(function(){

//     var userEmail =  $('#Email').val();
    


//     //if it's empty have an alert
//     if (!userEmail || !(userEmail.indexOf("@") > -1)){
//         $(".errorEmail").slideDown();
//         return;
//     }
    
 
//     //At this point we can assume that it is NOT empty AND it includes a @
//     alert("Congrats , you've sign-up with email: " + userEmail)

// })



// })