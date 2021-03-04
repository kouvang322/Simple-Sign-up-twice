$(document).ready(function(){

    //Better than using two lines of code
    $(".messageContainer").hide();

//Kou's original thought process
    // $("#errorMessage").hide();
    // $("#successMessage").hide();
   

//Now I want to assign the targeted element's value to the variable I just created
var userEmail =  $('#Email').val();

console.log(userEmail);



//FUNCTION
$('#submitter').click(function(){

    var userEmail =  $('#Email').val();
    

    //if it's empty have an alert
    if (!userEmail || !(userEmail.indexOf("@") > -1)){
        $('#errorMessage').slideDown('slow');
        $('#successMessage').slideUp();
        return;
    }
    
 
    //At this point we can assume that it is NOT empty AND it includes a @
    $('#successMessage').slideDown('slow');
     $('#errorMessage').slideUp();

})



})

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