$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

$("#quoteForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitQuote();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#p_name").val();
    var email = $("#p_email").val();
    var subject = $("#p_subject").val();
    var message = $("#p_message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function submitQuote(){
    // Initiate Variables With Form Content
    var name = $("#p_name").val();
    var select = $("#p_select option:selected" ).text();
    var email = $("#p_email").val();
    var subject = $("#p_subject").val();
    var message = $("#p_message").val();

    $.ajax({
        type: "POST",
        url: "php/quote-process.php",
        data: "name=" + name + "&select=" + select + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#success").removeClass().addClass(msgClasses).text(msg);
}